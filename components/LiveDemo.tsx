import { DEMO, DEMO_CREDENTIALS, WA } from "./links";
import { CheckIcon } from "./icons";
import Reveal from "./Reveal";

const traderItems = [
  "Open the terminal",
  "Chart NAS100",
  "Take a position",
  "Watch live PnL",
];

const adminItems = [
  "Revenue analytics",
  "Payout approvals",
  "Branding center",
  "Full control",
];

export default function LiveDemo() {
  return (
    <section id="demo" className="relative overflow-hidden bg-bg-dark">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[60%]"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(124,110,245,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-site px-5 py-14 md:px-8 md:py-[70px] lg:py-[110px]">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-txt md:text-[34px] lg:text-5xl">
              Don&apos;t take my word for anything. Log in.
            </h2>
            <p className="mt-5 text-base leading-[1.65] text-muted md:text-lg">
              Tour it as a trader instantly. Tour it as the owner in two
              minutes.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card A — Trader */}
          <Reveal delay={0}>
            <div className="flex h-full flex-col rounded-2xl border-2 border-secondary bg-bg-dark-alt p-8 md:p-10">
              <p className="text-[13px] font-semibold uppercase tracking-[3px] text-secondary">
                Instant — no signup
              </p>
              <h3 className="mt-3 text-[22px] font-semibold leading-[1.3] text-txt md:text-[28px]">
                Trader Demo
              </h3>
              <ul className="mt-6 flex-1 space-y-3">
                {traderItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-txt">
                    <CheckIcon className="h-4 w-4 shrink-0 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={DEMO.trader}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl border-2 border-secondary px-7 py-4 text-base font-semibold text-secondary transition-colors hover:bg-secondary/10 hover:text-secondary-hover"
              >
                Open Trader Demo →
              </a>
              <p className="mt-3 text-center text-xs text-muted">
                Login:{" "}
                <span className="font-mono text-txt/70">{DEMO_CREDENTIALS.username}</span>{" "}
                /{" "}
                <span className="font-mono text-txt/70">{DEMO_CREDENTIALS.password}</span>
              </p>
            </div>
          </Reveal>

          {/* Card B — Admin */}
          <Reveal delay={150}>
            <div className="flex h-full flex-col rounded-2xl border-2 border-primary bg-bg-dark-alt p-8 md:p-10">
              <p className="text-[13px] font-semibold uppercase tracking-[3px] text-primary">
                2 minutes via WhatsApp
              </p>
              <h3 className="mt-3 text-[22px] font-semibold leading-[1.3] text-txt md:text-[28px]">
                Admin Demo
              </h3>
              <ul className="mt-6 flex-1 space-y-3">
                {adminItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base text-txt">
                    <CheckIcon className="h-4 w-4 shrink-0 text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WA.adminDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-primary px-7 py-4 text-base font-semibold text-white shadow-btn-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-btn-primary-hover"
              >
                Get Admin Access on WhatsApp →
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mx-auto mt-12 max-w-[760px] rounded-xl border-l-[3px] border-primary bg-primary/[0.08] px-7 py-6">
            <p className="text-[17px] italic leading-relaxed text-txt">
              &ldquo;Everything on a sales page can be faked. So on a call,
              I&apos;ll wipe the demo data and regenerate it live in front of
              you. Nothing here is a mockup.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
