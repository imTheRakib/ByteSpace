import Image from "next/image";

function ToolbarButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button
      type="button"
      aria-haspopup="menu"
      className="flex items-center justify-center gap-1 rounded-3xl border border-shuttle-200 bg-white px-4 py-3 text-base font-medium leading-[1.2] text-shuttle-700 transition-colors hover:border-primary"
    >
      <Image src={icon} alt="" width={24} height={24} />
      {label}
    </button>
  );
}

export function CoursesToolbar() {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div className="flex flex-wrap gap-4">
        <ToolbarButton icon="/icons/filter.svg" label="Filter" />
        <ToolbarButton icon="/icons/level.svg" label="Level" />
        <ToolbarButton icon="/icons/category.svg" label="Category" />
      </div>
      <ToolbarButton icon="/icons/sort.svg" label="Most relevant" />
    </div>
  );
}
