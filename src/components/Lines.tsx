import { Fragment } from "react";
import type { CSSProperties, ElementType } from "react";

export default function Lines({
  as = "h2",
  lines,
  className = "",
  id,
  load = false,
  reveal = false,
}: {
  as?: "h1" | "h2" | "h3" | "p";
  lines: string[];
  className?: string;
  id?: string;
  load?: boolean;
  reveal?: boolean;
}) {
  const Tag = as as ElementType;
  const extra = reveal ? { "data-reveal-lines": "" } : {};
  return (
    <Tag id={id} className={`lines ${load ? "lines--load" : ""} ${className}`.trim()} {...extra}>
      {lines.map((text, i) => (
        <Fragment key={i}>
          <span className="line">
            <span data-line style={{ "--i": i } as CSSProperties}>
              {text}
            </span>
          </span>{" "}
        </Fragment>
      ))}
    </Tag>
  );
}
