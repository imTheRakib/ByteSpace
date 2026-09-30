import type { Course } from "@/components/cards/CourseCard";
import { featuredCourses } from "./home";

export type CourseDetails = {
  title: string;
  subtitle: string;
  level: string;
  rating: number;
  reviews: number;
  students: number;
  preview: string;
  lessonCount: number;
  totalHours: number;
  lessons: { title: string; duration: string }[];
  moreVideoCount: number;
  ctaText: string;
  description: string[];
  sneakPeek: string[];
  keyPoints: string[];
  curriculum: {
    intro: string;
    modules: { title: string; summary: string }[];
    lessonContent: string;
    progressIntro: string;
    progress: number;
  };
  reviewsSection: {
    intro: string;
    average: number;
    /** Bar fill (0–100) is taken from the design rather than derived from counts */
    breakdown: { stars: number; count: number; percent: number }[];
    reviews: { name: string; role: string; avatar: string; rating: number; date: string; text: string }[];
  };
  includes: { icon: string; label: string }[];
  creator: { name: string; role: string; avatar: string; bio: string };
};

/** Content of the designed "Build Digital Asset" course, used as the template for the others. */
const template: CourseDetails = {
  title: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  level: "Intermediate",
  rating: 4.8,
  reviews: 172,
  students: 199,
  preview: "/images/course-details/preview.jpg",
  lessonCount: 112,
  totalHours: 24,
  lessons: [
    { title: "Introduction to Digital Assets", duration: "12 mins" },
    { title: "Design Principles for Impacts", duration: "21 mins" },
    { title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ],
  moreVideoCount: 99,
  ctaText: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  description: [
    'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeek: [1, 2, 3, 4].map((i) => `/images/course-details/sneak-peek-${i}.jpg`),
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  curriculum: {
    intro:
      "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
    modules: [
      {
        title: "Module 1: Introduction to Digital Assets",
        summary:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        title: "Module 2: Design Principles for Impact",
        summary:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        title: "Module 4: User-Centric Design Strategies",
        summary:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        title: "Module 5: Interactive Media and Engagement",
        summary:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        title: "Module 6: Project Showcase and Critique",
        summary:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        summary:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
    lessonContent:
      "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
    progressIntro:
      "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
    progress: 55,
  },
  reviewsSection: {
    intro:
      "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
    average: 4.7,
    breakdown: [
      { stars: 5, count: 720, percent: 92.28 },
      { stars: 4, count: 120, percent: 36.49 },
      { stars: 3, count: 21, percent: 9.47 },
      { stars: 2, count: 12, percent: 3.51 },
      { stars: 1, count: 16, percent: 5.26 },
    ],
    reviews: [
      {
        name: "PurePearl Studio",
        role: "UI/UX Designer",
        avatar: "/images/reviewers/purepearl-studio.png",
        rating: 5,
        date: "a year ago",
        text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
      },
      {
        name: "Albert Flores",
        role: "UI/UX Designer",
        avatar: "/images/reviewers/albert-flores.png",
        rating: 5,
        date: "a year ago",
        text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        name: "Cody Fisher",
        role: "UI/UX Designer",
        avatar: "/images/reviewers/cody-fisher.png",
        rating: 5,
        date: "a year ago",
        text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      },
      {
        name: "Brooklyn Simmons",
        role: "UI/UX Designer",
        avatar: "/images/reviewers/brooklyn-simmons.png",
        rating: 5,
        date: "a year ago",
        text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      },
    ],
  },
  includes: [
    { icon: "/icons/learning-resources.svg", label: "Learning Resources" },
    { icon: "/icons/videocam.svg", label: "Quality Lesson Videos" },
    { icon: "/icons/certificate.svg", label: "Certificate of Completion" },
    { icon: "/icons/consultation.svg", label: "Private Consultation" },
  ],
  creator: {
    name: "PurePearl Studio",
    role: "Professional Creator",
    avatar: "/images/avatars/purepearl-studio.png",
    bio: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  },
};

export function getCourseWithDetails(slug: string): { course: Course; details: CourseDetails } | undefined {
  const course = featuredCourses.find((c) => c.slug === slug);
  if (!course) return undefined;
  const details = slug === "build-digital-asset" ? template : { ...template, title: course.title };
  return { course, details };
}

export const courseSlugs = featuredCourses.map((c) => c.slug);
