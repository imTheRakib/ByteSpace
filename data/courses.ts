import { featuredCourses } from "./home";

export const courseTopics = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export const COURSES_PER_PAGE = 18;
export const COURSE_PAGE_COUNT = 5;

/** Placeholder catalogue page: the design repeats the six featured courses three times. */
export const courseCatalogPage = [...featuredCourses, ...featuredCourses, ...featuredCourses];
