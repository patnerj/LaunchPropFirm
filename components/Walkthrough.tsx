"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";

const rows = [
  {
    image: "/images/checkout-crypto.jpg",
    alt: "Crypto and Stripe checkout screen",
    kicker: "Sell",
    title: "Challenges that sell themselves.",
    body: "Stripe and multi-network crypto checkout (TRC20 · BEP20 · ERC20 · BTC · ETH) — configured from your own dashboard in minutes.",
    reverse: false,
  },
  {
    image: "/images/trading-terminal.jpg",
    alt: "TradingView-powered trading terminal",
    kicker: "Evaluate",
    title: "Real markets. Your rules.",
    body: "Live MT5 pricing in a TradingView-powered terminal — forex, gold, crypto, plus NAS100, US30, GER40, SPX500 and UK100.",
    reverse: true,
  },
  {
    image: "/images/payout-center.jpg",
    alt: "Payout approval center",
    kicker: "Fund & Pay",
    title: "From passed challenge to payout request — automatically.",
    body: "Automatic evaluation, funded-account promotion, and a payout approval workflow you control.",
    reverse: false,
  },
  {
    image: "/images/analytics.jpg",
    alt: "Analytics dashboard",
    kicker: "Grow",
    title: "Every funded trader becomes your marketing.",
    body: "Verifiable certificates, a live leaderboard, scheduled promo banners and clean analytics.",
    reverse: true,
  },
  {
    image: "/images/setup-wizard.jpg",
    alt: "Six-step setup wizard",
    kicker: "Run it alone",
    title: "If you can run an Instagram page, you can run this.",
    body: "A six-step launch wizard, plain-English health checks, and total branding control — no developer needed.",
    reverse: false,
  },
];

export default function Walkthrough() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="bg-bg-dark">
      <div className="mx-auto max-w-site px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-[70px] lg:pt-[110px]">
        <Reveal>
          <h2 className="text-center text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-txt md:text-[34px] lg:text-5xl">
            Everything a funded-trader business needs. Built in.
          </h2>
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
                  <button
                    onClick={() => setLightbox({ src: row.image, alt: row.alt })}
                    className="block w-full cursor-zoom-in text-left"
                  >
                    <div className="overflow-hidden rounded-[14px] border border-border-subtle shadow-screenshot transition-opacity hover:opacity-90">
                      <Image
                        src={row.image}
                        alt={row.alt}
                        width={1080}
                        height={680}
                        className="h-auto w-full"
                      />
                    </div>
                  </button>
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

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
