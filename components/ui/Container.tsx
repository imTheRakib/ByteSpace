import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1232px] px-4 ${className}`}>{children}</div>;
}

/** Centered 1440px layer for placing decorative elements at their Figma coordinates. */
export function DesignCanvas({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-y-0 left-1/2 w-[1440px] -translate-x-1/2 ${className}`}>
      {children}
    </div>
  );
}
