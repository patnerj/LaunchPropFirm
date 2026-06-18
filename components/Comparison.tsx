import Reveal from "./Reveal";
import { CheckIcon } from "./icons";

const rows: { label: string; build: string; rent: string; own: string }[] = [
  { label: "Upfront cost", build: "$30,000+", rent: "Low setup", own: "One-time license" },
  { label: "Ongoing cost", build: "Dev retainer", rent: "$1,000+/mo forever", own: "Just hosting" },
  { label: "12-month cost", build: "$30k + months", rent: "$12,000+ / year", own: "Paid once" },
  { label: "Source code", build: "Yours", rent: "Never", own: "Yours, full" },
  { label: "Your branding", build: "Yes", rent: "Limited / their rules", own: "Total control" },
  { label: "Your data", build: "Yours", rent: "On their servers", own: "On your hosting" },
  { label: "Time to launch", build: "6–12 months", rent: "Fast", own: "Days" },
  { label: "Operations & risk tools", build: "Build it yourself", rent: "Their feature set", own: "Built in" },
];

function Cell({ value, highlight }: { value: string; highlight?: boolean }) {
  return (
    <td className={`px-4 py-3 text-sm md:px-5 ${highlight ? "text-txt font-medium" : "text-muted"}`}>
      {value}
    </td>
  );
}

export default function Comparison() {
  return (
    <section className="bg-bg-dark">
      <div className="mx-auto max-w-site px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-[70px]">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-txt md:text-[34px] lg:text-5xl">
            Build it, rent it, or own it.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-[1.65] text-muted md:text-lg">
            Two of the three paths cost more every year than this costs once.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 overflow-x-auto rounded-[14px] border border-border-subtle">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-border-subtle bg-bg-dark-alt">
                  <th className="px-4 py-4 text-left text-sm font-semibold text-muted md:px-5"></th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-txt md:px-5">Build it</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-txt md:px-5">Rent a SaaS</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold text-primary md:px-5">
                    Own it <span className="ml-1 rounded-full bg-primary/15 px-2 py-0.5 text-[11px]">This</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i % 2 ? "bg-bg-dark-alt/40" : ""}>
                    <td className="px-4 py-3 text-sm font-medium text-txt md:px-5">{r.label}</td>
                    <Cell value={r.build} />
                    <Cell value={r.rent} />
                    <Cell value={r.own} highlight />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-muted">
            <CheckIcon className="h-4 w-4 text-primary" />
            One-time price. No monthly platform fees. Ever.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
