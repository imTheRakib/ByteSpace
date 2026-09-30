import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { DesignCanvas } from "@/components/ui/Container";
import type { Creator } from "@/data/creators";
import { CreatorStats } from "./CreatorStats";

export function CreatorHero({ creator }: { creator: Creator }) {
  return (
    <section className="relative overflow-hidden bg-primary pb-[82px]">
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

      <div className="relative mx-auto flex w-full max-w-[1232px] flex-col gap-10 px-4 pt-[172px] lg:pl-[18px]">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-6">
            <Image
              src={creator.avatar}
              alt={creator.name}
              width={96}
              height={96}
              className="size-16 shrink-0 rounded-3xl object-cover sm:size-24"
              preload
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-start gap-2">
                <h1 className="text-heading-s text-shuttle-50 max-sm:text-[28px]">{creator.name}</h1>
                <span className="rounded-3xl bg-lime px-6 py-2 text-base font-medium leading-[1.2] text-shuttle-950 backdrop-blur-[20px]">
                  Creator
                </span>
              </div>
              <p className="text-lg leading-[1.6] text-shuttle-50">{creator.headline}</p>
            </div>
          </div>
          <div className="text-lg leading-[1.6] text-shuttle-50">
            {creator.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <CreatorStats products={creator.products} followers={creator.followers} />
      </div>
    </section>
  );
}
