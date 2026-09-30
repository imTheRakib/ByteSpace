import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { ProgressBar } from "@/components/ui/ProgressBar";

/* Small glassy cards that float over the hero / marketing imagery. */

const floating = "flex flex-col rounded-2xl p-4 backdrop-blur-[10px]";

type Density = "default" | "spacious";

export function LearningProgressCard({ percent, density = "default" }: { percent: number; density?: Density }) {
  return (
    <div className={`${floating} gap-2 bg-white`}>
      <p className={`text-sm font-medium text-shuttle-950 ${density === "spacious" ? "leading-6" : "leading-[1.2]"}`}>
        Learning Progress
      </p>
      <p className="w-[200px] font-heading text-5xl font-semibold leading-[1.2] tracking-[-0.01em] text-shuttle-950">
        {percent}%
      </p>
      <ProgressBar percent={percent} />
    </div>
  );
}

type HappyStudentsCardProps = {
  rating: number;
  reviews: number;
  avatars: string[];
  count: string;
  density?: Density;
  tone?: "white" | "lime";
};

export function HappyStudentsCard({
  rating,
  reviews,
  avatars,
  count,
  density = "default",
  tone = "white",
}: HappyStudentsCardProps) {
  const spacious = density === "spacious";
  const lime = tone === "lime";
  return (
    <div className={`${floating} w-[258px] justify-center gap-2 ${lime ? "bg-lime" : "bg-white"}`}>
      <div className="flex flex-col">
        <p className={`text-base font-medium text-shuttle-950 ${spacious ? "leading-6" : "leading-[1.2]"}`}>
          Happy Students
        </p>
        <p className="flex items-center">
          <span className={spacious ? "text-[10px] leading-[1.5]" : "text-xs leading-[1.6]"}>
            <span className={`text-shuttle-950 ${spacious ? "font-bold" : ""}`}>{rating} </span>
            <span className="text-shuttle-400">({reviews})</span>
          </span>
          <span className="relative size-4">
            <Image
              src={lime ? "/icons/star-blue.svg" : "/icons/star-lime.svg"}
              alt=""
              width={13.1625}
              height={12.5676}
              className="absolute left-[8.87%] top-[6.92%]"
            />
          </span>
        </p>
      </div>
      <AvatarStack avatars={avatars} count={count} size="md" badge={lime ? "dark" : "lime"} />
    </div>
  );
}

export function TopicStatCard({ topic, courses, students }: { topic: string; courses: string; students: string }) {
  return (
    <div className={`${floating} justify-center bg-white`}>
      <p className="text-base font-medium leading-[1.2] text-shuttle-950">{topic}</p>
      <p className="flex items-start gap-2 whitespace-nowrap text-shuttle-400">
        <span className="text-xs leading-[1.6]">{courses}</span>
        <span className="text-[10px] leading-[1.5]">•</span>
        <span className="text-xs leading-[1.6]">{students}</span>
      </p>
    </div>
  );
}

type RevenueCardProps = {
  title: string;
  period: string;
  amount: string;
  change: string;
  /** 0–100; when set, the wide layout shows the badge inline plus a progress bar */
  progress?: number;
};

export function RevenueCard({ title, period, amount, change, progress }: RevenueCardProps) {
  const badge = (
    <span className="rounded-3xl bg-lime-strong px-2 py-0.5 text-[10px] font-medium leading-5 text-shuttle-950">
      {change}
    </span>
  );
  const value = (
    <p className="font-heading text-2xl font-semibold leading-8 tracking-[-0.01em] text-shuttle-50">{amount}</p>
  );

  return (
    <div className={`${floating} items-start gap-2 bg-primary ${progress === undefined ? "w-[134px]" : ""}`}>
      <div className="flex flex-col whitespace-nowrap text-shuttle-50">
        <p className="text-base font-medium leading-[1.2]">{title}</p>
        <p className="text-[10px] leading-[1.2]">{period}</p>
      </div>
      {progress === undefined ? (
        <>
          {value}
          {badge}
        </>
      ) : (
        <>
          <div className="flex w-[200px] items-center justify-between">
            {value}
            {badge}
          </div>
          <ProgressBar percent={progress} trackClassName="bg-white" />
        </>
      )}
    </div>
  );
}
