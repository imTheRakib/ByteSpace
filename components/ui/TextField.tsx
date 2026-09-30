import type { ComponentProps } from "react";

type TextFieldProps = ComponentProps<"input"> & {
  label: string;
  id: string;
};

export function TextField({ label, id, className = "", ...props }: TextFieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium leading-[1.2] text-shuttle-950">
        {label}
      </label>
      <input
        id={id}
        className="h-[52px] w-full rounded-xl border border-shuttle-100 bg-white px-6 py-3 text-lg leading-[1.6] text-shuttle-950 outline-none transition-colors placeholder:text-shuttle-400 focus:border-primary"
        {...props}
      />
    </div>
  );
}
