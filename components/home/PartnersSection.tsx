import Image from "next/image";
import { partnerLogos } from "@/data/home";

export function PartnersSection() {
  return (
    <section aria-label="Our partners" className="bg-shuttle-50 py-20">
      <ul className="mx-auto flex max-w-[1232px] flex-wrap items-end justify-center gap-x-[72px] gap-y-8 px-4">
        {partnerLogos.map((logo) => (
          <li key={logo.src}>
            <Image src={logo.src} alt="Logoipsum" width={logo.width} height={logo.height} />
          </li>
        ))}
      </ul>
    </section>
  );
}
