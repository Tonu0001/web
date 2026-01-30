"use client";

import { useState, useEffect } from "react";
import Button from "./Button";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({
  isOpen,
  onClose,
}: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    partySize: "2",
    dateTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setIsSubmitted(false);
      setIsSubmitting(false);
      setError(null);
      setFormData({ name: "", partySize: "2", dateTime: "" });
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          partySize: formData.partySize,
          dateTime: formData.dateTime,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create reservation");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format datetime for display
  const formatDateTime = (dateTimeStr: string) => {
    if (!dateTimeStr) return { date: "", time: "" };
    const date = new Date(dateTimeStr);
    return {
      date: date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    };
  };

  // Get minimum datetime (now + 1 hour, rounded to next 30 min)
  const getMinDateTime = () => {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    now.setMinutes(Math.ceil(now.getMinutes() / 30) * 30);
    now.setSeconds(0);
    now.setMilliseconds(0);
    return now.toISOString().slice(0, 16);
  };

  if (!isOpen) return null;

  const { date: displayDate, time: displayTime } = formatDateTime(formData.dateTime);

  return (
    <div className="fixed inset-0 z-[var(--z-modal)]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[var(--color-overlay-dark)] animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          className="relative bg-[var(--color-cream)] rounded-[var(--radius-xl)] max-w-md w-full p-8 shadow-[var(--shadow-2xl)] animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-[var(--color-oak-medium)] hover:text-[var(--color-oak-dark)] transition-colors"
            aria-label="Close modal"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-semibold text-[var(--color-oak-dark)]">
                  Reserve Your Table
                </h2>
                <p className="mt-2 text-[var(--color-oak-medium)] text-sm">
                  Book your dining experience at Oak & Barrel
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-[var(--radius-md)] text-red-700 text-sm">
                  {error}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-oak-dark)] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    disabled={isSubmitting}
                    className="w-full h-12 px-4 bg-[var(--color-warm-white)] border border-[var(--color-linen)] rounded-[var(--radius-md)] text-[var(--color-oak-dark)] placeholder:text-[var(--color-oak-muted)] transition-all focus:border-[var(--color-barrel-gold)] focus:shadow-[var(--shadow-gold-sm)] outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="John Smith"
                  />
                </div>

                {/* Party Size */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-oak-dark)] mb-2">
                    Party Size
                  </label>
                  <select
                    value={formData.partySize}
                    onChange={(e) =>
                      setFormData({ ...formData, partySize: e.target.value })
                    }
                    disabled={isSubmitting}
                    className="w-full h-12 px-4 bg-[var(--color-warm-white)] border border-[var(--color-linen)] rounded-[var(--radius-md)] text-[var(--color-oak-dark)] transition-all focus:border-[var(--color-barrel-gold)] focus:shadow-[var(--shadow-gold-sm)] outline-none appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "guest" : "guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-oak-dark)] mb-2">
                    Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    required
                    value={formData.dateTime}
                    onChange={(e) =>
                      setFormData({ ...formData, dateTime: e.target.value })
                    }
                    min={getMinDateTime()}
                    disabled={isSubmitting}
                    className="w-full h-12 px-4 bg-[var(--color-warm-white)] border border-[var(--color-linen)] rounded-[var(--radius-md)] text-[var(--color-oak-dark)] transition-all focus:border-[var(--color-barrel-gold)] focus:shadow-[var(--shadow-gold-sm)] outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  className="mt-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Confirming..." : "Confirm Reservation"}
                </Button>
              </form>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-success)] rounded-full flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-oak-dark)] mb-2">
                Reservation Confirmed!
              </h2>
              <p className="text-[var(--color-oak-medium)] mb-6">
                Thank you, {formData.name}. We&apos;ve reserved a table for{" "}
                {formData.partySize} {Number(formData.partySize) === 1 ? "guest" : "guests"} on{" "}
                {displayDate} at {displayTime}.
              </p>
              <Button onClick={onClose} variant="secondary">
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
