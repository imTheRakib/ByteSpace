"use client";

import Image from "next/image";
import { useId, useSyncExternalStore } from "react";
import { pillClass } from "@/components/ui/pill";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { CourseDetails } from "@/data/courseDetails";
import { ReviewsPanel } from "./ReviewsPanel";

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
  const { curriculum } = details;
  return (
    <div className="flex max-w-[723px] flex-col gap-6">
      <h2 className={heading}>Explore the Modules</h2>
      <p className={body}>{curriculum.intro}</p>

      <h2 className={heading}>Lesson List</h2>
      <ul className="flex flex-col gap-6">
        {curriculum.modules.map((module) => (
          <li key={module.title} className="flex items-center gap-[13px]">
            <span className="flex shrink-0 items-center justify-center rounded-3xl bg-lime p-4">
              <Image src="/icons/videocam-dark.svg" alt="" width={40} height={40} />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-medium leading-[1.2] text-shuttle-950">{module.title}</h3>
              <p className={body}>{module.summary}</p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className={heading}>Lesson Content</h2>
      <p className={body}>{curriculum.lessonContent}</p>

      <h2 className={heading}>Lesson Progress Tracking</h2>
      <p className={body}>{curriculum.progressIntro}</p>
      <div className="flex flex-col gap-2 rounded-2xl border border-shuttle-200 bg-white p-4 backdrop-blur-[10px]">
        <p className="text-sm font-medium leading-[1.2] text-shuttle-950">Learning Progress</p>
        <p className="text-heading-s text-shuttle-950">{curriculum.progress}%</p>
        <ProgressBar percent={curriculum.progress} trackClassName="bg-shuttle-100" className="w-full" />
      </div>
    </div>
  );
}

/* The active tab lives in the URL hash (#about, #lessons, #reviews) so each view can be linked to. */
function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function tabFromHash(hash: string): Tab {
  return tabs.find((tab) => `#${tab.toLowerCase()}` === hash) ?? "About";
}

export function CourseTabs({ details }: { details: CourseDetails }) {
  const active = useSyncExternalStore(
    subscribe,
    () => tabFromHash(window.location.hash),
    () => "About" as Tab,
  );
  const setActive = (tab: Tab) => {
    window.history.pushState(null, "", `#${tab.toLowerCase()}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };
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
