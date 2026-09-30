"use client";

import Image from "next/image";
import { useState } from "react";
import { pillClass } from "@/components/ui/pill";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { StarRating } from "@/components/ui/StarRating";
import type { CourseDetails } from "@/data/courseDetails";

const heading = "text-heading-xs text-shuttle-950";
const body = "text-base leading-[1.6] text-shuttle-700";

export function ReviewsPanel({ details }: { details: CourseDetails }) {
  const { reviewsSection: section } = details;
  const [filter, setFilter] = useState<number | "all">("all");
  const visible = filter === "all" ? section.reviews : section.reviews.filter((r) => r.rating === filter);

  return (
    <div className="flex max-w-[723px] flex-col gap-6">
      <h2 className={heading}>What Learners Are Saying</h2>
      <p className={body}>{section.intro}</p>

      <div className="flex flex-col items-center gap-6 rounded-2xl border border-shuttle-200 bg-white p-6 backdrop-blur-[10px] sm:flex-row sm:p-10">
        <div className="flex shrink-0 flex-col items-center rounded-lg bg-lime p-10 text-shuttle-950">
          <p className="text-sm font-medium leading-[1.2]">Ratings</p>
          <p className="text-heading-s">{section.average}</p>
        </div>
        <dl className="flex w-full flex-1 flex-col gap-1">
          {section.breakdown.map((row) => (
            <div key={row.stars} className="flex items-center gap-4">
              <dt className="sr-only">{row.stars} stars</dt>
              <ProgressBar percent={row.percent} trackClassName="bg-shuttle-100" className="min-w-0 flex-1" />
              <StarRating rating={row.stars} className="max-sm:hidden" />
              <dd className={`w-10 text-right ${body}`}>{row.count}</dd>
            </div>
          ))}
        </dl>
      </div>

      <h2 className={heading}>Individual Reviews:</h2>
      <div role="group" aria-label="Filter reviews by rating" className="flex flex-wrap gap-4">
        <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")} className={pillClass(filter === "all")}>
          All rating
        </button>
        {[5, 4, 3, 2, 1].map((stars) => (
          <button
            key={stars}
            type="button"
            aria-pressed={filter === stars}
            aria-label={`${stars} star reviews`}
            onClick={() => setFilter(stars)}
            className={`flex items-center gap-1 ${pillClass(filter === stars)}`}
          >
            <Image src="/icons/star-filled.svg" alt="" width={24} height={24} />
            {stars}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className={body}>No {filter}-star reviews yet.</p>
      ) : (
        <ul className="flex flex-col gap-6">
          {visible.map((review) => (
            <li key={review.name} className="flex flex-col gap-6 rounded-3xl border border-shuttle-200 p-6 sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-3">
                    <Image src={review.avatar} alt="" width={52} height={52} className="rounded-full" />
                    <div className="flex flex-col">
                      <p className="text-lg font-medium leading-[1.2] text-shuttle-950">{review.name}</p>
                      <p className={body}>{review.role}</p>
                    </div>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className={`whitespace-nowrap ${body}`}>{review.date}</p>
              </div>
              <p className={body}>{review.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
