import Image from "next/image";
import { DEMO } from "./links";
import Reveal from "./Reveal";

export default function CertificateSpotlight() {
  return (
    <section className="relative overflow-hidden bg-bg-dark-alt md:min-h-[80vh]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(124,110,245,0.22), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-site flex-col items-center px-5 py-14 text-center md:px-8 md:py-[70px] lg:py-[110px]">
        <Reveal>
          <h2 className="max-w-[800px] text-[28px] font-bold leading-[1.15] tracking-[-0.5px] text-txt md:text-[34px] lg:text-5xl">
            This is what your traders will post the day you fund them.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-5 text-base leading-[1.65] text-muted md:text-lg">
            Publicly verifiable, beautifully branded — with your firm&apos;s
            name on it, not mine.
          </p>
        </Reveal>

        <Reveal variant="zoom" delay={200} className="mt-12 w-full max-w-[720px]">
          <div className="overflow-hidden rounded-2xl shadow-certificate">
            <Image
              src="/images/certificate-preview.jpg"
              alt="Branded trader funding certificate preview"
              width={1440}
              height={1020}
              className="h-auto w-full"
            />
          </div>
        </Reveal>

        <a
          href={DEMO.certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-xl border-2 border-secondary px-7 py-4 text-base font-semibold text-secondary transition-colors hover:bg-secondary/10 hover:text-secondary-hover md:px-9 md:py-[18px]"
        >
          See a Live Certificate →
        </a>
      </div>
    </section>
  );
}
