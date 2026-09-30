import type { Course } from "@/components/cards/CourseCard";
import { featuredCourses } from "./home";

export type Creator = {
  slug: string;
  name: string;
  avatar: string;
  headline: string;
  bio: string[];
  products: number;
  followers: number;
  courses: Course[];
};

export const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    avatar: "/images/creators/purepearl-studio.png",
    headline: "Passionate UI/UX, Web designer",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    products: 3,
    followers: 12,
    courses: featuredCourses,
  },
];

export function getCreator(slug: string) {
  return creators.find((c) => c.slug === slug);
}

/** Maps a course's creator name to its profile URL. */
export function creatorHref(name: string) {
  const creator = creators.find((c) => c.name.toLowerCase() === name.toLowerCase());
  return creator ? `/creators/${creator.slug}` : "/creators";
}
