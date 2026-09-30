"use client";

import Link from "next/link";
import { useState } from "react";

export function TopicFilter({ rows }: { rows: string[][] }) {
  const [active, setActive] = useState(rows[0][0]);
  const lastRow = rows.length - 1;

  return (
    <div className="flex flex-col items-center gap-[21px]" role="group" aria-label="Filter courses by topic">
      {rows.map((row, i) => (
        <div key={i} className="flex flex-wrap items-center justify-center gap-4">
          {row.map((topic) => {
            const selected = topic === active;
            return (
              <button
                key={topic}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(topic)}
                className={`whitespace-nowrap rounded-3xl px-4 py-3 text-base font-medium leading-[1.2] transition-colors ${
                  selected ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
                }`}
              >
                {topic}
              </button>
            );
          })}
          {i === lastRow && (
            <Link href="/courses" className="whitespace-nowrap text-base font-medium leading-[1.2] text-primary hover:underline">
              + More
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
