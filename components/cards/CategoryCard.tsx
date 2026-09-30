import Image from "next/image";
import Link from "next/link";

export type Category = {
  name: string;
  icon: string;
  href: string;
};

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={category.href}
      className="flex size-[167px] shrink-0 flex-col items-center justify-center gap-3 rounded-3xl border border-shuttle-200 transition-colors hover:border-primary"
    >
      <span className="flex items-center justify-center rounded-[40px] bg-lime p-3">
        <Image src={category.icon} alt="" width={36} height={36} />
      </span>
      <span className="whitespace-nowrap text-xl font-medium leading-[1.2] text-shuttle-950">{category.name}</span>
    </Link>
  );
}
