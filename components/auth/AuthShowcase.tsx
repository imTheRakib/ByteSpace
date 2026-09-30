import { CourseCard } from "@/components/cards/CourseCard";
import { HappyStudentsCard } from "@/components/cards/FloatingCards";
import { Ornament } from "@/components/ui/Ornament";
import { featuredCourses, happyStudentAvatars } from "@/data/home";

/** Decorative course-card collage on the left of the auth pages (1440px canvas coordinates). */
export function AuthShowcase() {
  return (
    <>
      <div className="pointer-events-auto absolute left-[122px] top-[394px] w-[373px]">
        <CourseCard course={featuredCourses[1]} variant="spacious" ratingStar="lime" />
      </div>
      <div className="pointer-events-auto absolute left-[233px] top-[305px] w-[373px]">
        <CourseCard course={featuredCourses[2]} variant="spacious" ratingStar="lime" />
      </div>
      <div className="absolute left-[348px] top-[740px]">
        <HappyStudentsCard
          rating={4.5}
          reviews={240}
          avatars={happyStudentAvatars}
          count="2K+"
          density="spacious"
          tone="lime"
        />
      </div>
      <Ornament shape="spring-b" x={470} y={626} size={175} tint="white" flip />
      <Ornament shape="torus" x={151} y={320} size={146} tint="lime" />
      <Ornament shape="cone" x={97} y={702} size={188} tint="lime" />
    </>
  );
}
