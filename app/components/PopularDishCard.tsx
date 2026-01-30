"use client";

import Image from "next/image";
import Badge from "./Badge";
import StarRating from "./StarRating";
import Button from "./Button";

interface PopularDishCardProps {
  name: string;
  price: number;
  rating: number;
  image: string;
  isPopular?: boolean;
}

export default function PopularDishCard({
  name,
  price,
  rating,
  image,
  isPopular = true,
}: PopularDishCardProps) {
  return (
    <div className="group flex flex-col items-center text-center p-4 bg-[var(--color-warm-white)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-[var(--duration-normal)] hover:-translate-y-1">
      {/* Image */}
      <div className="relative w-28 h-28 md:w-32 md:h-32 mb-4">
        <div className="absolute inset-0 rounded-full overflow-hidden bg-[var(--color-sand)]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-[var(--duration-normal)]"
            sizes="(max-width: 768px) 112px, 128px"
          />
        </div>
        {isPopular && (
          <div className="absolute -top-2 -right-2">
            <Badge variant="popular">Popular</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className="font-[var(--font-display)] text-lg font-semibold text-[var(--color-oak-dark)] mb-2">
        {name}
      </h3>

      <StarRating rating={rating} size="sm" />

      <p className="text-lg font-bold text-[var(--color-oak-dark)] mt-2 mb-4">
        ${price.toFixed(2)}
      </p>

      <Button size="sm" className="w-full">
        Add to Cart
      </Button>
    </div>
  );
}
