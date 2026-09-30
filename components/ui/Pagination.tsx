import Image from "next/image";
import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  /** Builds the URL for a given page number */
  hrefFor: (page: number) => string;
};

const arrowButton =
  "flex items-center justify-center rounded-3xl border border-shuttle-200 bg-white px-4 py-3 transition-colors";

export function Pagination({ currentPage, totalPages, hrefFor }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const arrow = (direction: "back" | "forward", enabled: boolean, page: number) => {
    const icon = <Image src={`/icons/arrow-${direction}.svg`} alt="" width={24} height={24} />;
    const label = direction === "back" ? "Previous page" : "Next page";
    return enabled ? (
      <Link href={hrefFor(page)} aria-label={label} className={`${arrowButton} hover:border-primary`}>
        {icon}
      </Link>
    ) : (
      <span aria-label={label} aria-disabled className={arrowButton}>
        {icon}
      </span>
    );
  };

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-6">
      {arrow("back", hasPrev, currentPage - 1)}
      {pages.map((page) => {
        const current = page === currentPage;
        return (
          <Link
            key={page}
            href={hrefFor(page)}
            aria-current={current ? "page" : undefined}
            className={`font-heading text-xl font-semibold leading-7 tracking-[-0.01em] ${
              current ? "pointer-events-none text-shuttle-200" : "text-shuttle-950 hover:text-primary"
            }`}
          >
            {page}
          </Link>
        );
      })}
      {arrow("forward", hasNext, currentPage + 1)}
    </nav>
  );
}
