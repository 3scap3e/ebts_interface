import type { CSSProperties, ReactNode } from "react";

export interface MarkProps {
  children: ReactNode;
}

export interface CopyProps {
  className?: string;
  style?: CSSProperties;
  breakLine?: boolean;
}

export interface PlatformLink {
  label: string;
  href: string;
  icon: string;
  iconBox: [number, number, number, number];
  labelX: number;
}

export interface StageBox {
  x: number;
  y: number;
  w?: number;
  h?: number;
}
