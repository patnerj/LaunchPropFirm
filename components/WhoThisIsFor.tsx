import { WA } from "./links";
import Reveal from "./Reveal";

export default function WhoThisIsFor() {
  return (
    <section className="bg-bg-light">
      <div className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-[70px] lg:py-[100px]">
        <Reveal>
          <h2 className="text-center text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-on-light md:text-[34px] lg:text-5xl">
            Built for three kinds of founders.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
          <Reveal delay={0}>
            <div className="h-full rounded-2xl border border-border-light bg-white p-7 shadow-card-light md:p-9">
              <h3 className="text-[22px] font-semibold leading-[1.3] text-on-light md:text-[28px]">
                The Operator
              </h3>
              <p className="mt-3 text-base leading-[1.65] text-on-light-muted md:text-lg">
                You&apos;ve watched the industry&apos;s numbers and want in —
                without the $50K build.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative h-full rounded-2xl border-2 border-primary bg-white p-7 shadow-card-light md:scale-[1.03] md:p-9">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                BEST FIT
              </span>
              <h3 className="text-[22px] font-semibold leading-[1.3] text-on-light md:text-[28px]">
                The Forex Educator
              </h3>
              <p className="mt-3 text-base leading-[1.65] text-on-light-muted md:text-lg">
                You already have an audience of traders. A prop firm is the
                upsell they&apos;re asking you for.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="h-full rounded-2xl border border-border-light bg-white p-7 shadow-card-light md:p-9">
              <h3 className="text-[22px] font-semibold leading-[1.3] text-on-light md:text-[28px]">
                The Agency
              </h3>
              <p className="mt-3 text-base leading-[1.65] text-on-light-muted md:text-lg">
                Deliver a prop platform to your client in days — and keep the
                margin.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 text-center">
          <a
            href={WA.whichTier}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            Which tier fits you? Ask on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
