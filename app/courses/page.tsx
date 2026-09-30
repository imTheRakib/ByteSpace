import type { Metadata } from "next";
import { CourseCard } from "@/components/cards/CourseCard";
import { CoursesBanner } from "@/components/courses/CoursesBanner";
import { CoursesToolbar } from "@/components/courses/CoursesToolbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Pagination } from "@/components/ui/Pagination";
import { TopicFilter } from "@/components/ui/TopicFilter";
import { COURSE_PAGE_COUNT, courseCatalogPage, courseTopics } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses | ByteSpace",
};

type CoursesPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function CoursesPage({ searchParams }: CoursesPageProps) {
  const { page } = await searchParams;
  const requested = Number(page);
  const currentPage = Number.isInteger(requested) && requested >= 1 && requested <= COURSE_PAGE_COUNT ? requested : 1;

  return (
    <>
      <main>
        <CoursesBanner />

        <Container className="pb-[72px] pt-[72px]">
          <CoursesToolbar />

          <div className="mt-8">
            <TopicFilter rows={[courseTopics]} layout="spread" />
          </div>

          <div className="mt-[77px] grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
            {courseCatalogPage.map((course, i) => (
              <CourseCard key={`${course.slug}-${i}`} course={course} />
            ))}
          </div>

          <div className="mt-[72px]">
            <Pagination
              currentPage={currentPage}
              totalPages={COURSE_PAGE_COUNT}
              hrefFor={(p) => (p === 1 ? "/courses" : `/courses?page=${p}`)}
            />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
