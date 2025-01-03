import { StarRating } from "./StarRating";
import type { Testimonial } from "./types";

export const TestimonialCard = ({
  quote,
  avatar,
  name,
  position,
  companyName,
  numberOfStars,
}: Testimonial) => {
  return (
    <div className="mb-8 inline-block w-full rounded-2xl bg-card text-card-foreground border border-border p-8 backdrop-blur-sm">
      <div className="mb-6">
        <StarRating rating={numberOfStars} />
      </div>
      <blockquote className="text-lg text-gray-400 md:text-xl">
        {quote}
      </blockquote>
      <div className="mt-6 flex w-full flex-col items-start gap-4 md:w-fit md:flex-row md:items-center">
        <img
          src={avatar.src}
          alt={avatar.alt}
          className="size-12 min-h-12 min-w-12 rounded-full object-cover ring-2 ring-border"
        />
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-muted-foreground">
            <span>{position}</span>, <span>{companyName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
