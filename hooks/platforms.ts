import type { PlatformLink } from "@/types/landing";

export const PLATFORMS: PlatformLink[] = [
  { label: "mac", href: "#mac", icon: "/images/mac.png", iconBox: [2256, 1536, 64, 64], labelX: 2272 },
  { label: "linux", href: "#linux", icon: "/images/linux.png", iconBox: [2333, 1541, 64, 62], labelX: 2347 },
  { label: "win", href: "#win", icon: "/images/windows.png", iconBox: [2409, 1540, 64, 62], labelX: 2424 },
  { label: "github", href: "https://github.com/3scap3e/ebts_interface", icon: "/images/github.png", iconBox: [2483, 1539, 64, 62], labelX: 2491 },
];

export const linkTarget = (href: string) =>
  href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};

export const CREDIT_URL = "https://stagerunner.world";
