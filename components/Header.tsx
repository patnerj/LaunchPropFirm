import { WA } from "./links";
import { WhatsAppIcon } from "./icons";

export default function Header() {
  return (
    <header className="lpf-blur fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-[rgba(11,18,32,0.85)]">
      <div className="mx-auto flex min-h-[72px] max-w-site items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-txt">
          Launch<span className="text-primary">Prop</span>Firm
        </a>

        {/* Nav + WhatsApp pill */}
        <div className="flex items-center gap-7">
          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#demo"
              className="text-[15px] font-medium text-muted transition-colors hover:text-txt"
            >
              Live Demo
            </a>
            <a
              href="#pricing"
              className="text-[15px] font-medium text-muted transition-colors hover:text-txt"
            >
              Pricing
            </a>
          </nav>
          <a
            href={WA.header}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-secondary px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-secondary/10 hover:text-secondary-hover"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
