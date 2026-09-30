import Image from "next/image";

type SearchInputProps = {
  placeholder: string;
  name?: string;
  label?: string;
  className?: string;
};

/** White pill search field with the magnifier icon. */
export function SearchInput({ placeholder, name = "q", label = "Search courses", className = "" }: SearchInputProps) {
  return (
    <label className={`flex h-[52px] min-w-0 items-center gap-2 rounded-3xl bg-white px-6 py-3 ${className}`}>
      <Image src="/icons/search.svg" alt="" width={24} height={24} />
      <span className="sr-only">{label}</span>
      <input
        type="search"
        name={name}
        placeholder={placeholder}
        className="w-full bg-transparent text-lg leading-[1.6] text-shuttle-950 outline-none placeholder:text-shuttle-400"
      />
    </label>
  );
}
