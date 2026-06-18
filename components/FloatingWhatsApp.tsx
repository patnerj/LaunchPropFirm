import { WA } from "./links";
import { WhatsAppIcon } from "./icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WA.floating}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="lpf-whatsapp-fab fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-white shadow-whatsapp transition-transform duration-300 hover:scale-[1.08]"
    >
      <WhatsAppIcon className="h-[26px] w-[26px]" />
    </a>
  );
}
