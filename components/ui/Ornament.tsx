import Image from "next/image";

export type OrnamentShape = "spring-a" | "spring-b" | "torus" | "cylinder" | "cone" | "cone-alt";

export type OrnamentProps = {
  shape: OrnamentShape;
  /** Position and size in the section's 1440px design canvas */
  x: number;
  y: number;
  size: number;
  tint: "lime" | "white";
  flip?: boolean;
};

// Springs are framed images; the other shapes are exported with a slightly different bleed.
const bleed: Record<OrnamentShape, string> = {
  "spring-a": "0 0.47% -0.47% -0.93%",
  "spring-b": "0 0.47% -0.47% -0.93%",
  torus: "-0.22% 0.56% -0.28% -1.05%",
  cylinder: "-0.22% 0.56% -0.28% -1.05%",
  cone: "-0.22% 0.56% -0.28% -1.05%",
  "cone-alt": "-0.22% 0.56% -0.28% -1.05%",
};

const tints = { lime: "#d4fb20", white: "#f5f5f6" };

/**
 * A 3D render tinted with a hard-light colour layer clipped to the render's silhouette.
 */
export function Ornament({ shape, x, y, size, tint, flip = false }: OrnamentProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${flip ? "-scale-x-100" : ""}`}
      style={{ left: x, top: y, width: size, height: size }}
    >
      <div className="absolute" style={{ inset: bleed[shape] }}>
        <Image src={`/images/ornaments/${shape}.png`} alt="" fill sizes={`${size}px`} className="object-cover" />
        <div
          className="absolute inset-0 mix-blend-hard-light"
          style={{
            backgroundColor: tints[tint],
            maskImage: `url(/images/ornaments/${shape}-mask.png)`,
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
}
