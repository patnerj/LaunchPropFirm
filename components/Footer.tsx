import { WA_BASE, TRUST_LINKS } from "./links";
import { BankIcon, BitcoinIcon, CoinsIcon, EthereumIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-dark">
      <div className="mx-auto max-w-site px-5 pb-9 pt-12 md:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          {/* Col A */}
          <div className="md:w-[40%]">
            <p className="text-lg font-bold text-txt">
              Launch<span className="text-primary">Prop</span>Firm
            </p>
            <p className="mt-2 text-sm text-muted">
              White-label prop firm platform. One-time license. Full ownership.
            </p>
          </div>

          {/* Col B */}
          <div className="md:w-[30%]">
            <p className="text-sm text-muted">
              WhatsApp:{" "}
              <a
                href={WA_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-txt"
              >
                +92 315 8583905
              </a>
            </p>
          </div>

          {/* Col C */}
          <div className="flex items-center justify-center gap-4 md:w-[30%] md:justify-end">
            <span className="flex items-center gap-1.5 text-sm text-muted">
              <BankIcon className="h-4 w-4" /> Bank
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted">
              <CoinsIcon className="h-4 w-4" /> USDT
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted">
              <BitcoinIcon className="h-4 w-4" /> BTC
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted">
              <EthereumIcon className="h-4 w-4" /> ETH
            </span>
          </div>
        </div>

        {/* Trust & legal links */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-border-subtle pt-6">
          {TRUST_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-txt"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Disclosure */}
        <div className="mt-6 border-t border-border-subtle pt-5">
          <p className="text-center text-xs leading-relaxed text-footnote">
            Trade execution on this platform is simulated against live market
            pricing — the standard evaluation-industry model. Operating a
            funded-trader business is subject to the laws of your jurisdiction;
            compliance is the operator&apos;s responsibility. © 2026
            LaunchPropFirm.
          </p>
        </div>
      </div>
    </footer>
  );
}
