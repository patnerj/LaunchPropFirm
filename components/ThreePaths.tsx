import Reveal from "./Reveal";

export default function ThreePaths() {
  return (
    <section className="bg-bg-light">
      <div className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-[70px] lg:py-[100px]">
        <Reveal>
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-on-light md:text-[34px] lg:text-5xl">
              There are three ways into the prop firm industry. Two of them are
              expensive.
            </h2>
            <p className="mt-5 text-base leading-[1.65] text-on-light-muted md:text-lg">
              Custom development: $30,000+ and most of a year. Renting a
              prop-firm SaaS: more every year than this costs once. Or the
              third way: buy it once, brand it, own it.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Reveal delay={0}>
            <div className="h-full rounded-2xl border border-border-light bg-white p-7 shadow-card-light md:p-9">
              <h3 className="text-[22px] font-semibold leading-[1.3] text-on-light md:text-[28px]">
                Build It
              </h3>
              <p className="mt-3 text-base leading-[1.65] text-on-light-muted md:text-lg">
                $30,000+ · 6–12 months · developer dependency forever.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="h-full rounded-2xl border border-border-light bg-white p-7 shadow-card-light md:p-9">
              <h3 className="text-[22px] font-semibold leading-[1.3] text-on-light md:text-[28px]">
                Rent It
              </h3>
              <p className="mt-3 text-base leading-[1.65] text-on-light-muted md:text-lg">
                $1,000+ every month · their servers · their rules · their logo
                limits.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="relative h-full rounded-2xl border-2 border-secondary bg-white p-7 shadow-card-own md:p-9">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white">
                THE THIRD WAY
              </span>
              <h3 className="text-[22px] font-semibold leading-[1.3] text-on-light md:text-[28px]">
                Own It
              </h3>
              <p className="mt-3 text-base leading-[1.65] text-on-light-muted md:text-lg">
                One-time price · your hosting · your brand · your data.
                Forever.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#demo"
            className="text-base font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            See it running →
          </a>
        </div>
      </div>
    </section>
  );
}
