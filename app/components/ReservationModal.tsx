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
    date: "",
    time: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setIsSubmitted(false);
      setFormData({ name: "", partySize: "2", date: "", time: "" });
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

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
                    className="w-full h-12 px-4 bg-[var(--color-warm-white)] border border-[var(--color-linen)] rounded-[var(--radius-md)] text-[var(--color-oak-dark)] placeholder:text-[var(--color-oak-muted)] transition-all focus:border-[var(--color-barrel-gold)] focus:shadow-[var(--shadow-gold-sm)] outline-none"
                    placeholder="John Smith"
                  />
                </div>

                {/* Party Size & Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-oak-dark)] mb-2">
                      Party Size
                    </label>
                    <select
                      value={formData.partySize}
                      onChange={(e) =>
                        setFormData({ ...formData, partySize: e.target.value })
                      }
                      className="w-full h-12 px-4 bg-[var(--color-warm-white)] border border-[var(--color-linen)] rounded-[var(--radius-md)] text-[var(--color-oak-dark)] transition-all focus:border-[var(--color-barrel-gold)] focus:shadow-[var(--shadow-gold-sm)] outline-none appearance-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-oak-dark)] mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full h-12 px-4 bg-[var(--color-warm-white)] border border-[var(--color-linen)] rounded-[var(--radius-md)] text-[var(--color-oak-dark)] transition-all focus:border-[var(--color-barrel-gold)] focus:shadow-[var(--shadow-gold-sm)] outline-none cursor-pointer"
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-oak-dark)] mb-2">
                    Preferred Time
                  </label>
                  <select
                    required
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full h-12 px-4 bg-[var(--color-warm-white)] border border-[var(--color-linen)] rounded-[var(--radius-md)] text-[var(--color-oak-dark)] transition-all focus:border-[var(--color-barrel-gold)] focus:shadow-[var(--shadow-gold-sm)] outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Select a time</option>
                    {[
                      "5:00 PM",
                      "5:30 PM",
                      "6:00 PM",
                      "6:30 PM",
                      "7:00 PM",
                      "7:30 PM",
                      "8:00 PM",
                      "8:30 PM",
                      "9:00 PM",
                      "9:30 PM",
                    ].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <Button type="submit" fullWidth size="lg" className="mt-6">
                  Confirm Reservation
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
                {formData.partySize} on {formData.date} at {formData.time}.
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
