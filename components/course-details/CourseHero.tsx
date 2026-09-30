import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { creatorHref } from "@/data/creators";
import { Header } from "@/components/layout/Header";
import { DesignCanvas } from "@/components/ui/Container";
import type { CourseDetails } from "@/data/courseDetails";
import { ShareButton } from "./ShareButton";

type CourseHeroProps = {
  details: CourseDetails;
  creator: string;
};

function MetaPill({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <li className="flex items-center gap-2 rounded-3xl bg-white px-6 py-2 text-base font-medium leading-[1.2] text-shuttle-950 backdrop-blur-[20px]">
      <Image src={icon} alt="" width={24} height={24} />
      {children}
    </li>
  );
}

export function CourseHero({ details, creator }: CourseHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary pb-[62px]">
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

      <div className="relative mx-auto w-full max-w-[1232px] px-4 pt-[172px]">
        <div className="flex flex-col-reverse items-start justify-between gap-6 sm:flex-row lg:pl-0.5">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-shuttle-50">
              <h1 className="text-heading-s max-sm:text-[28px]">{details.title}</h1>
              <p className="text-heading-xs">{details.subtitle}</p>
            </div>
            <p className="text-lg font-medium leading-[1.2] text-primary-50">
              by{" "}
              <Link href={creatorHref(creator)} className="text-lime hover:underline">
                {creator}
              </Link>
            </p>
            <ul className="flex flex-wrap gap-4">
              <MetaPill icon="/icons/level-blue.svg">{details.level}</MetaPill>
              <MetaPill icon="/icons/star-rating.svg">
                {details.rating} ({details.reviews} reviews)
              </MetaPill>
              <MetaPill icon="/icons/people.svg">{details.students} Students</MetaPill>
            </ul>
          </div>
          <ShareButton title={details.title} />
        </div>

        <div className="relative mt-[59px] aspect-[720/479] w-full max-w-[720px] overflow-hidden rounded-3xl bg-thumb lg:ml-[5px]">
          <Image
            src={details.preview}
            alt={`${details.title} preview`}
            fill
            sizes="(min-width: 768px) 720px, 100vw"
            className="object-contain"
            preload
          />
          <button
            type="button"
            aria-label="Play course preview"
            className="absolute left-[45%] top-[42.6%] flex items-center justify-center rounded-3xl border border-graphite bg-[rgba(61,61,61,0.24)] p-2 backdrop-blur-[20px] transition-transform hover:scale-105 sm:p-4"
          >
            <Image src="/icons/play.svg" alt="" width={72} height={72} className="size-12 sm:size-[72px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
