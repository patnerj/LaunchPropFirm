"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "./icons";

const faqs = [
  {
    q: "Is trade execution real or simulated?",
    a: "Simulated — against live MT5 market pricing. This is the standard architecture of the evaluation industry: traders are assessed on real markets while the firm carries no brokerage risk. The platform is transparent with traders about it, and so am I.",
  },
  {
    q: "Is running a prop firm legal?",
    a: "Requirements vary by country and are evolving. The platform gives you the operational tools; registering your business and meeting your jurisdiction's rules is your responsibility as the operator — treat it like the real business it is, and budget for a legal review.",
  },
  {
    q: "What do I need to run it?",
    a: "Ordinary hosting, a domain, and a Stripe account and/or crypto wallets. The Launch Ready package handles all setup for you.",
  },
  {
    q: "What's the technology?",
    a: "A modern self-hosted stack — no proprietary servers, no vendor lock-in, full source included. Complete technical documentation ships in the buyer pack.",
  },
  {
    q: "What happens after the support period?",
    a: "Extended support packages are available — and the platform's built-in health panel diagnoses most issues in plain English before you ever need to ask.",
  },
  {
    q: "Why is this so much cheaper than SaaS prop platforms?",
    a: "Because I'm selling licenses, not renting access. The price rises as installations and case studies grow.",
  },
  {
    q: "What happens when a funded trader cheats or breaks the rules?",
    a: "You freeze or ban the account from your admin — trading and payouts stop instantly. Suspension, account status controls and a full audit trail are built in, so enforcement is one click, not a code change.",
  },
  {
    q: "How do I handle chargebacks and payment fraud?",
    a: "Payments run through Stripe and major crypto networks, and the platform keeps an order and admin-action record for every transaction. Combined with KYC gating on payouts, you have the paper trail to fight disputes and the controls to stop bad actors before they’re paid.",
  },
  {
    q: "Is there KYC / identity verification?",
    a: "Yes. There’s a built-in KYC workflow — review, approve or reject documents with reasons — and payouts are gated on KYC approval so you never pay an unverified trader.",
  },
  {
    q: "How do I resolve a trader dispute?",
    a: "The Trader 360 view puts a trader’s account, challenges, payments, payouts, KYC, private admin notes and a full activity timeline on one page — so you settle disputes with a record, in minutes.",
  },
  {
    q: "What support do I get after launch?",
    a: "Direct support during your package window, a built-in Support Center and contact flow, optional live chat, and a plain-English health panel that diagnoses most issues before you need to ask. Extended support is available.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes — working installation or your money back. Milestone payments and escrow are accepted, and there’s a published refund policy. Paying someone you met online should feel safe.",
  },
  {
    q: "Can I see everything before paying?",
    a: "Yes — the trader demo is open now, admin access takes two minutes on WhatsApp, and on a call I'll wipe and regenerate the demo data live so you know nothing is staged.",
  },
];

export default function FAQ() {
  // First item open by default (per spec)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-bg-light">
      <div className="mx-auto max-w-[820px] px-5 py-14 md:py-[70px] lg:py-[100px]">
        <div className="text-center">
          <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-on-light md:text-[34px] lg:text-5xl">
            Read this before you buy.
          </h2>
          <p className="mt-4 text-base leading-[1.65] text-on-light-muted md:text-lg">
            The questions smart buyers ask — answered without spin.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-xl border border-border-light bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-on-light">
                    {faq.q}
                  </span>
                  <span className="shrink-0 text-primary">
                    {open ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-base leading-[1.65] text-on-light-muted">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
