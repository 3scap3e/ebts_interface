import type { CSSProperties } from "react";
import type { StageBox } from "@/types/landing";

export const STAGE_WIDTH = 2560;
export const STAGE_HEIGHT = 1920;

export const u = (value: number): string => `calc(var(--u) * ${value})`;

export const place = ({ x, y, w, h }: StageBox): CSSProperties => ({
  position: "absolute",
  left: u(x),
  top: u(y),
  ...(w !== undefined ? { width: u(w) } : {}),
  ...(h !== undefined ? { height: u(h) } : {}),
});

export const type = (size: number, lineHeight: number): CSSProperties => ({
  fontSize: u(size),
  lineHeight: u(lineHeight),
});
