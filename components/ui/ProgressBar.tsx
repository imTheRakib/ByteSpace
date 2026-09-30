type ProgressBarProps = {
  /** 0–100 */
  percent: number;
  trackClassName?: string;
  className?: string;
};

export function ProgressBar({ percent, trackClassName = "bg-track", className = "w-[200px]" }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`relative h-2 rounded-3xl ${trackClassName} ${className}`}
    >
      <div className="absolute inset-y-0 left-0 rounded-3xl bg-lime" style={{ width: `${percent}%` }} />
    </div>
  );
}
