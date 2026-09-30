import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/components/cards/CourseCard";
import { Button } from "@/components/ui/Button";
import type { CourseDetails } from "@/data/courseDetails";
import { creatorHref } from "@/data/creators";

type CourseSidebarProps = {
  course: Course;
  details: CourseDetails;
};

const body = "text-base leading-[1.6] text-shuttle-700";

export function CourseSidebar({ course, details }: CourseSidebarProps) {
  return (
    <aside className="flex w-full flex-col gap-6 overflow-hidden rounded-3xl border border-shuttle-200 bg-white p-6 sm:p-10">
      <div className="flex flex-col gap-6">
        <h2 className="text-heading-xs text-shuttle-950">
          {details.lessonCount} Lessons ({details.totalHours} hours)
        </h2>
        <ol className="flex flex-col gap-3 text-base">
          {details.lessons.map((lesson, i) => (
            <li key={lesson.title} className="flex items-start justify-between gap-4">
              <span className="flex gap-2 font-medium leading-[1.2] text-shuttle-950">
                <span className="w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="max-w-[198px]">{lesson.title}</span>
              </span>
              <span className="whitespace-nowrap leading-[1.6] text-primary">{lesson.duration}</span>
            </li>
          ))}
          <li className={body}>{details.moreVideoCount} more videos</li>
        </ol>
      </div>

      <div className="flex flex-col gap-6">
        <p className={body}>{details.ctaText}</p>
        <p className="flex items-end">
          <span className="text-heading-s text-primary">{course.price}</span>
          <span className={body}>/lifetime</span>
        </p>
        <Button type="button" className="w-full">
          Enroll Now
        </Button>
      </div>

      <h2 className="text-heading-xs text-shuttle-950">This course include</h2>
      <ul className="flex flex-col gap-3">
        {details.includes.map((item) => (
          <li key={item.label} className="flex items-start gap-2">
            <Image src={item.icon} alt="" width={24} height={24} />
            <span className={body}>{item.label}</span>
          </li>
        ))}
      </ul>

      <hr className="border-black-200" />

      <div className="flex flex-col items-start gap-6">
        <div className="flex items-start gap-3">
          <Image
            src={details.creator.avatar}
            alt={details.creator.name}
            width={52}
            height={52}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <p className="text-lg font-medium leading-[1.2] text-shuttle-950">{details.creator.name}</p>
            <p className={body}>{details.creator.role}</p>
          </div>
        </div>
        <p className={body}>{details.creator.bio}</p>
        <Link
          href={creatorHref(details.creator.name)}
          className="rounded-3xl border border-shuttle-200 px-4 py-2 text-base font-medium leading-[1.2] text-shuttle-700 transition-colors hover:border-primary"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
