import Reveal from "./Reveal";
import { ShieldCheckIcon, BanIcon, LayersIcon, ClipboardIcon } from "./icons";

const cards = [
  {
    Icon: ShieldCheckIcon,
    title: "KYC workflow",
    body: "Review, approve or reject identity documents with reasons. Payouts are gated on KYC — so you don’t pay out to an unverified trader.",
  },
  {
    Icon: BanIcon,
    title: "Suspend & ban controls",
    body: "Freeze or ban an account the moment a trader breaks the rules — trading and payouts stop instantly. Your firm, your enforcement.",
  },
  {
    Icon: LayersIcon,
    title: "Bulk operations",
    body: "Approve or reject payouts and KYC in batches with confirmation and an audit entry. Built for when you have 50+ traders, not 5.",
  },
  {
    Icon: ClipboardIcon,
    title: "Admin notes & audit trail",
    body: "Private notes on any trader plus a logged history of admin actions — so any dispute is settled with a record, not a guess.",
  },
];

export default function ComplianceSafety() {
  return (
    <section className="bg-bg-dark">
      <div className="mx-auto max-w-site px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-[70px]">
        <Reveal>
          <p className="text-center text-[13px] font-semibold uppercase tracking-[3px] text-primary">
            Compliance &amp; safety, built in
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-txt md:text-[34px] lg:text-5xl">
            Fraud and disputes are the real job. You’re equipped for both.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-[1.65] text-muted md:text-lg">
            Cheating traders, chargebacks and identity fraud are what break prop
            firms — not charts. These controls ship in the box.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {cards.map((c) => (
            <Reveal key={c.title}>
              <div className="h-full rounded-[14px] border border-border-subtle bg-bg-dark-alt p-6 md:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-primary/10 text-primary">
                  <c.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-txt">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-muted">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
