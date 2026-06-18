"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";

const screens = [
  {
    src: "/images/dashboard-overview.jpg",
    alt: "Revenue dashboard screenshot",
    caption: "Revenue dashboard",
  },
  {
    src: "/images/trading-terminal.jpg",
    alt: "Trading terminal screenshot",
    caption: "Trading terminal",
  },
  {
    src: "/images/certificate-preview.jpg",
    alt: "Trader certificate screenshot",
    caption: "Trader certificate",
  },
];

export default function ProofStrip() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

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
              <button
                onClick={() => setLightbox({ src: screen.src, alt: screen.alt })}
                className="group block w-full cursor-zoom-in text-left"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border-subtle transition-all duration-300 group-hover:scale-[1.03] group-hover:border-primary">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-3 text-center text-sm text-muted">
                  {screen.caption}
                </p>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Click any screen to preview — or{" "}
          <a href="https://demo-trader.example.com" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2">
            try the live demo
          </a>
          .
        </p>
      </div>

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
