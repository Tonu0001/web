import Image from "next/image";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

export default function EventCard({
  title,
  date,
  time,
  description,
  image,
}: EventCardProps) {
  return (
    <div className="group bg-[var(--color-warm-white)] rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-[var(--duration-normal)]">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-[var(--duration-slow)]"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-oak-dark)]/60 to-transparent" />

        {/* Date Badge */}
        <div className="absolute bottom-4 left-4 bg-[var(--color-barrel-gold)] text-[var(--color-oak-dark)] px-3 py-1.5 rounded-[var(--radius-md)] text-sm font-semibold">
          {date}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-[var(--color-oak-medium)] mb-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {time}
        </div>

        <h3 className="font-[var(--font-display)] text-xl font-semibold text-[var(--color-oak-dark)] mb-2">
          {title}
        </h3>

        <p className="text-sm text-[var(--color-oak-medium)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
