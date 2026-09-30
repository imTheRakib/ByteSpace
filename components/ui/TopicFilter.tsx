"use client";

import Link from "next/link";
import { useState } from "react";
import { pillClass } from "./pill";

type TopicFilterProps = {
  rows: string[][];
  /** Appends a "+ More" link to the last row */
  moreHref?: string;
  /** "centered": wrapped, centred rows. "spread": one row stretched across the container. */
  layout?: "centered" | "spread";
};

export function TopicFilter({ rows, moreHref, layout = "centered" }: TopicFilterProps) {
  const [active, setActive] = useState(rows[0][0]);
  const lastRow = rows.length - 1;
  const rowClass =
    layout === "spread"
      ? "flex flex-wrap items-center justify-center gap-4 xl:flex-nowrap xl:justify-between xl:gap-0"
      : "flex flex-wrap items-center justify-center gap-4";

  return (
    <div className="flex flex-col items-center gap-[21px]" role="group" aria-label="Filter courses by topic">
      {rows.map((row, i) => (
        <div key={i} className={`${rowClass} ${layout === "spread" ? "w-full" : ""}`}>
          {row.map((topic) => {
            const selected = topic === active;
            return (
              <button
                key={topic}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(topic)}
                className={pillClass(selected)}
              >
                {topic}
              </button>
            );
          })}
          {moreHref && i === lastRow && (
            <Link href={moreHref} className="whitespace-nowrap text-base font-medium leading-[1.2] text-primary hover:underline">
              + More
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
