"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type CreatorStatsProps = {
  products: number;
  followers: number;
};

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <li className="flex items-center gap-2 rounded-3xl bg-white px-6 py-3 text-lg font-medium leading-[1.2] backdrop-blur-[20px]">
      <span className="text-primary">{value}</span>
      <span className="text-shuttle-950">{label}</span>
    </li>
  );
}

export function CreatorStats({ products, followers }: CreatorStatsProps) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="flex flex-wrap items-start justify-between gap-4">
      <ul className="flex flex-wrap gap-4">
        <Stat value={products} label="Products" />
        <Stat value={followers + (following ? 1 : 0)} label="Followers" />
      </ul>
      <Button type="button" aria-pressed={following} onClick={() => setFollowing((f) => !f)} className="text-ink">
        {following ? "Following" : "Follow"}
      </Button>
    </div>
  );
}
