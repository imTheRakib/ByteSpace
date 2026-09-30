import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseCard } from "@/components/cards/CourseCard";
import { CoursesToolbar } from "@/components/courses/CoursesToolbar";
import { CreatorHero } from "@/components/creators/CreatorHero";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { creators, getCreator } from "@/data/creators";

type CreatorPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return creators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: CreatorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);
  return { title: creator ? `${creator.name} | ByteSpace` : "Creator not found | ByteSpace" };
}

export default async function CreatorPage({ params }: CreatorPageProps) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  return (
    <>
      <main>
        <CreatorHero creator={creator} />

        <Container className="pb-[61px] pt-[62px]">
          <CoursesToolbar />
          <div className="mt-10 grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
            {creator.courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
