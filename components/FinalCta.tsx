import { DEMO, WA } from "./links";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden md:min-h-[70vh]">
      {/* Background image with fixed attachment on desktop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: "url(/images/certificate-preview.jpg)" }}
      />
      {/* 88% dark overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-bg-dark/[0.88]" />

      <div className="relative mx-auto flex max-w-site flex-col items-center px-5 py-20 text-center md:px-8 md:py-[120px]">
        <Reveal>
          <h2 className="max-w-[900px] text-[34px] font-bold leading-[1.1] tracking-[-1px] text-txt md:text-[42px] lg:text-[64px]">
            The traders are already looking for their next firm. Make it yours.
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 text-base leading-[1.65] text-muted md:text-lg">
            Live demo open now. Install slots limited this month.
          </p>
        </Reveal>

        <Reveal delay={300} className="w-full md:w-auto">
          <div className="mt-10 flex flex-col gap-3 md:flex-row md:gap-4">
            <a
              href={DEMO.trader}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-9 py-4 text-lg font-semibold text-white shadow-btn-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-btn-primary-hover md:px-11 md:py-5"
            >
              Open the Live Demo
            </a>
            <a
              href={WA.readyToTalk}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border-2 border-secondary px-9 py-4 text-lg font-semibold text-secondary transition-colors hover:bg-secondary/10 hover:text-secondary-hover md:px-11 md:py-5"
            >
              Message Me on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
