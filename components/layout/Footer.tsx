import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const linkColumns = [
  {
    title: "Browse",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/categories" },
      { label: "Business", href: "/categories/business" },
      { label: "IT", href: "/categories/it-software" },
      { label: "Design", href: "/categories/design" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Development", href: "/categories/development" },
      { label: "Marketing", href: "/categories/marketing" },
      { label: "Photography", href: "/categories/photography" },
      { label: "Finance", href: "/categories/finance" },
      { label: "Sport", href: "/categories/sport" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/creators/join" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="border-t border-shuttle-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1232px] flex-col gap-16 px-4 pb-12 pt-[70px] lg:gap-[130px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-[92px]">
          <div className="flex flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo />
              <p className="max-w-[528px] text-sm leading-[1.6]">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <form className="flex flex-col gap-6" action="#">
              <div className="flex flex-wrap gap-6">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="h-[52px] w-full max-w-[376px] rounded-full border border-shuttle-200 bg-white px-6 text-base leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-950 focus:border-primary"
                />
                <Button type="submit">Search</Button>
              </div>
              <p className="max-w-[504px] text-xs leading-[1.6]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:w-[580px]">
            {linkColumns.map((column) => (
              <div key={column.title} className="lg:w-[167px]">
                {/* Column titles are invisible in the design; kept for screen readers and spacing */}
                <h3 className="sr-only">{column.title}</h3>
                <ul className="flex flex-col gap-4 pt-12 text-sm leading-[1.6]">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="whitespace-nowrap hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-shuttle-200 pt-[22px] text-xs leading-[1.6] sm:flex-row">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="whitespace-nowrap hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
