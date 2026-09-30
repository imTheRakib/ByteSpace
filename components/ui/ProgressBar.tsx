type ProgressBarProps = {
  /** 0–100 */
  percent: number;
  trackClassName?: string;
};

export function ProgressBar({ percent, trackClassName = "bg-track" }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`relative h-2 w-[200px] rounded-3xl ${trackClassName}`}
    >
      <div className="absolute inset-y-0 left-0 rounded-3xl bg-lime" style={{ width: `${percent}%` }} />
    </div>
  );
}
