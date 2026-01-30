"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import PopularDishCard from "./components/PopularDishCard";
import EventCard from "./components/EventCard";
import ReservationModal from "./components/ReservationModal";

const popularDishes = [
  {
    name: "Truffle Burrata",
    price: 18,
    rating: 5,
    image: "/images/truffle-burrata.webp",
  },
  {
    name: "Dragon Roll",
    price: 24,
    rating: 4.5,
    image: "/images/dragon-roll.webp",
  },
  {
    name: "Filet Mignon",
    price: 52,
    rating: 5,
    image: "/images/filet-mignon.webp",
  },
  {
    name: "Oak Burger",
    price: 22,
    rating: 4.5,
    image: "/images/classic-oak-burger.webp",
  },
];

const upcomingEvents = [
  {
    title: "Jazz Night with Blue Note Trio",
    date: "Fri, Jan 31",
    time: "7:00 PM - 10:00 PM",
    description:
      "Enjoy smooth jazz performances while dining on our finest dishes. Perfect for a romantic evening.",
    image: "/images/jazz-night-event.webp",
  },
  {
    title: "Sunday Acoustic Brunch",
    date: "Sun, Feb 2",
    time: "11:00 AM - 2:00 PM",
    description:
      "Relaxing acoustic melodies paired with our special brunch menu. Family-friendly atmosphere.",
    image: "/images/acoustic-brunch-event.webp",
  },
];

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 pb-16 overflow-hidden bg-[var(--color-cream)]">
        <div className="max-w-[1296px] mx-auto px-5 md:px-8 lg:px-[72px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
            {/* Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1
                className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-oak-dark)] leading-tight animate-fade-in-up"
                style={{ opacity: 0 }}
              >
                We Serve The{" "}
                <span className="text-[var(--color-barrel-gold)]">Taste</span>{" "}
                You Love
              </h1>

              <p
                className="mt-6 text-lg text-[var(--color-oak-medium)] max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in-up stagger-2"
                style={{ opacity: 0 }}
              >
                Experience fine dining at its best. Our chefs craft each dish
                with passion and precision, using only the finest ingredients to
                create memorable culinary experiences.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start animate-fade-in-up stagger-3"
                style={{ opacity: 0 }}
              >
                <Button size="lg" onClick={() => setIsReservationOpen(true)}>
                  Reserve a Table
                </Button>
                <Link href="/menu">
                  <Button variant="secondary" size="lg">
                    View Menu
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div
                className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-[var(--color-linen)] justify-center lg:justify-start animate-fade-in-up stagger-4"
                style={{ opacity: 0 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-barrel-light)] flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="var(--color-barrel-gold)"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-oak-dark)]">
                      4.9 Rating
                    </p>
                    <p className="text-sm text-[var(--color-oak-medium)]">
                      2000+ Reviews
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-barrel-light)] flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-barrel-gold)"
                      strokeWidth="2"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-oak-dark)]">
                      Family Friendly
                    </p>
                    <p className="text-sm text-[var(--color-oak-medium)]">
                      All ages welcome
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-barrel-light)] flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-barrel-gold)"
                      strokeWidth="2"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[var(--color-oak-dark)]">
                      Live Music
                    </p>
                    <p className="text-sm text-[var(--color-oak-medium)]">
                      Fri & Sun evenings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className="order-1 lg:order-2 relative animate-scale-in stagger-3"
              style={{ opacity: 0 }}
            >
              <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
                {/* Decorative circles */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[var(--color-barrel-light)] animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border-2 border-[var(--color-linen)]" />

                {/* Main image */}
                <div className="absolute inset-8 rounded-full overflow-hidden shadow-[var(--shadow-xl)]">
                  <Image
                    src="/images/hero-steak-dinner.webp"
                    alt="Delicious steak dinner"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                </div>

                {/* Floating food elements */}
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full overflow-hidden shadow-[var(--shadow-lg)] border-4 border-[var(--color-cream)]">
                  <Image
                    src="/images/hero-appetizer.webp"
                    alt="Appetizer"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                <div className="absolute bottom-8 -left-4 w-24 h-24 rounded-full overflow-hidden shadow-[var(--shadow-lg)] border-4 border-[var(--color-cream)]">
                  <Image
                    src="/images/dragon-roll.webp"
                    alt="Sushi"
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-20 bg-[var(--color-sand)]">
        <div className="max-w-[1296px] mx-auto px-5 md:px-8 lg:px-[72px]">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-semibold text-[var(--color-oak-dark)]">
              Popular Dishes
            </h2>
            <p className="mt-3 text-[var(--color-oak-medium)] max-w-md mx-auto">
              Discover our most loved creations, crafted with care and the
              finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {popularDishes.map((dish, index) => (
              <div
                key={dish.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 75}ms`, opacity: 0 }}
              >
                <PopularDishCard {...dish} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/menu">
              <Button variant="secondary" size="lg">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="max-w-[1296px] mx-auto px-5 md:px-8 lg:px-[72px]">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-semibold text-[var(--color-oak-dark)]">
              Upcoming Events
            </h2>
            <p className="mt-3 text-[var(--color-oak-medium)] max-w-md mx-auto">
              Join us for special evenings of great food and live entertainment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-oak-dark)]">
        <div className="max-w-[1296px] mx-auto px-5 md:px-8 lg:px-[72px] text-center">
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-semibold text-[var(--color-cream)]">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="mt-4 text-[var(--color-cream)]/70 max-w-md mx-auto">
            Book your table today and let us create a memorable dining
            experience for you and your loved ones.
          </p>
          <div className="mt-8">
            <Button size="lg" onClick={() => setIsReservationOpen(true)}>
              Reserve Your Table
            </Button>
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  );
}
