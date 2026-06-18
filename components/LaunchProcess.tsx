import { ShieldIcon } from "./icons";
import Reveal from "./Reveal";

const steps = [
  {
    n: "1",
    title: "We talk",
    body: "A 15-minute WhatsApp or video call. You pick a tier, I answer everything.",
  },
  {
    n: "2",
    title: "I install",
    body: "Installed and configured on your hosting — we run the setup wizard together.",
  },
  {
    n: "3",
    title: "You launch",
    body: "Branding live, payments connected, your first challenge on sale.",
  },
];

export default function LaunchProcess() {
  return (
    <section className="border-t border-border-light bg-white">
      <div className="mx-auto max-w-site px-5 py-14 md:px-8 md:py-[70px] lg:py-[90px]">
        <Reveal>
          <h2 className="text-center text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-on-light md:text-[34px] lg:text-5xl">
            From payment to live platform in three steps.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 150}>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-[28px] font-bold text-white">
                  {step.n}
                </div>
                <h3 className="mt-5 text-[22px] font-semibold leading-[1.3] text-on-light md:text-[28px]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[320px] text-base leading-[1.65] text-on-light-muted md:text-lg">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center gap-2.5">
          <ShieldIcon className="h-[22px] w-[22px] text-secondary" />
          <p className="text-[17px] font-semibold text-on-light">
            Working installation or full refund.
          </p>
        </div>
      </div>
    </section>
  );
}
