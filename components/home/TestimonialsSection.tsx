import Image from "next/image";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { DesignCanvas } from "@/components/ui/Container";
import { testimonials } from "@/data/home";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-surface pb-[57px] pt-[74px]">
      <DesignCanvas>
        <Image
          src="/images/decor/testimonial-blob-1.svg"
          alt=""
          width={1217}
          height={1217}
          className="absolute left-[802px] top-[-281px] max-w-none"
        />
        <Image
          src="/images/decor/testimonial-blob-2.svg"
          alt=""
          width={752}
          height={752}
          className="absolute left-[355px] top-[-178px] max-w-none"
        />
        <Image
          src="/images/decor/testimonial-blob-3.svg"
          alt=""
          width={1217}
          height={1217}
          className="absolute left-[-482px] top-[109px] max-w-none"
        />
      </DesignCanvas>

      <div className="relative mx-auto flex w-full max-w-[1236px] flex-col gap-[72px] px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]">
          <h2 className="font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] text-black md:text-[44px] lg:w-[577px] lg:shrink-0">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-lg leading-[1.6] text-graphite lg:w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <div className="grid items-start justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
