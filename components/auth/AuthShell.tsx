import Image from "next/image";
import type { ReactNode } from "react";
import { DesignCanvas } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { AuthShowcase } from "./AuthShowcase";

type AuthShellProps = {
  title: string;
  description: string;
  /** Content of the white form card */
  children: ReactNode;
};

/** Blue full-page layout shared by the sign-in / sign-up pages. */
export function AuthShell({ title, description, children }: AuthShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-primary lg:min-h-[1024px]">
      <DesignCanvas>
        <Image
          src="/images/decor/grid-cta.svg"
          alt=""
          width={1442}
          height={1026}
          className="absolute left-0 top-[-2px] max-w-none"
        />
      </DesignCanvas>
      <DesignCanvas className="hidden lg:block">
        <AuthShowcase />
      </DesignCanvas>

      <div className="relative mx-auto w-full max-w-[1232px] px-4">
        <Logo markOnly className="absolute left-[18px] top-[35px]" />

        <div className="flex flex-col gap-10 py-[120px] lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-[475px] flex-col gap-4 text-shuttle-50 lg:ml-0.5">
            <h2 className="text-heading-xs">{title}</h2>
            <p className="text-lg leading-[1.6]">{description}</p>
          </div>

          <div className="flex w-full max-w-[579px] flex-col rounded-3xl bg-white px-6 py-10 sm:px-[63px] sm:pb-10 sm:pt-[61px] lg:h-[784px] lg:shrink-0">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
