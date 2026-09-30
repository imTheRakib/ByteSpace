import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { DesignCanvas } from "@/components/ui/Container";
import { SearchInput } from "@/components/ui/SearchInput";

export function CoursesBanner() {
  return (
    <section className="relative overflow-hidden bg-primary pb-[69px]">
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

      <div className="relative mx-auto flex max-w-[1232px] flex-col items-center gap-8 px-4 pt-[164px]">
        <h1 className="text-center text-heading-s text-shuttle-50 max-sm:text-[28px]">
          Find Your Next Course
        </h1>

        <form action="/courses" role="search" className="flex w-full max-w-[624px] flex-wrap justify-center gap-4">
          <SearchInput placeholder="Search" className="flex-1 basis-[280px] md:max-w-[461px]" />
          <label className="relative shrink-0">
            <span className="sr-only">Search in</span>
            <select
              name="scope"
              defaultValue="courses"
              className="h-12 cursor-pointer appearance-none rounded-3xl bg-lime py-3 pl-6 pr-14 text-lg font-medium leading-[1.2] text-shuttle-950 outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime"
            >
              <option value="courses">Courses</option>
              <option value="creators">Creators</option>
            </select>
            <Image
              src="/icons/chevron-down.svg"
              alt=""
              width={24}
              height={24}
              className="pointer-events-none absolute right-6 top-3"
            />
          </label>
        </form>
      </div>
    </section>
  );
}
