import type { CopyProps, MarkProps } from "@/types/landing";
import { CREDIT_URL } from "@/hooks/platforms";

const Mark = ({ children }: MarkProps) => (
  <mark className="bg-[#daf822] text-inherit">{children}</mark>
);

export const Statement = ({ className, style }: CopyProps) => (
  <p className={`font-clash ${className ?? ""}`} style={style}>
    An event is an entire miniature economy, where we are invited to collide with miniature story worlds, in a window made from physical spaces and time.
  </p>
);

export const Headline = ({ className, style }: CopyProps) => (
  <h1 className={`font-tanker font-normal ${className ?? ""}`} style={style}>
    WHERE WERE YOU WHEN THEY ESCAPED THE LABS?
  </h1>
);

export const Chance = ({ className, style }: CopyProps) => (
  <p className={`font-tower ${className ?? ""}`} style={style}>
    <span className="underline decoration-1 underline-offset-[0.15em]">Don&apos;t leave it to chance</span>.{"\n"}
    Be <Mark>ready for humans</Mark> with <Mark>AI, robots &amp; realtime video</Mark> <em>in the same place.</em>
  </p>
);

export const Experience = ({ className, style, breakLine }: CopyProps) => (
  <p className={`font-tower ${className ?? ""}`} style={style}>
    {`We know from experience how exhausting organizing a memorable time can be.  So many${breakLine ? "\n" : " "}people and interests colliding until there's nothing left but to spontanesously combust.`}
  </p>
);

export const GoodNews = ({ className, style }: CopyProps) => (
  <p className={`font-tower ${className ?? ""}`} style={style}>
    <Mark>Here&apos;s the good news:</Mark> You can <em>train</em> for it. Every mix of talent, time, equipment, and space.
  </p>
);

export const Shuffle = ({ className, style }: CopyProps) => (
  <p className={`font-tower ${className ?? ""}`} style={style}>
    Shuffle through endless simulations before the real thing costs you a dime.
  </p>
);

export const Quote = ({ className, style, breakLine }: CopyProps) => (
  <blockquote className={`font-tower italic ${className ?? ""}`} style={style}>
    {`And if that agent based  hotness you're already running  dreams it can do half as much, fly to Japan fast.${breakLine ? "\n" : " "}Rumor has it you can put a ring on it, even if it's software that's flunked out of undergrad writing.`}
  </blockquote>
);

export const Cta = ({ className, style }: CopyProps) => (
  <p className={`font-tanker ${className ?? ""}`} style={style}>
    For LESS computer brained hangovers and more downloads scroll over here →
  </p>
);

export const Economy = ({ className, style }: CopyProps) => (
  <p className={`font-clash ${className ?? ""}`} style={style}>
    The computational economy before every event.
  </p>
);

export const Credit = ({ className, style }: CopyProps) => (
  <a
    href={CREDIT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`font-clash opacity-[0.56] transition-opacity hover:opacity-100 ${className ?? ""}`}
    style={style}
  >
    A burnt ember production.
  </a>
);
