"use client";

import { useState } from "react";
import MenuCard from "../components/MenuCard";

const menuCategories = [
  {
    id: "appetizers",
    name: "Appetizers",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    items: [
      {
        name: "Truffle Burrata",
        description:
          "Creamy burrata, black truffle shavings, arugula, aged balsamic, grilled sourdough",
        price: 18,
        image: "/images/truffle-burrata.webp",
        rating: 5,
        badge: "popular" as const,
      },
      {
        name: "Wagyu Beef Tartare",
        description:
          "Hand-cut wagyu, quail egg, capers, cornichons, truffle aioli, crostini",
        price: 24,
        image: "/images/wagyu-tartare.webp",
        rating: 4.5,
        badge: "chefsPick" as const,
      },
      {
        name: "Crispy Calamari",
        description:
          "Lightly fried calamari, cherry peppers, lemon aioli, marinara sauce",
        price: 16,
        image: "/images/crispy-calamari.webp",
        rating: 4.5,
      },
      {
        name: "French Onion Soup",
        description:
          "Slow-cooked caramelized onions, rich beef broth, gruyère crouton",
        price: 14,
        image: "/images/french-onion-soup.webp",
        rating: 4.5,
      },
    ],
  },
  {
    id: "sushi",
    name: "Sushi & Sashimi",
    icon: (
      <svg
        width="20"
        height="20"
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
    items: [
      {
        name: "Dragon Roll",
        description:
          "Shrimp tempura, cucumber, avocado, unagi, spicy mayo, eel sauce",
        price: 24,
        image: "/images/dragon-roll.webp",
        rating: 5,
        badge: "popular" as const,
      },
      {
        name: "Salmon Sashimi",
        description:
          "Premium Norwegian salmon, 8 pieces, served with wasabi and pickled ginger",
        price: 22,
        image: "/images/salmon-sashimi.webp",
        rating: 5,
      },
      {
        name: "Spicy Tuna Roll",
        description:
          "Fresh tuna, spicy mayo, cucumber, sesame seeds, green onion",
        price: 18,
        image: "/images/spicy-tuna-roll.webp",
        rating: 4.5,
      },
      {
        name: "Rainbow Roll",
        description:
          "California roll topped with tuna, salmon, yellowtail, shrimp, avocado",
        price: 26,
        image: "/images/rainbow-roll.webp",
        rating: 4.5,
        badge: "chefsPick" as const,
      },
      {
        name: "Omakase Platter",
        description:
          "Chef's selection of 12 premium nigiri pieces, seasonal fish",
        price: 65,
        image: "/images/omakase-platter.webp",
        rating: 5,
      },
    ],
  },
  {
    id: "steaks",
    name: "Prime Steaks",
    icon: (
      <svg
        width="20"
        height="20"
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
    items: [
      {
        name: "Filet Mignon",
        description:
          "8oz center-cut tenderloin, herb butter, roasted garlic mashed potatoes",
        price: 52,
        image: "/images/filet-mignon.webp",
        rating: 5,
        badge: "popular" as const,
      },
      {
        name: "Bone-In Ribeye",
        description:
          "18oz prime ribeye, bone-in, truffle fries, béarnaise sauce",
        price: 62,
        image: "/images/bone-in-ribeye.webp",
        rating: 5,
        badge: "chefsPick" as const,
      },
      {
        name: "NY Strip",
        description:
          "14oz prime New York strip, peppercorn crust, red wine reduction",
        price: 48,
        image: "/images/ny-strip.webp",
        rating: 4.5,
      },
      {
        name: "Tomahawk",
        description:
          "32oz bone-in ribeye, serves 2, roasted vegetables, chimichurri",
        price: 125,
        image: "/images/tomahawk.webp",
        rating: 5,
      },
    ],
  },
  {
    id: "burgers",
    name: "Burgers & Grills",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="6" width="20" height="3" rx="1" />
        <rect x="2" y="15" width="20" height="3" rx="1" />
        <path d="M4 9v6M20 9v6" />
        <path d="M7 9c0 3 2 6 5 6s5-3 5-6" />
      </svg>
    ),
    items: [
      {
        name: "The Classic Oak",
        description:
          "8oz angus patty, aged cheddar, lettuce, tomato, oak sauce, brioche bun",
        price: 22,
        image: "/images/classic-oak-burger.webp",
        rating: 5,
        badge: "popular" as const,
      },
      {
        name: "Wagyu Smash Burger",
        description:
          "Double wagyu smash patties, american cheese, caramelized onions, special sauce",
        price: 28,
        image: "/images/wagyu-smash-burger.webp",
        rating: 5,
        badge: "chefsPick" as const,
      },
      {
        name: "Truffle Mushroom Burger",
        description:
          "Angus beef, sautéed mushrooms, truffle aioli, swiss cheese, arugula",
        price: 26,
        image: "/images/truffle-mushroom-burger.webp",
        rating: 4.5,
      },
      {
        name: "Bacon BBQ Burger",
        description:
          "Angus beef, applewood bacon, BBQ sauce, cheddar, crispy onion rings",
        price: 24,
        image: "/images/bacon-bbq-burger.webp",
        rating: 4.5,
      },
    ],
  },
  {
    id: "beverages",
    name: "Craft Beverages",
    icon: (
      <svg
        width="20"
        height="20"
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
    items: [
      {
        name: "Oak Barrel IPA",
        description:
          "House-brewed India Pale Ale, citrus notes, hoppy finish, 6.5% ABV",
        price: 9,
        image: "/images/oak-barrel-ipa.webp",
        rating: 4.5,
        badge: "popular" as const,
      },
      {
        name: "Belgian Wheat",
        description:
          "Light and refreshing wheat beer, orange peel, coriander, 5.2% ABV",
        price: 8,
        image: "/images/belgian-wheat.webp",
        rating: 4.5,
      },
      {
        name: "Barrel-Aged Stout",
        description:
          "Rich chocolate and coffee notes, aged in bourbon barrels, 8.5% ABV",
        price: 12,
        image: "/images/barrel-aged-stout.webp",
        rating: 5,
        badge: "chefsPick" as const,
      },
      {
        name: "House Red Wine",
        description:
          "California Cabernet Sauvignon, blackberry, oak, smooth tannins",
        price: 14,
        image: "/images/house-red-wine.webp",
        rating: 4.5,
      },
      {
        name: "Craft Cocktail Flight",
        description:
          "Four signature cocktails: Old Fashioned, Barrel Manhattan, Whiskey Sour, Negroni",
        price: 32,
        image: "/images/cocktail-flight.webp",
        rating: 5,
      },
    ],
  },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const currentCategory = menuCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <div className="min-h-screen pt-20 bg-[var(--color-cream)]">
      {/* Hero */}
      <section className="py-12 md:py-16 bg-[var(--color-sand)]">
        <div className="max-w-[1296px] mx-auto px-5 md:px-8 lg:px-[72px] text-center">
          <h1 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold text-[var(--color-oak-dark)]">
            Our Menu
          </h1>
          <p className="mt-4 text-lg text-[var(--color-oak-medium)] max-w-xl mx-auto">
            Explore our carefully curated selection of dishes, crafted with the
            finest ingredients and culinary expertise
          </p>
        </div>
      </section>

      {/* Menu Book Layout */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1296px] mx-auto px-5 md:px-8 lg:px-[72px]">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category Tabs - Book Page Markers */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="bg-[var(--color-warm-white)] rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] overflow-hidden">
                  {/* Book spine decoration */}
                  <div className="h-2 bg-gradient-to-r from-[var(--color-barrel-gold)] via-[var(--color-barrel-amber)] to-[var(--color-barrel-gold)]" />

                  <nav className="p-2">
                    {menuCategories.map((category, index) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] text-left transition-all duration-[var(--duration-fast)] group relative ${
                          activeCategory === category.id
                            ? "bg-[var(--color-barrel-gold)] text-[var(--color-oak-dark)]"
                            : "text-[var(--color-oak-medium)] hover:bg-[var(--color-sand)] hover:text-[var(--color-oak-dark)]"
                        }`}
                      >
                        {/* Page marker effect */}
                        {activeCategory === category.id && (
                          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[var(--color-barrel-amber)] rounded-l" />
                        )}

                        <span
                          className={`flex-shrink-0 ${activeCategory === category.id ? "text-[var(--color-oak-dark)]" : "text-[var(--color-oak-muted)] group-hover:text-[var(--color-barrel-gold)]"}`}
                        >
                          {category.icon}
                        </span>
                        <span className="font-medium">{category.name}</span>
                        <span
                          className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                            activeCategory === category.id
                              ? "bg-[var(--color-oak-dark)]/10"
                              : "bg-[var(--color-sand)]"
                          }`}
                        >
                          {category.items.length}
                        </span>
                      </button>
                    ))}
                  </nav>

                  {/* Book spine decoration */}
                  <div className="h-2 bg-gradient-to-r from-[var(--color-barrel-gold)] via-[var(--color-barrel-amber)] to-[var(--color-barrel-gold)]" />
                </div>
              </div>
            </div>

            {/* Menu Content - Book Pages */}
            <div className="flex-1">
              <div className="bg-[var(--color-warm-white)] rounded-[var(--radius-xl)] shadow-[var(--shadow-lg)] overflow-hidden">
                {/* Decorative border */}
                <div className="border-4 border-double border-[var(--color-linen)] m-4 md:m-6 rounded-[var(--radius-lg)]">
                  {/* Page Header */}
                  <div className="px-6 py-6 md:px-8 md:py-8 border-b border-[var(--color-linen)]">
                    <div className="flex items-center gap-3">
                      <span className="text-[var(--color-barrel-gold)]">
                        {currentCategory?.icon}
                      </span>
                      <h2 className="font-[var(--font-display)] text-2xl md:text-3xl font-semibold text-[var(--color-oak-dark)]">
                        {currentCategory?.name}
                      </h2>
                    </div>
                    {/* Decorative line */}
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--color-linen)] to-transparent" />
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="text-[var(--color-barrel-gold)]"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"
                        />
                      </svg>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--color-linen)] to-transparent" />
                    </div>
                  </div>

                  {/* Menu Items Grid */}
                  <div className="p-4 md:p-6">
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      {currentCategory?.items.map((item, index) => (
                        <div
                          key={item.name}
                          className="animate-fade-in-up"
                          style={{
                            animationDelay: `${index * 50}ms`,
                            opacity: 0,
                          }}
                        >
                          <MenuCard {...item} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Page Footer */}
                  <div className="px-6 py-4 md:px-8 border-t border-[var(--color-linen)] text-center">
                    <p className="text-sm text-[var(--color-oak-muted)] italic">
                      All prices are in USD. Please inform your server of any
                      allergies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
