import type { PlatformLink } from "@/types/landing";

const RELEASE_URL = "https://github.com/3scap3e/ebts/releases/latest/download";

export const PLATFORMS: PlatformLink[] = [
  { label: "mac", href: `${RELEASE_URL}/ebts_0.1.0_aarch64.dmg`, icon: "/images/mac.png", iconBox: [2256, 1536, 64, 64], labelX: 2272 },
  { label: "linux", href: `${RELEASE_URL}/ebts_0.1.0_amd64.AppImage`, icon: "/images/linux.png", iconBox: [2333, 1541, 64, 62], labelX: 2347 },
  { label: "win", href: `${RELEASE_URL}/ebts_0.1.0_x64-setup.exe`, icon: "/images/windows.png", iconBox: [2409, 1540, 64, 62], labelX: 2424 },
  { label: "github", href: "https://github.com/3scap3e/ebts_interface", icon: "/images/github.png", iconBox: [2483, 1539, 64, 62], labelX: 2491 },
];

export const linkTarget = (href: string) =>
  href.startsWith(RELEASE_URL)
    ? { rel: "noopener noreferrer" }
    : href.startsWith("http")
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

export const CREDIT_URL = "https://stagerunner.world";
