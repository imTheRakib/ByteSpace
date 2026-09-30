/** Lime/grey selectable pill used by topic filters and tab lists. */
export function pillClass(selected: boolean) {
  return `whitespace-nowrap rounded-3xl px-4 py-3 text-base font-medium leading-[1.2] transition-colors ${
    selected ? "bg-lime text-shuttle-950" : "bg-shuttle-50 text-shuttle-700 hover:bg-shuttle-100"
  }`;
}
