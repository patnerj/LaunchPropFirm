import Image from "next/image";
import { DEMO } from "./links";
import { CheckIcon, PlayIcon } from "./icons";
import Reveal from "./Reveal";

const heroChecks = [
  "No monthly fees",
  "Full source ownership",
  "Guided setup wizard",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark md:min-h-[90vh] lg:min-h-screen">
      {/* Radial purple glow — top left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 10%, rgba(124,110,245,0.18), transparent 70%)",
        }}
      />
      {/* Radial green glow — bottom right (hidden on mobile) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 85% 90%, rgba(16,185,129,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-site flex-col items-center gap-12 px-5 pb-16 pt-[120px] md:flex-row md:px-8 md:pb-24 md:pt-[140px] lg:gap-12">
        {/* Column 1 — copy (55%) */}
        <div className="w-full text-center md:w-[55%] md:text-left">
          <Reveal>
            <h1 className="text-[34px] font-bold leading-[1.1] tracking-[-1px] text-txt md:text-[42px] lg:text-[64px]">
              Own a Prop Trading Firm. Launch in{" "}
              <span className="text-secondary">Days</span>, Not Months.
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-[540px] text-base leading-[1.65] text-muted md:mx-0 md:text-lg">
              The complete white-label platform behind a funded-trader business
              — challenges, live market pricing, payments, payouts,
              certificates — installed under your brand for a one-time price.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-3 md:flex-row md:gap-4">
              <a
                href={DEMO.trader}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-base font-semibold text-white shadow-btn-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-btn-primary-hover md:px-9 md:py-[18px]"
              >
                <PlayIcon className="h-4 w-4" />
                Try the Live Demo — Instant Access
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-txt underline-offset-4 transition hover:underline"
              >
                Watch the 60-Second Tour
              </a>
            </div>
          </Reveal>

          <Reveal delay={450}>
            <ul className="mt-8 flex flex-col items-center gap-3 md:flex-row md:gap-6">
              {heroChecks.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted">
                  <CheckIcon className="h-3.5 w-3.5 shrink-0 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Column 2 — media (45%) */}
        <div className="w-full md:w-[45%]">
          <Reveal delay={300}>
            <div className="overflow-hidden rounded-2xl border border-border-subtle shadow-hero-media">
              <Image
                src="/images/dashboard-overview.jpg"
                alt="LaunchPropFirm revenue dashboard overview"
                width={1280}
                height={800}
                priority
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
