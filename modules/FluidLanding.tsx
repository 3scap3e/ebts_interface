import Image from "next/image";
import { PLATFORMS, linkTarget } from "@/hooks/platforms";
import { POSTER_ALT, QUOTE_GRADIENT, TITLE_ALT } from "@/hooks/assets";
import { Chance, Credit, Cta, Economy, Experience, GoodNews, Headline, Quote, Shuffle, Statement } from "@/modules/Copy";

export default function FluidLanding() {
  return (
    <div className="flex xl:hidden relative flex-col w-full overflow-hidden bg-[#e6dac2] text-black">
      <div className="flex relative flex-row w-full px-5 pt-6 pb-5 sm:px-10 sm:pt-8 sm:pb-6">
        <Statement className="text-[15px] leading-[1.35] sm:text-lg lg:text-xl" />
      </div>

      <div className="flex relative w-full aspect-[4/5] sm:aspect-[2562/1384]">
        <Image
          src="/images/titleimage.png"
          alt={TITLE_ALT}
          fill
          preload
          sizes="(min-width: 640px) 100vw, 250vw"
          draggable={false}
          className="object-cover object-left select-none"
        />
      </div>

      <div className="flex relative flex-col lg:flex-row w-full gap-10 lg:gap-14 px-5 sm:px-10 -mt-10 sm:-mt-28 lg:-mt-44">
        <div className="flex relative w-full max-w-[460px] self-center lg:self-start lg:w-[40%] lg:max-w-none shrink-0">
          <div className="flex relative w-full aspect-[995/1588] drop-shadow-[0_24px_40px_rgba(0,0,0,0.35)]">
            <Image
              src="/images/eventsim.png"
              alt={POSTER_ALT}
              fill
              sizes="(min-width: 1024px) 40vw, 460px"
              draggable={false}
              className="object-contain select-none"
            />
          </div>
          <div className="flex absolute left-[-17.6%] top-[71.5%] w-[34.6%] aspect-[344/252] pointer-events-none">
            <Image src="/images/scribble.png" alt="" fill sizes="160px" draggable={false} className="object-contain select-none" />
          </div>
        </div>

        <div className="flex relative flex-row w-full gap-4 sm:gap-5 lg:pt-56">
          <div className="flex relative w-2 sm:w-3 shrink-0 rounded-[3px] bg-[#0b0b0b]" />
          <div className="flex relative flex-col w-full gap-4">
            <Headline className="text-[26px] leading-[1.05] sm:text-[32px]" />
            <Chance className="whitespace-pre-line text-[19px] leading-[1.35] sm:text-xl" />
            <Experience className="text-[17px] leading-[1.4] sm:text-lg" />
            <GoodNews className="text-[17px] leading-[1.4] sm:text-lg" />
            <Shuffle className="text-[17px] leading-[1.4] sm:text-lg" />
            <div className="flex relative flex-row w-full">
              <div
                className="flex absolute inset-0 rounded-[6px] border-[0.8px] border-black mix-blend-soft-light"
                style={{ backgroundImage: QUOTE_GRADIENT }}
              />
              <div
                className="flex absolute left-[6px] top-[9px] bottom-[9px] w-[7px] rounded-[3px] mix-blend-hue"
                style={{ backgroundImage: QUOTE_GRADIENT }}
              />
              <Quote className="flex relative px-5 py-3 text-[15px] leading-[1.4] sm:text-base" />
            </div>
            <Cta className="text-[19px] leading-[1.15] sm:text-[21px]" />
          </div>
        </div>
      </div>

      <div className="flex sm:hidden relative w-full aspect-[4/5] mt-12">
        <Image
          src="/images/titleimage.png"
          alt=""
          fill
          sizes="250vw"
          draggable={false}
          className="object-cover object-right select-none"
        />
      </div>

      <div className="flex relative flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between w-full gap-8 px-5 pt-10 sm:px-10 sm:pt-14">
        <Economy className="text-[22px] leading-[1.2] max-w-[17rem] sm:text-2xl sm:max-w-[20rem]" />
        <nav className="flex relative flex-row flex-wrap gap-x-5 gap-y-4 sm:gap-x-6">
          {PLATFORMS.map(({ label, href, icon }) => (
            <a key={label} href={href} {...linkTarget(href)} aria-label={label === "github" ? "EBTS on GitHub" : `Download for ${label}`} className="group flex relative flex-col items-center gap-1">
              <div className="flex relative w-12 h-12 sm:w-14 sm:h-14 transition-transform duration-200 group-hover:-translate-y-1">
                <Image src={icon} alt="" fill sizes="56px" draggable={false} className="object-contain select-none" />
              </div>
              <span className="font-clash text-sm group-hover:underline">{label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="flex relative w-full px-5 pt-10 sm:px-10 sm:pt-14">
        <div className="flex relative w-full aspect-[738/152]">
          <Image src="/images/ebts.png" alt="EBTS" fill sizes="100vw" draggable={false} className="object-contain select-none" />
        </div>
      </div>

      <div className="flex relative flex-row justify-center w-full px-5 pt-8 pb-10">
        <Credit className="text-sm" />
      </div>
    </div>
  );
}
