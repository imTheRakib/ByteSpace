import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseHero } from "@/components/course-details/CourseHero";
import { CourseSidebar } from "@/components/course-details/CourseSidebar";
import { CourseTabs } from "@/components/course-details/CourseTabs";
import { Footer } from "@/components/layout/Footer";
import { courseSlugs, getCourseWithDetails } from "@/data/courseDetails";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return courseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getCourseWithDetails(slug);
  return { title: data ? `${data.details.title} | ByteSpace` : "Course not found | ByteSpace" };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const data = getCourseWithDetails(slug);
  if (!data) notFound();
  const { course, details } = data;

  return (
    <>
      <main>
        <CourseHero details={details} creator={course.creator} />

        <div className="mx-auto flex w-full max-w-[1232px] flex-col px-4 pb-16 lg:grid lg:grid-cols-[725px_412px] lg:items-start lg:justify-between">
          <div className="pt-10 lg:pt-[62.5px]">
            <CourseTabs details={details} />
          </div>
          <div className="relative order-first mt-10 lg:order-none lg:-mt-[541px]">
            <CourseSidebar course={course} details={details} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
