import Image from "next/image";

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex w-full max-w-[374px] flex-col gap-6 rounded-3xl bg-white p-6">
      <Image src={testimonial.avatar} alt={testimonial.name} width={80} height={80} className="rounded-full" />
      <figcaption className="flex flex-col">
        <span className="font-heading text-xl font-semibold leading-7 tracking-[-0.01em] text-black">
          {testimonial.name}
        </span>
        <span className="text-lg leading-[1.6] text-primary">{testimonial.role}</span>
      </figcaption>
      <blockquote className="text-lg leading-[1.6] text-graphite">&quot;{testimonial.quote}&quot;</blockquote>
    </figure>
  );
}
