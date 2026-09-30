"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { pillClass } from "@/components/ui/pill";
import type { CourseDetails } from "@/data/courseDetails";

const tabs = ["About", "Lessons", "Reviews"] as const;
type Tab = (typeof tabs)[number];

const heading = "text-heading-xs text-shuttle-950";
const body = "text-base leading-[1.6] text-shuttle-700";

function AboutPanel({ details }: { details: CourseDetails }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className={heading}>Description</h2>
      <div className={`flex max-w-[723px] flex-col gap-[25.6px] ${body}`}>
        {details.description.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <h2 className={heading}>Sneak Peak</h2>
      <div className="grid grid-cols-2 gap-[19px] sm:grid-cols-4">
        {details.sneakPeek.map((src, i) => (
          <div key={src} className="relative aspect-[167/125] overflow-hidden rounded-2xl bg-[#d9d9d9]">
            <Image src={src} alt={`Course preview ${i + 1}`} fill sizes="167px" className="object-cover" />
          </div>
        ))}
      </div>

      <h2 className={heading}>Key Points</h2>
      <ul className="flex flex-col gap-3">
        {details.keyPoints.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <Image src="/icons/check-circle.svg" alt="" width={24} height={24} />
            <span className={body}>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LessonsPanel({ details }: { details: CourseDetails }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className={heading}>
        {details.lessonCount} Lessons ({details.totalHours} hours)
      </h2>
      <ol className="flex flex-col gap-3">
        {details.lessons.map((lesson, i) => (
          <li key={lesson.title} className="flex justify-between gap-4 border-b border-shuttle-100 pb-3">
            <span className="flex gap-2 font-medium leading-[1.2] text-shuttle-950">
              <span className="w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              {lesson.title}
            </span>
            <span className="whitespace-nowrap leading-[1.6] text-primary">{lesson.duration}</span>
          </li>
        ))}
      </ol>
      <p className={body}>{details.moreVideoCount} more videos available after enrolling.</p>
    </div>
  );
}

function ReviewsPanel({ details }: { details: CourseDetails }) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className={heading}>Reviews</h2>
      <p className="flex items-center gap-2">
        <Image src="/icons/star-rating.svg" alt="" width={24} height={24} />
        <span className="text-heading-xs text-shuttle-950">{details.rating}</span>
        <span className={body}>average from {details.reviews} reviews</span>
      </p>
    </div>
  );
}

export function CourseTabs({ details }: { details: CourseDetails }) {
  const [active, setActive] = useState<Tab>("About");
  const id = useId();

  return (
    <div className="flex flex-col gap-10">
      <div role="tablist" aria-label="Course information" className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            id={`${id}-${tab}-tab`}
            aria-selected={tab === active}
            aria-controls={`${id}-${tab}-panel`}
            onClick={() => setActive(tab)}
            className={pillClass(tab === active)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`${id}-${active}-panel`} aria-labelledby={`${id}-${active}-tab`}>
        {active === "About" && <AboutPanel details={details} />}
        {active === "Lessons" && <LessonsPanel details={details} />}
        {active === "Reviews" && <ReviewsPanel details={details} />}
      </div>
    </div>
  );
}
