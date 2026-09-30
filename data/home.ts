import type { Category } from "@/components/cards/CategoryCard";
import type { Course } from "@/components/cards/CourseCard";
import type { Testimonial } from "@/components/cards/TestimonialCard";

export const happyStudentAvatars = Array.from({ length: 7 }, (_, i) => `/images/avatars/student-${i + 1}.png`);

const learners = Array.from({ length: 4 }, (_, i) => `/images/avatars/learner-${i + 1}.png`);

const courseDefaults = {
  creator: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  learners,
  learnerCount: "26+",
  price: "$25",
  rating: 4.5,
};

export const featuredCourses: Course[] = [
  { slug: "learn-figma-from-basic", title: "Learn Figma from Basic", image: "/images/courses/course-1.png" },
  { slug: "build-digital-asset", title: "Build Digital Asset", image: "/images/courses/course-2.png" },
  { slug: "the-power-of-big-data", title: "the Power of Big Data", image: "/images/courses/course-3.png" },
  {
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    image: "/images/courses/course-4.png",
  },
  { slug: "mastering-money-management", title: "Mastering Money Management", image: "/images/courses/course-5.png" },
  { slug: "from-idea-to-startup-success", title: "From Idea to Startup Success", image: "/images/courses/course-6.png" },
].map((course) => ({ ...courseDefaults, ...course }));

/** Topic filter pills, grouped into the three centred rows of the design */
export const topicRows: string[][] = [
  ["Featured", "Music", "Drawing & Painting", "Marketing", "Animation", "Social Media", "UI/UX Design", "Creative Marketing"],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export const categories: Category[] = [
  { name: "Design", icon: "/icons/category-design.svg", href: "/categories/design" },
  { name: "Development", icon: "/icons/category-development.svg", href: "/categories/development" },
  { name: "IT & Software", icon: "/icons/category-it.svg", href: "/categories/it-software" },
  { name: "Business", icon: "/icons/category-business.svg", href: "/categories/business" },
  { name: "Marketing", icon: "/icons/category-marketing.svg", href: "/categories/marketing" },
  { name: "Photography", icon: "/icons/category-photography.svg", href: "/categories/photography" },
];

export const partnerLogos = [
  { src: "/images/partners/partner-1.svg", width: 167, height: 41 },
  { src: "/images/partners/partner-2.svg", width: 168, height: 41 },
  { src: "/images/partners/partner-3.svg", width: 170, height: 41 },
  { src: "/images/partners/partner-4.svg", width: 170, height: 41 },
  { src: "/images/partners/partner-5.svg", width: 169, height: 42 },
];

export const platformStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonials/sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonials/james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonials/alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];
