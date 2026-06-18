import { WA } from "./links";
import {
  BankIcon,
  BitcoinIcon,
  CheckIcon,
  CoinsIcon,
  EthereumIcon,
  ShieldIcon,
} from "./icons";
import Reveal from "./Reveal";

const sourceCodeItems = [
  "Complete platform source",
  "Buyer pack & documentation",
  "Launch checklist",
  "Demo data generator",
];

const launchReadyItems = [
  "Everything in Source Code",
  "Installed on your hosting — personally",
  "Setup wizard run together on a call",
  "30 days direct support",
];

const launchPartnerItems = [
  "Everything in Launch Ready",
  "Branding fully configured",
  "Payments connected & tested together",
  "Operator training session",
  "60 days priority support",
];

const trustItems = [
  "Milestone payments — 50% to start, 50% only when you log into your working platform",
  "Escrow accepted on request",
  "Everything demonstrated live on video before you send anything",
];

const paymentMethods = [
  { icon: BankIcon, label: "Bank Transfer" },
  { icon: CoinsIcon, label: "USDT TRC20" },
  { icon: CoinsIcon, label: "USDT BEP20" },
  { icon: BitcoinIcon, label: "BTC" },
  { icon: EthereumIcon, label: "ETH" },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-base text-txt">
          <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-secondary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg-dark">
      <div className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-[70px] lg:py-[110px]">
        <Reveal>
          <h2 className="text-center text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-txt md:text-[34px] lg:text-5xl">
            One-time price. No monthly platform fees. Ever.
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 items-center gap-6 lg:grid-cols-[32fr_36fr_32fr]">
          {/* Card 1 — Source Code */}
          <Reveal delay={0}>
            <div className="flex h-full flex-col rounded-[18px] border border-border-subtle bg-bg-dark-alt px-8 py-11">
              <h3 className="text-[22px] font-semibold leading-[1.3] text-txt md:text-[28px]">
                Source Code
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-[40px] font-bold leading-none text-txt">
                  $2,495
                </span>
                <span className="text-sm text-muted">one-time</span>
              </div>
              <CheckList items={sourceCodeItems} />
              <p className="mt-6 text-sm text-muted">
                For buyers with their own developer.
              </p>
              <a
                href={WA.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl border-2 border-secondary px-7 py-4 text-base font-semibold text-secondary transition-colors hover:bg-secondary/10 hover:text-secondary-hover"
              >
                Ask About Source Code →
              </a>
            </div>
          </Reveal>

          {/* Card 2 — Launch Ready (featured) */}
          <Reveal delay={150}>
            <div className="relative flex h-full flex-col rounded-[18px] border-2 border-primary bg-bg-dark-alt px-8 py-11 shadow-card-featured transition-shadow duration-300 hover:shadow-card-featured-hover lg:scale-105">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-xs font-bold tracking-wide text-white">
                MOST CHOSEN
              </span>
              <h3 className="text-[22px] font-semibold leading-[1.3] text-txt md:text-[28px]">
                Launch Ready
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-[40px] font-bold leading-none text-secondary">
                  $4,495
                </span>
                <span className="text-sm text-muted">one-time</span>
              </div>
              <CheckList items={launchReadyItems} />
              <p className="mt-6 text-sm italic text-muted">
                The $2,000 difference is a running platform instead of a ZIP
                file.
              </p>
              <a
                href={WA.launchReady}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-primary px-7 py-4 text-base font-semibold text-white shadow-btn-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-btn-primary-hover"
              >
                Claim a Launch Ready Slot →
              </a>
            </div>
          </Reveal>

          {/* Card 3 — Launch Partner */}
          <Reveal delay={300}>
            <div className="flex h-full flex-col rounded-[18px] border border-border-subtle bg-bg-dark-alt px-8 py-11">
              <h3 className="text-[22px] font-semibold leading-[1.3] text-txt md:text-[28px]">
                Launch Partner
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-[40px] font-bold leading-none text-txt">
                  $7,950
                </span>
                <span className="text-sm text-muted">
                  one-time · split payment available
                </span>
              </div>
              <CheckList items={launchPartnerItems} />
              <a
                href={WA.launchPartner}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl border-2 border-secondary px-7 py-4 text-base font-semibold text-secondary transition-colors hover:bg-secondary/10 hover:text-secondary-hover"
              >
                Ask About Launch Partner →
              </a>
            </div>
          </Reveal>
        </div>

        {/* Payment methods strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-[18px] gap-y-3">
          {paymentMethods.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2 text-sm text-muted">
              <Icon className="h-4 w-4" />
              {label}
            </span>
          ))}
        </div>

        {/* Trust block */}
        <Reveal>
          <div className="mx-auto mt-12 max-w-[820px] rounded-[14px] border border-[rgba(16,185,129,0.35)] bg-[rgba(16,185,129,0.08)] px-7 py-7 md:px-8">
            <div className="flex items-start gap-3">
              <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <h3 className="text-xl font-semibold leading-snug text-secondary">
                Paying someone you met online $4,000 should feel safe.
              </h3>
            </div>
            <ul className="mt-5 space-y-3">
              {trustItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-txt">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Scarcity line */}
        <p className="mt-10 text-center text-[15px] italic text-muted">
          I do every installation personally — limited slots each month. The
          price increases after the next licenses sell.
        </p>
      </div>
    </section>
  );
}
