import Link from "next/link";
import type { ComponentProps } from "react";

const buttonClasses =
  "inline-flex shrink-0 items-center justify-center rounded-3xl bg-lime px-6 py-3 text-lg font-medium leading-[1.2] text-shuttle-950 transition-colors hover:bg-lime-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";

type ButtonProps = ComponentProps<"button">;
type LinkButtonProps = ComponentProps<typeof Link>;

export function Button({ className = "", ...props }: ButtonProps) {
  return <button className={`${buttonClasses} ${className}`} {...props} />;
}

export function LinkButton({ className = "", ...props }: LinkButtonProps) {
  return <Link className={`${buttonClasses} ${className}`} {...props} />;
}
