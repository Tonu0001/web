import Image from "next/image";

const features = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Family-Friendly",
    description: "Welcoming atmosphere for guests of all ages",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="17" r="0.5" fill="currentColor" />
      </svg>
    ),
    title: "Live Music",
    description: "Jazz and acoustic performances every weekend",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M8 2h8l-1 9H9L8 2z" />
        <path d="M12 11v11" />
        <path d="M8 22h8" />
        <path d="M5 2h14" />
      </svg>
    ),
    title: "Craft Beers",
    description: "House-brewed selection and curated imports",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 12l7-7" />
        <path d="M17 2v5h5" />
      </svg>
    ),
    title: "Premium Steaks",
    description: "USDA Prime cuts aged to perfection",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <ellipse cx="12" cy="12" rx="10" ry="6" />
        <ellipse cx="12" cy="12" rx="6" ry="3" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Fresh Sushi",
    description: "Daily-sourced fish from sustainable suppliers",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Award-Winning",
    description: "Recognized for culinary excellence",
  },
];

const teamMembers = [
  {
    name: "Leon van Zyl",
    role: "Founder & Executive Chef",
    image: "/images/chef-leon.webp",
  },
  {
    name: "Maria Santos",
    role: "Sous Chef",
    image: "/images/chef-maria.webp",
  },
  {
    name: "Kenji Tanaka",
    role: "Sushi Master",
    image: "/images/chef-kenji.webp",
  },
  {
    name: "James Morrison",
    role: "Grill Master",
    image: "/images/chef-james.webp",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-[var(--color-cream)]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/restaurant-interior.webp"
            alt="Restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--color-oak-dark)]/70" />
        </div>

        <div className="relative max-w-[1296px] mx-auto px-5 md:px-8 lg:px-[72px] text-center">
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-cream)]">
            Our Story
          </h1>
          <p className="mt-6 text-lg text-[var(--color-cream)]/80 max-w-2xl mx-auto">
            Two decades of passion, craftsmanship, and unforgettable dining
            experiences
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="max-w-[1296px] mx-auto px-5 md:px-8 lg:px-[72px]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-[var(--radius-2xl)] overflow-hidden shadow-[var(--shadow-xl)]">
                <Image
                  src="/images/chef-leon.webp"
                  alt="Leon van Zyl, Founder of Oak & Barrel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-barrel-gold)] rounded-[var(--radius-xl)] -z-10" />
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-[var(--color-barrel-gold)] font-medium mb-4">
                Est. 2004
              </span>
              <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-semibold text-[var(--color-oak-dark)] mb-6">
                A Journey of Passion & Flavor
              </h2>

              <div className="space-y-4 text-[var(--color-oak-medium)] leading-relaxed">
                <p>
                  What started as a small bistro on a quiet New York street has
                  grown into one of the city&apos;s most beloved dining
                  destinations. Founded by Chef Leon van Zyl in 2004, Oak &
                  Barrel was born from a simple belief: that exceptional food
                  should bring people together.
                </p>
                <p>
                  Drawing inspiration from his South African roots and years of
                  training in Europe&apos;s finest kitchens, Leon created a
                  menu that defies categorization. From perfectly marbled steaks
                  to delicate sushi crafted by our dedicated team, every dish
                  tells a story of quality and care.
                </p>
                <p>
                  Today, we remain committed to the same values that guided us
                  from day one: sourcing the finest ingredients, treating every
                  guest like family, and creating moments that become memories.
                  Whether you&apos;re celebrating a special occasion or simply
                  enjoying a weeknight dinner, we invite you to experience the
                  warmth of Oak & Barrel.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-16 h-px bg-[var(--color-barrel-gold)]" />
                <p className="font-[var(--font-display)] text-lg italic text-[var(--color-oak-dark)]">
                  &quot;Great food is about love, patience, and the perfect
                  ingredients.&quot;
                </p>
              </div>
              <p className="mt-2 text-sm text-[var(--color-oak-muted)] pl-20">
                — Leon van Zyl, Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-[var(--color-sand)]">
        <div className="max-w-[1296px] mx-auto px-5 md:px-8 lg:px-[72px]">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-semibold text-[var(--color-oak-dark)]">
              What Makes Us Special
            </h2>
            <p className="mt-4 text-[var(--color-oak-medium)] max-w-xl mx-auto">
              We&apos;ve built our reputation on quality, hospitality, and
              attention to every detail
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 bg-[var(--color-warm-white)] rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-barrel-light)] rounded-full flex items-center justify-center text-[var(--color-barrel-gold)]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-oak-dark)] mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[var(--color-oak-medium)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="max-w-[1296px] mx-auto px-5 md:px-8 lg:px-[72px]">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-3xl md:text-4xl font-semibold text-[var(--color-oak-dark)]">
              Meet Our Team
            </h2>
            <p className="mt-4 text-[var(--color-oak-medium)] max-w-xl mx-auto">
              The talented individuals who bring passion and expertise to every
              dish
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-[var(--shadow-md)] group-hover:shadow-[var(--shadow-lg)] transition-shadow">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-[var(--duration-slow)]"
                      sizes="160px"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[var(--color-barrel-gold)] transition-colors duration-[var(--duration-normal)]" />
                </div>
                <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-oak-dark)]">
                  {member.name}
                </h3>
                <p className="text-sm text-[var(--color-oak-medium)]">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-16 md:py-24 bg-[var(--color-oak-dark)]">
        <div className="max-w-[1296px] mx-auto px-5 md:px-8 lg:px-[72px]">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Hours */}
            <div className="text-center md:text-left">
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-cream)] mb-6">
                Hours of Operation
              </h3>
              <div className="space-y-3 text-[var(--color-cream)]/80">
                <div className="flex justify-between md:justify-start md:gap-12">
                  <span>Monday - Thursday</span>
                  <span className="text-[var(--color-barrel-honey)]">
                    5:00 PM - 10:00 PM
                  </span>
                </div>
                <div className="flex justify-between md:justify-start md:gap-12">
                  <span>Friday - Saturday</span>
                  <span className="text-[var(--color-barrel-honey)]">
                    5:00 PM - 11:00 PM
                  </span>
                </div>
                <div className="flex justify-between md:justify-start md:gap-12">
                  <span>Sunday Brunch</span>
                  <span className="text-[var(--color-barrel-honey)]">
                    11:00 AM - 3:00 PM
                  </span>
                </div>
                <div className="flex justify-between md:justify-start md:gap-12">
                  <span>Sunday Dinner</span>
                  <span className="text-[var(--color-barrel-honey)]">
                    5:00 PM - 9:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="text-center md:text-left">
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-[var(--color-cream)] mb-6">
                Find Us
              </h3>
              <div className="space-y-4 text-[var(--color-cream)]/80">
                <p>
                  123 Oak Street
                  <br />
                  Downtown District
                  <br />
                  New York, NY 10001
                </p>
                <p>
                  <a
                    href="tel:+15551234567"
                    className="text-[var(--color-barrel-honey)] hover:text-[var(--color-barrel-gold)] transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:hello@oakbarrel.com"
                    className="text-[var(--color-barrel-honey)] hover:text-[var(--color-barrel-gold)] transition-colors"
                  >
                    hello@oakbarrel.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
