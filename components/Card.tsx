import * as React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & { as?: "div" | "article" };

export function Card({ as: Tag = "div", className, ...rest }: Props) {
  return (
    <Tag
      className={`group relative rounded-lg border border-rule bg-paper-raised p-6 transition duration-200 ease-soft hover:-translate-y-0.5 hover:shadow-card hover:border-ink/15 ${className ?? ""}`}
      {...rest}
    />
  );
}
