"use client";

import Image from "next/image";

export function ShareButton({ title }: { title: string }) {
  async function share() {
    const data = { title, url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(data);
      } else {
        await navigator.clipboard.writeText(data.url);
      }
    } catch {
      // User dismissed the share sheet
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      className="flex shrink-0 items-center gap-2 rounded-3xl bg-lime px-6 py-2 text-base font-medium leading-6 text-shuttle-950 backdrop-blur-[20px] transition-colors hover:bg-lime-strong"
    >
      <Image src="/icons/share.svg" alt="" width={24} height={24} />
      Share
    </button>
  );
}
