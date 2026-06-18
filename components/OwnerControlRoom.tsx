import Image from "next/image";
import Reveal from "./Reveal";

// Owner-facing operations layer — the moat. Screenshots are referenced by path;
// drop the real captures into /public/images with these names when ready.
const rows = [
  {
    image: "/images/operations-dashboard.jpg",
    alt: "Operations dashboard with live firm metrics",
    kicker: "Command center",
    title: "Run a firm, not a demo.",
    body: "An operations dashboard built for owners: funded accounts, active challenges, pending payouts and account health on one screen — so you always know where your business stands.",
    reverse: false,
  },
  {
    image: "/images/risk-dashboard.jpg",
    alt: "Risk dashboard showing funded capital and exposure",
    kicker: "See the risk",
    title: "Know your exposure before it costs you.",
    body: "Total funded capital, pending and approved payout value, and accounts near breach — surfaced live. The numbers a prop-firm owner actually loses sleep over, in one place.",
    reverse: true,
  },
  {
    image: "/images/emergency-controls.jpg",
    alt: "Emergency controls with global pause switches",
    kicker: "The kill switch",
    title: "When something goes wrong at 2am, you’re in control.",
    body: "Global switches pause registrations, challenge purchases, payouts or trading platform-wide — instantly, logged, reversible. The brake pedal every real operator needs and most clones don’t have.",
    reverse: false,
  },
  {
    image: "/images/trader-360.jpg",
    alt: "Trader 360 view with timeline and admin notes",
    kicker: "Support cockpit",
    title: "Every trader’s full story on one page.",
    body: "Trader 360 pulls account, challenges, payments, payouts, KYC, private admin notes and a complete activity timeline together — so a dispute that used to take an hour takes a minute.",
    reverse: true,
  },
];

export default function OwnerControlRoom() {
  return (
    <section className="bg-bg-dark-alt">
      <div className="mx-auto max-w-site px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-[70px] lg:pt-[110px]">
        <Reveal>
          <p className="text-center text-[13px] font-semibold uppercase tracking-[3px] text-primary">
            The part most clones don’t have
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-txt md:text-[34px] lg:text-5xl">
            This is what running the firm actually looks like.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-[1.65] text-muted md:text-lg">
            Anyone can sell you a trading terminal. The hard part is operating the
            business behind it — risk, payouts, fraud, disputes, compliance. That’s
            built in, and it’s yours.
          </p>
        </Reveal>

        <div className="mt-8">
          {rows.map((row) => (
            <div
              key={row.kicker}
              className={`flex flex-col gap-8 py-8 md:items-center md:gap-16 md:py-12 ${
                row.reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="w-full md:w-[52%]">
                <Reveal>
                  <div className="overflow-hidden rounded-[14px] border border-border-subtle shadow-screenshot">
                    <Image
                      src={row.image}
                      alt={row.alt}
                      width={1080}
                      height={680}
                      className="h-auto w-full"
                    />
                  </div>
                </Reveal>
              </div>
              <div className="w-full text-center md:w-[48%] md:text-left">
                <Reveal delay={150}>
                  <p className="text-[13px] font-semibold uppercase tracking-[3px] text-primary">
                    {row.kicker}
                  </p>
                  <h3 className="mt-3 text-[22px] font-semibold leading-[1.3] text-txt md:text-[28px]">
                    {row.title}
                  </h3>
                  <p className="mt-4 text-base leading-[1.65] text-muted md:text-lg">
                    {row.body}
                  </p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
