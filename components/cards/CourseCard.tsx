import Image from "next/image";
import Link from "next/link";
import { AvatarStack } from "@/components/ui/AvatarStack";

export type Course = {
  slug: string;
  title: string;
  creator: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  level: string;
  learners: string[];
  learnerCount: string;
  price: string;
  rating: number;
};

type CourseCardProps = {
  course: Course;
  /** "spacious" uses the fixed 28/20px line heights of the marketing-section variant */
  variant?: "default" | "spacious";
  ratingStar?: "muted" | "lime";
  className?: string;
};

export function CourseCard({ course, variant = "default", ratingStar = "muted", className = "" }: CourseCardProps) {
  const spacious = variant === "spacious";
  const lh = spacious ? { title: "leading-7", small: "leading-5", label: "leading-5" } : { title: "leading-[1.2]", small: "leading-[1.6]", label: "leading-[1.2]" };

  return (
    <Link
      href={`/courses/${course.slug}`}
      className={`relative block h-[384px] w-full max-w-[373px] overflow-hidden rounded-3xl border border-shuttle-200 bg-white p-[15px] ${className}`}
    >
      <div className="relative h-[195.145px] overflow-hidden rounded-xl bg-thumb">
        <Image src={course.image} alt="" fill sizes="341px" className="object-cover" />
        <ul className={`absolute top-[150px] flex gap-3 ${spacious ? "left-3" : "left-[13px]"}`}>
          {[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map((meta) => (
            <li
              key={meta}
              className={`whitespace-nowrap rounded-3xl bg-[rgba(246,246,246,0.6)] px-3 py-1.5 text-xs font-medium text-graphite backdrop-blur-[4px] ${lh.label}`}
            >
              {meta}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[21px] flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="flex flex-col">
            <h3 className={`max-w-[280px] truncate font-heading text-xl font-semibold tracking-[-0.01em] text-black ${lh.title}`}>
              {course.title}
            </h3>
            <p className={`text-xs text-graphite ${lh.small}`}>
              by <span className="text-primary">{course.creator}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-3xl bg-shuttle-50 px-3 py-1.5">
              <Image src="/icons/signal-cellular.svg" alt="" width={20} height={20} />
              <span className={`whitespace-nowrap text-xs font-medium text-shuttle-700 ${lh.label}`}>{course.level}</span>
            </span>
            <AvatarStack avatars={course.learners} count={course.learnerCount} badge={spacious ? "dark" : "lime"} />
          </div>

          <p className="flex items-end">
            <span className={`font-heading text-xl font-semibold tracking-[-0.01em] text-primary ${lh.title}`}>
              {course.price}
            </span>
            <span className={`text-xs text-graphite ${lh.small}`}>/lifetime</span>
          </p>
        </div>

        <p className="flex shrink-0 items-center">
          <span className={`text-lg text-graphite ${spacious ? "font-medium leading-7" : "leading-[1.6]"}`}>
            {course.rating}&nbsp;
          </span>
          <Image
            src={ratingStar === "lime" ? "/icons/star-filled-lime.svg" : "/icons/star-outline.svg"}
            alt=""
            width={24}
            height={24}
          />
          <span className="sr-only">rating</span>
        </p>
      </div>
    </Link>
  );
}
