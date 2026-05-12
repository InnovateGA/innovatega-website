import * as React from "react";

type Props = React.HTMLAttributes<HTMLElement> & {
  width?: "page" | "prose";
  hairline?: boolean;
};

export function Section({
  width = "page",
  hairline = false,
  className,
  children,
  ...rest
}: Props) {
  return (
    <section
      className={`section-y ${hairline ? "border-t border-rule" : ""} ${className ?? ""}`}
      {...rest}
    >
      <div className={width === "page" ? "container-page" : "container-prose"}>
        {children}
      </div>
    </section>
  );
}
