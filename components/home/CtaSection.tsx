import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { DesignCanvas } from "@/components/ui/Container";
import { Ornament, type OrnamentProps } from "@/components/ui/Ornament";

const ornaments: OrnamentProps[] = [
  { shape: "cone", x: 1080, y: 0, size: 188, tint: "lime" },
  { shape: "spring-a", x: 1110, y: 289, size: 330, tint: "lime" },
  { shape: "spring-b", x: -118, y: -162, size: 385, tint: "lime" },
  { shape: "spring-b", x: 178, y: 5, size: 175, tint: "white", flip: true },
  { shape: "cone-alt", x: -48, y: 225, size: 188, tint: "white" },
  { shape: "torus", x: 20, y: 299, size: 342, tint: "lime" },
  { shape: "cylinder", x: 1226, y: 6, size: 370, tint: "white" },
];

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <DesignCanvas>
        <Image
          src="/images/decor/grid-cta.svg"
          alt=""
          width={1442}
          height={1026}
          className="absolute left-0 top-[-2px] max-w-none"
        />
      </DesignCanvas>

      <div className="relative mx-auto flex min-h-[488px] max-w-[996px] flex-col items-center justify-center gap-10 px-4 py-[85px] text-center text-shuttle-50">
        <h2 className="max-w-[710px] font-heading text-[32px] font-semibold leading-[1.2] tracking-[-0.01em] md:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-lg leading-[1.6]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <LinkButton href="/creators/join">Join as Creator</LinkButton>
      </div>

      <DesignCanvas>
        {ornaments.map((o, i) => (
          <Ornament key={i} {...o} />
        ))}
      </DesignCanvas>
    </section>
  );
}
