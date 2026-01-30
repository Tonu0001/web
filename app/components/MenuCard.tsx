import Image from "next/image";
import Badge from "./Badge";
import StarRating from "./StarRating";

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  badge?: "popular" | "chefsPick";
}

export default function MenuCard({
  name,
  description,
  price,
  image,
  rating = 4.5,
  badge,
}: MenuCardProps) {
  return (
    <div className="group bg-[var(--color-warm-white)] rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-[var(--duration-normal)] hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-[var(--duration-slow)]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={badge}>
              {badge === "popular" ? "Popular" : "Chef's Pick"}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-[var(--font-display)] text-lg md:text-xl font-semibold text-[var(--color-oak-dark)]">
            {name}
          </h3>
          <span className="text-lg font-bold text-[var(--color-barrel-gold)] whitespace-nowrap">
            ${price.toFixed(2)}
          </span>
        </div>

        {rating && (
          <div className="mb-2">
            <StarRating rating={rating} size="sm" />
          </div>
        )}

        <p className="text-sm text-[var(--color-oak-medium)] line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
