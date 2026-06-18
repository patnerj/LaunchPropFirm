import { WA } from "./links";
import Reveal from "./Reveal";

export default function AboutBuilder() {
  return (
    <section className="bg-bg-dark-alt">
      <div className="mx-auto max-w-[760px] px-5 py-14 text-center md:py-[70px] lg:py-[90px]">
        {/* Avatar placeholder */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary bg-bg-dark text-3xl font-bold text-primary">
          H
        </div>

        <Reveal>
          <h2 className="mt-8 text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-txt md:text-[34px] lg:text-5xl">
            Built and supported by one person. That&apos;s the point.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 text-base leading-[1.65] text-muted md:text-lg">
            I&apos;m Haris — I built every line of this platform. When you buy
            it, you deal directly with the developer: no ticket queues, no
            support teams reading scripts. The person who installs your
            platform is the person who built it.
          </p>
        </Reveal>

        <a
          href={WA.sayHi}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block text-base font-semibold text-txt underline-offset-4 transition hover:underline"
        >
          Say hi on WhatsApp →
        </a>
      </div>
    </section>
  );
}
