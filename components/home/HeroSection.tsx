import Image from "next/image";
import { HappyStudentsCard, LearningProgressCard, TopicStatCard } from "@/components/cards/FloatingCards";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { DesignCanvas } from "@/components/ui/Container";
import { Ornament, type OrnamentProps } from "@/components/ui/Ornament";
import { SearchInput } from "@/components/ui/SearchInput";
import { happyStudentAvatars } from "@/data/home";

const ornaments: OrnamentProps[] = [
  { shape: "spring-a", x: 1127, y: 672, size: 330, tint: "white" },
  { shape: "spring-b", x: -118, y: 221, size: 385, tint: "lime" },
  { shape: "spring-b", x: 183, y: 477, size: 175, tint: "white", flip: true },
  { shape: "torus", x: 18, y: 682, size: 342, tint: "white" },
  { shape: "cylinder", x: 1231, y: 221, size: 370, tint: "lime" },
  { shape: "cone", x: 1106, y: 464, size: 188, tint: "white" },
];

export function HeroSection() {
  return (
    <section className="relative h-[1024px] overflow-hidden bg-primary">
      <DesignCanvas>
        <Image
          src="/images/decor/grid.svg"
          alt=""
          width={1442}
          height={1026}
          className="absolute left-0 top-[-2px] max-w-none"
        />
        <Image
          src="/images/decor/hero-circle.svg"
          alt=""
          width={1149}
          height={1149}
          className="absolute left-[145px] top-[582px] max-w-none"
        />
      </DesignCanvas>

      <Header tone="light" className="absolute inset-x-0 top-0" />

      <div className="relative mx-auto flex max-w-[1232px] flex-col items-center gap-[60px] px-4 pt-[169px]">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="max-w-[935px] font-heading text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-white md:text-heading-l">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="text-lg leading-[1.6] text-shuttle-100">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>

        <form action="/courses" role="search" className="flex w-full max-w-[581px] flex-wrap items-start justify-center gap-4">
          <SearchInput placeholder="Course, topic, creator" className="flex-1 basis-[280px] md:max-w-[461px]" />
          <Button type="submit">Search</Button>
        </form>
      </div>

      <DesignCanvas>
        <Image
          src="/images/home/hero-student.png"
          alt="Smiling student with headphones holding a laptop"
          width={578}
          height={541}
          preload
          className="drop-shadow-float absolute left-[431px] top-[512px] h-[541px] w-[578px] max-w-none object-cover"
        />
        <div className="pointer-events-auto absolute left-[842px] top-[651px] hidden lg:block">
          <LearningProgressCard percent={55} />
        </div>
        <div className="pointer-events-auto absolute left-[328px] top-[837px] hidden lg:block">
          <HappyStudentsCard rating={4.5} reviews={240} avatars={happyStudentAvatars} count="2K+" />
        </div>
        {ornaments.map((o, i) => (
          <Ornament key={i} {...o} />
        ))}
        <div className="pointer-events-auto absolute left-[404px] top-[639px] hidden lg:block">
          <TopicStatCard topic="UI/UX Design" courses="200 Courses" students="1000+ Students" />
        </div>
      </DesignCanvas>
    </section>
  );
}
