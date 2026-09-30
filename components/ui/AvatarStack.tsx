import Image from "next/image";

type AvatarStackProps = {
  avatars: string[];
  count: string;
  size?: "md" | "sm";
  badge?: "lime" | "dark";
};

const sizes = {
  md: {
    px: 43,
    overlap: "-mr-4",
    badgeSrc: { lime: "/images/decor/avatar-count-lg.svg", dark: "/images/decor/avatar-count-lg-dark.svg" },
    label: "font-bold leading-[1.5]",
  },
  sm: {
    px: 32,
    overlap: "-mr-2",
    badgeSrc: { lime: "/images/decor/avatar-count-sm.svg", dark: "/images/decor/avatar-count-sm-alt.svg" },
    label: "font-medium leading-5",
  },
};

export function AvatarStack({ avatars, count, size = "sm", badge = "lime" }: AvatarStackProps) {
  const s = sizes[size];
  const badgeSrc = s.badgeSrc[badge];

  return (
    <div className="flex items-start">
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={s.px}
          height={s.px}
          className={`relative shrink-0 rounded-full ${s.overlap}`}
        />
      ))}
      <div className="relative flex shrink-0 items-center justify-center" style={{ width: s.px, height: s.px }}>
        <Image src={badgeSrc} alt="" width={s.px} height={s.px} className="absolute inset-0" />
        <span
          className={`relative text-xs ${s.label} ${badge === "lime" ? "text-shuttle-950" : size === "md" ? "text-shuttle-50" : "text-white"}`}
        >
          {count}
        </span>
      </div>
    </div>
  );
}
