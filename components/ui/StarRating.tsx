import Image from "next/image";

/** Row of five 24px stars; stars beyond `rating` are dimmed. */
export function StarRating({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <span role="img" aria-label={`${rating} out of 5 stars`} className={`flex shrink-0 gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Image
          key={star}
          src="/icons/star-filled.svg"
          alt=""
          width={24}
          height={24}
          className={star <= rating ? undefined : "opacity-25"}
        />
      ))}
    </span>
  );
}
