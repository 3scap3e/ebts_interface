import Image from "next/image";
import { STAGE_HEIGHT, STAGE_WIDTH, place, type } from "@/hooks/stage";
import { PLATFORMS, linkTarget } from "@/hooks/platforms";
import { POSTER_ALT, QUOTE_GRADIENT, TITLE_ALT } from "@/hooks/assets";
import { Chance, Credit, Cta, Economy, Experience, GoodNews, Headline, Quote, Shuffle, Statement } from "@/modules/Copy";

export default function DesktopStage() {
  return (
    <div className="hidden xl:flex relative flex-col w-full [container-type:inline-size]">
      <div
        className="flex relative w-full overflow-hidden bg-[#e6dac2] text-black [--u:calc(100cqw/2560)]"
        style={{ aspectRatio: `${STAGE_WIDTH} / ${STAGE_HEIGHT}` }}
      >
        <div className="flex relative" style={place({ x: 0, y: 144, w: 2561, h: 1383 })}>
          <Image src="/images/titleimage.png" alt={TITLE_ALT} fill preload sizes="100vw" draggable={false} className="object-fill select-none" />
        </div>

        <div className="flex relative opacity-[0.92]" style={place({ x: 830, y: 241, w: 994, h: 1587 })}>
          <Image src="/images/eventsim.png" alt={POSTER_ALT} fill preload sizes="40vw" draggable={false} className="object-fill select-none" />
        </div>

        <div className="flex relative pointer-events-none" style={place({ x: 655, y: 1375, w: 344, h: 252 })}>
          <Image src="/images/scribble.png" alt="" fill sizes="14vw" draggable={false} className="object-contain select-none" />
        </div>

        <div className="flex relative rounded-[calc(var(--u)*6)] bg-[#0b0b0b]" style={place({ x: 8, y: 1558, w: 63, h: 333 })} />

        <div
          className="flex relative rounded-[calc(var(--u)*6)] border-black mix-blend-soft-light"
          style={{ ...place({ x: 93, y: 1790, w: 657, h: 57 }), backgroundImage: QUOTE_GRADIENT, borderWidth: "calc(var(--u) * 0.8)" }}
        />
        <div
          className="flex relative rounded-[calc(var(--u)*3)] mix-blend-hue"
          style={{ ...place({ x: 99, y: 1799, w: 7, h: 41 }), backgroundImage: QUOTE_GRADIENT }}
        />

        <div className="flex relative" style={place({ x: 1822, y: 1768, w: 738, h: 152 })}>
          <Image src="/images/ebts.png" alt="EBTS" fill sizes="30vw" draggable={false} className="object-fill select-none" />
        </div>

        <Statement className="whitespace-pre" style={{ ...place({ x: 214, y: 49 }), ...type(36, 44) }} />
        <Headline className="whitespace-pre" style={{ ...place({ x: 93, y: 1554 }), ...type(36, 40) }} />
        <Chance className="whitespace-pre" style={{ ...place({ x: 92, y: 1607 }), ...type(21, 25) }} />
        <Experience breakLine className="whitespace-pre" style={{ ...place({ x: 92, y: 1667 }), ...type(18, 22) }} />
        <GoodNews className="whitespace-pre" style={{ ...place({ x: 92, y: 1721 }), ...type(18, 22) }} />
        <Shuffle className="whitespace-pre" style={{ ...place({ x: 93, y: 1757 }), ...type(18, 22) }} />
        <Quote breakLine className="whitespace-pre" style={{ ...place({ x: 112, y: 1800 }), ...type(16, 20) }} />
        <Cta className="whitespace-pre" style={{ ...place({ x: 93, y: 1863 }), ...type(21, 24) }} />
        <Credit className="whitespace-pre" style={{ ...place({ x: 1238, y: 1860 }), ...type(18, 22) }} />
        <Economy style={{ ...place({ x: 1840, y: 1534, w: 343 }), ...type(27, 32) }} />

        {PLATFORMS.map(({ label, href, icon, iconBox, labelX }) => (
          <a key={label} href={href} {...linkTarget(href)} aria-label={label === "github" ? "EBTS on GitHub" : `Download for ${label}`} className="group flex absolute inset-0 pointer-events-none">
            <div
              className="flex relative pointer-events-auto transition-transform duration-200 group-hover:-translate-y-[calc(var(--u)*4)]"
              style={place({ x: iconBox[0], y: iconBox[1], w: iconBox[2], h: iconBox[3] })}
            >
              <Image src={icon} alt="" fill sizes="64px" draggable={false} className="object-contain select-none" />
            </div>
            <span className="whitespace-pre font-clash pointer-events-auto group-hover:underline" style={{ ...place({ x: labelX, y: 1609 }), ...type(18, 22) }}>
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
