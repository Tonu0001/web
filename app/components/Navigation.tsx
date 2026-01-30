"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./Button";
import ReservationModal from "./ReservationModal";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/menu", label: "Menu" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[var(--z-fixed)] transition-all duration-[var(--duration-normal)] ${
          isScrolled
            ? "bg-[var(--color-cream)] shadow-[var(--shadow-sm)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1296px] mx-auto px-5 md:px-8 lg:px-[72px]">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="text-[var(--color-oak-dark)] group-hover:text-[var(--color-barrel-gold)] transition-colors"
              >
                <path
                  d="M16 2C16 2 8 6 8 14C8 18 10 22 16 26C22 22 24 18 24 14C24 6 16 2 16 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M16 8V20M12 12L16 16L20 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-oak-dark)]">
                Oak & Barrel
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors relative ${
                    isActive(link.href)
                      ? "text-[var(--color-barrel-gold)]"
                      : "text-[var(--color-oak-dark)] hover:text-[var(--color-barrel-gold)]"
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-barrel-gold)] rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button onClick={() => setIsReservationOpen(true)}>
                Reserve Table
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-[var(--color-oak-dark)] hover:text-[var(--color-barrel-gold)] transition-colors"
              aria-label="Open menu"
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
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[var(--z-modal)] md:hidden">
          <div
            className="absolute inset-0 bg-[var(--color-cream)] animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative h-full flex flex-col px-5 py-6">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-[var(--color-oak-dark)] hover:text-[var(--color-barrel-gold)] transition-colors"
                aria-label="Close menu"
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
            </div>

            {/* Mobile Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-[var(--font-display)] text-3xl font-medium transition-colors animate-fade-in-up stagger-${index + 1} ${
                    isActive(link.href)
                      ? "text-[var(--color-barrel-gold)]"
                      : "text-[var(--color-oak-dark)]"
                  }`}
                  style={{ opacity: 0 }}
                >
                  {link.label}
                </Link>
              ))}
              <div
                className="mt-8 animate-fade-in-up stagger-4"
                style={{ opacity: 0 }}
              >
                <Button
                  size="lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsReservationOpen(true);
                  }}
                >
                  Reserve Table
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div
              className="text-center space-y-2 text-sm text-[var(--color-oak-medium)] animate-fade-in-up stagger-5"
              style={{ opacity: 0 }}
            >
              <p className="flex items-center justify-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                123 Oak Street, NYC
              </p>
              <p className="flex items-center justify-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}
