import { CategoryCard } from "@/components/cards/CategoryCard";
import { CourseCard } from "@/components/cards/CourseCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories, featuredCourses, topicRows } from "@/data/home";
import { TopicFilter } from "@/components/ui/TopicFilter";

export function CoursesSection() {
  return (
    <section className="pb-[120px] pt-[72px]">
      <Container>
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="mt-[42px]">
          <TopicFilter rows={topicRows} moreHref="/courses" />
        </div>

        <div className="mt-[77px] grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

        <SectionHeading
          size="s"
          className="mt-[72px]"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <div className="mt-[68px] flex flex-wrap justify-center gap-10 xl:-mx-px xl:flex-nowrap xl:justify-between">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
