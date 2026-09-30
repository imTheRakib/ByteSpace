import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { LinkButton } from "@/components/ui/Button";
import { DesignCanvas } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page not found | ByteSpace",
};

export default function NotFound() {
  return (
    <>
      <main className="relative overflow-hidden bg-primary pb-[124px] lg:h-[957px] lg:pb-0">
        <p
          aria-hidden
          className="relative mx-auto mt-[160px] bg-clip-text text-center font-heading text-[180px] font-semibold leading-none tracking-[-0.01em] text-transparent sm:text-[300px] lg:text-[480px]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #d4fb20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)",
          }}
        >
          404
        </p>

        <DesignCanvas>
          <Image
            src="/images/decor/grid-cta.svg"
            alt=""
            width={1442}
            height={1026}
            className="absolute left-0 top-[-2px] max-w-none"
          />
        </DesignCanvas>

        <Header tone="light" className="absolute inset-x-0 top-0" />

        <div className="relative mx-auto -mt-[45px] flex max-w-[967px] flex-col items-center gap-8 px-4 text-center sm:-mt-[74px] lg:-mt-[119px]">
          <h1 className="font-heading text-[40px] font-semibold leading-[1.2] tracking-[-0.01em] text-white md:text-heading-l">
            The page you are looking for doesn’t exist
          </h1>
          <p className="text-lg leading-[1.6] text-shuttle-100">
            Try to use a correct url or go back to homepage to start again
          </p>
          <LinkButton href="/">Back to Home</LinkButton>
        </div>
      </main>
      <Footer />
    </>
  );
}
