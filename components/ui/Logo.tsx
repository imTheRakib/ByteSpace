import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  tone?: "light" | "dark";
  /** Show only the "b" mark, without the ByteSpace wordmark */
  markOnly?: boolean;
  className?: string;
};

export function Logo({ tone = "dark", markOnly = false, className = "relative" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={`flex h-[37px] ${markOnly ? "w-[28.875px]" : "w-[171px]"} ${className}`}
    >
      <Image src="/icons/logo-mark.svg" alt="" width={28.875} height={31.5} className="absolute left-0 top-0" />
      {!markOnly && (
        <span
          className={`absolute left-[37px] top-[7px] whitespace-nowrap font-logo text-2xl font-bold leading-[normal] ${
            tone === "light" ? "text-shuttle-50" : "text-shuttle-950"
          }`}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
