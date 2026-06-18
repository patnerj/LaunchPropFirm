import Image from "next/image";
import { DEMO } from "./links";
import Reveal from "./Reveal";

const screens = [
  {
    src: "/images/dashboard-overview.jpg",
    alt: "Revenue dashboard screenshot",
    caption: "Revenue dashboard",
    href: DEMO.trader,
  },
  {
    src: "/images/trading-terminal.jpg",
    alt: "Trading terminal screenshot",
    caption: "Trading terminal",
    href: DEMO.trader,
  },
  {
    src: "/images/certificate-preview.jpg",
    alt: "Trader certificate screenshot",
    caption: "Trader certificate",
    href: DEMO.certificate,
  },
];

export default function ProofStrip() {
  return (
    <section className="border-y border-border-subtle bg-bg-dark-alt">
      <div className="mx-auto max-w-site px-5 py-16 md:px-8">
        <Reveal>
          <p className="text-center text-[13px] font-semibold uppercase tracking-[3px] text-primary">
            Real screens from the live demo
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {screens.map((screen, i) => (
            <Reveal key={screen.caption} delay={i * 150}>
              <a
                href={screen.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group block cursor-zoom-in"
              >
                <div className="overflow-hidden rounded-xl border border-border-subtle transition-all duration-300 group-hover:scale-[1.03] group-hover:border-primary">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={760}
                    height={480}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-3 text-center text-sm text-muted">
                  {screen.caption}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Click any screen — you&apos;ll be inside it in ten seconds.
        </p>
      </div>
    </section>
  );
}
