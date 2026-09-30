"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

type HeaderProps = {
  /** "light" = light text for dark backgrounds */
  tone?: "light" | "dark";
  className?: string;
};

export function Header({ tone = "dark", className = "relative" }: HeaderProps) {
  const pathname = usePathname();
  const text = tone === "light" ? "text-shuttle-50" : "text-shuttle-950";

  return (
    <header className={`z-10 h-30 ${className}`}>
      <div className="relative mx-auto h-full w-full max-w-[1232px] px-4">
        <Logo tone={tone} className="absolute left-[18px] top-[35px]" />

        <nav
          aria-label="Main"
          className={`absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-start gap-6 text-base md:flex ${text}`}
        >
          {navLinks.map(({ label, href }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap hover:opacity-80 ${active ? "font-medium leading-[1.2]" : "leading-[1.6]"}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className={`absolute right-4 top-12 flex items-start gap-6 text-base leading-6 ${text}`}>
          <Link href="/sign-in" className="whitespace-nowrap hover:opacity-80">
            Sign In
          </Link>
          <Link href="/sign-up" className="whitespace-nowrap hover:opacity-80">
            Join Us
          </Link>
          <Link href="/cart" aria-label="Cart" className="hover:opacity-80">
            <Image
              src="/icons/shopping-bag.svg"
              alt=""
              width={24}
              height={24}
              className={tone === "dark" ? "invert" : undefined}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
