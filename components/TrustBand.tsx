import Reveal from "./Reveal";
import { ShieldCheckIcon, LockIcon, RefreshIcon } from "./icons";

const items = [
  {
    Icon: ShieldCheckIcon,
    title: "Working installation or full refund",
    body: "If your platform isn’t installed and running as described, you get your money back. The risk is mine, not yours.",
  },
  {
    Icon: LockIcon,
    title: "Escrow & milestone payments accepted",
    body: "Pay 50% to start and 50% only once you’re logged into your working platform — or run the whole thing through escrow. Paying someone you met online should feel safe.",
  },
  {
    Icon: RefreshIcon,
    title: "Nothing here is staged",
    body: "On a call I’ll wipe the demo data and regenerate it live in front of you. Every screen on this page is the real product.",
  },
];

export default function TrustBand() {
  return (
    <section className="bg-bg-dark-alt">
      <div className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-16">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-center text-[24px] font-bold leading-[1.2] tracking-[-0.5px] text-txt md:text-[30px]">
            Buying from a stranger online should feel safe. Here’s how it’s made safe.
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {items.map((it) => (
            <Reveal key={it.title}>
              <div className="h-full rounded-[14px] border border-primary/25 bg-primary/[0.04] p-6 md:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-primary/10 text-primary">
                  <it.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-txt">{it.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-muted">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
