import Image from "next/image";
import { asset } from "@/lib/assetPath";

type Props = {
  /** "light" = for use on light backgrounds (paper). "dark" = for dark surfaces. */
  variant?: "light" | "dark";
  /** Tailwind height class. Defaults to h-7 (28px). */
  className?: string;
};

const sources = {
  light: asset("/brand/innovatega-mark-light-v2.png"),
  dark: asset("/brand/innovatega-mark-dark-v2.png"),
};

const intrinsic = {
  light: { w: 1074, h: 153 },
  dark: { w: 1046, h: 150 },
};

export function Wordmark({ variant = "light", className }: Props) {
  const dims = intrinsic[variant];
  return (
    <Image
      src={sources[variant]}
      alt="InnovateGA"
      width={dims.w}
      height={dims.h}
      priority
      className={`block h-5 w-auto ${className ?? ""}`}
    />
  );
}
