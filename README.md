# ByteSpace

ByteSpace is the frontend of an online learning platform where learners browse and enrol in courses and creators publish them.

The site is frontend-only. All content comes from static data files in [`data/`](data), and forms are not yet connected to a backend.

## Tech stack

| | |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org)|
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Poppins via `next/font/google` |
| Linting | ESLint 9 with `eslint-config-next` |

## Getting started

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Pages

| Route | Page | Notes |
| --- | --- | --- |
| `/` | Home | Hero, partners, featured courses and categories, growth and creator sections, CTA, testimonials |
| `/sign-in` | Login | Opened from **Sign In** in the header |
| `/sign-up` | Sign up | Opened from **Join Us** in the header and **Create an account** on the login page |
| `/courses` | Course catalogue | Search banner, filters, topic tabs, course grid, pagination (`?page=2`) |
| `/courses/[slug]` | Course details | **About**, **Lessons** and **Reviews** tabs, each linkable (`#about`, `#lessons`, `#reviews`) |
| `/creators/[slug]` | Creator profile | Opened from **See Full Profile** on a course page |
| any unknown URL | 404 Not Found | Also shown for `/creators` and `/cart`, which have no page yet |

Course and creator pages are generated at build time from [`data/`](data). Unknown slugs return a 404.

## Project structure

```
byte-space/
├── app/                              # Routes (Next.js App Router)
│   ├── layout.tsx                    # Root layout, fonts, metadata
│   ├── globals.css                   # Tailwind import, design tokens, text-style utilities
│   ├── page.tsx                      # Home
│   ├── not-found.tsx                 # 404 page
│   ├── sign-in/page.tsx              # Login
│   ├── sign-up/page.tsx              # Sign up
│   ├── courses/
│   │   ├── page.tsx                  # Course catalogue
│   │   └── [slug]/page.tsx           # Course details
│   ├── creators/
│   │   └── [slug]/page.tsx           # Creator profile
│   └── fonts/                        # Self-hosted Satoshi and Clash Display (woff2)
│
├── components/
│   ├── layout/                       # Site-wide chrome
│   │   ├── Header.tsx                # Nav with active-link state; light/dark tone
│   │   └── Footer.tsx                # Newsletter form, link columns, legal links
│   ├── ui/                           # Reusable primitives
│   │   ├── Button.tsx                # Lime pill: <Button> and <LinkButton>
│   │   ├── Container.tsx             # 1200px content container + DesignCanvas
│   │   ├── Logo.tsx                  # Logo, with optional mark-only variant
│   │   ├── Ornament.tsx              # Tinted 3D decorative shapes
│   │   ├── SearchInput.tsx           # White search pill
│   │   ├── TextField.tsx             # Labelled form input
│   │   ├── TopicFilter.tsx           # Selectable topic pills
│   │   ├── pill.ts                   # Shared pill/tab class helper
│   │   ├── Pagination.tsx            # URL-based pagination
│   │   ├── ProgressBar.tsx
│   │   ├── StarRating.tsx
│   │   ├── AvatarStack.tsx
│   │   └── SectionHeading.tsx
│   ├── cards/                        # Reusable cards
│   │   ├── CourseCard.tsx            # default and "spacious" variants
│   │   ├── CategoryCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── FloatingCards.tsx         # Learning progress, happy students, topic stats, revenue
│   ├── home/                         # Home page sections
│   ├── auth/                         # Shared login/sign-up layout, forms, social buttons
│   ├── courses/                      # Catalogue banner and toolbar
│   ├── course-details/               # Hero, sidebar, tabs, reviews panel, share button
│   └── creators/                     # Creator hero and follow/stats
│
├── data/                             # Static content (placeholder for a future API)
│   ├── home.ts                       # Featured courses, categories, testimonials, stats
│   ├── courses.ts                    # Catalogue topics and paging
│   ├── courseDetails.ts              # Course detail content (about, curriculum, reviews)
│   └── creators.ts                   # Creator profiles and profile URL helper
│
├── public/
│   ├── icons/                        # SVG icons exported from Figma
│   └── images/
│       ├── avatars/  creators/  reviewers/  testimonials/   # People
│       ├── courses/  course-details/  home/                 # Photography
│       ├── ornaments/                # 3D shape renders and their mask silhouettes
│       ├── partners/                 # Partner logos
│       └── decor/                    # Grid, glow blobs, badge circles
│
├── AGENTS.md / CLAUDE.md             # Notes for AI coding agents
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
└── tsconfig.json                     # "@/*" path alias → project root
```
