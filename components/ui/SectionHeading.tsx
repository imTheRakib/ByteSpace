type SectionHeadingProps = {
  title: string;
  description: string;
  size?: "m" | "s";
  className?: string;
};

export function SectionHeading({ title, description, size = "m", className = "" }: SectionHeadingProps) {
  return (
    <div className={`flex flex-col items-center gap-4 text-center ${className}`}>
      <h2
        className={`font-heading font-semibold leading-[1.2] tracking-[-0.01em] text-ink ${
          size === "m" ? "max-w-[588px] text-[32px] md:text-[44px]" : "text-[28px] md:text-[36px]"
        }`}
      >
        {title}
      </h2>
      <p className="max-w-[917px] text-lg leading-[1.6] text-shuttle-400">{description}</p>
    </div>
  );
}
