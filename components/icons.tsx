type IconProps = { className?: string };

export function WhatsAppIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function ShieldIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8Z" />
    </svg>
  );
}

export function PlayIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5v14l11-7L8 5Z" />
    </svg>
  );
}

export function BankIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2 2 8v2h20V8L12 2ZM4 12v6h3v-6H4Zm6.5 0v6h3v-6h-3ZM17 12v6h3v-6h-3ZM2 20v2h20v-2H2Z" />
    </svg>
  );
}

export function CoinsIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9 4C5.13 4 2 5.79 2 8s3.13 4 7 4 7-1.79 7-4-3.13-4-7-4Zm-7 7.5V14c0 2.21 3.13 4 7 4 .34 0 .67-.02 1-.05A6.5 6.5 0 0 1 9.5 14c0-.34.03-.68.08-1.01A12.5 12.5 0 0 1 9 13c-2.92 0-5.5-.94-7-2.5Zm15-1A5.5 5.5 0 1 0 22.5 16 5.51 5.51 0 0 0 17 10.5Zm.55 8.45h-1.1v-.83a2.3 2.3 0 0 1-1.62-1.27l.95-.55a1.4 1.4 0 0 0 1.27.82c.5 0 .9-.24.9-.62s-.33-.55-1.05-.78c-.86-.27-1.84-.62-1.84-1.7a1.74 1.74 0 0 1 1.39-1.65v-.82h1.1v.84a2.07 2.07 0 0 1 1.42 1.13l-.92.53a1.18 1.18 0 0 0-1.1-.69c-.46 0-.79.21-.79.56s.37.52 1.1.76c.9.3 1.8.68 1.8 1.74a1.79 1.79 0 0 1-1.51 1.7Z" />
    </svg>
  );
}

export function BitcoinIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546ZM17.3 10.29c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.165-1.06-.25l.53-2.12-1.32-.33-.54 2.16c-.285-.067-.57-.132-.84-.2l-1.815-.45-.35 1.4s.974.225.954.24c.534.135.63.487.615.765l-.615 2.453c.038.01.084.022.135.045l-.135-.034-.86 3.435c-.066.165-.232.405-.6.315.013.018-.96-.24-.96-.24l-.654 1.5 1.71.428c.317.08.63.165.937.245l-.547 2.19 1.32.33.54-2.16c.36.097.71.187 1.05.273l-.538 2.143 1.32.33.547-2.182c2.25.427 3.945.255 4.658-1.785.574-1.642-.03-2.59-1.218-3.21.866-.198 1.518-.768 1.69-1.946Zm-3.01 4.247c-.408 1.643-3.165.755-4.057.532l.726-2.91c.892.224 3.76.665 3.33 2.378Zm.41-4.27c-.373 1.494-2.67.735-3.413.55l.66-2.64c.742.185 3.14.53 2.752 2.09Z" />
    </svg>
  );
}

export function EthereumIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.944 17.97 4.58 13.62l7.364 10.38 7.37-10.38-7.372 4.35h.002ZM12.056 0 4.69 12.223l7.365 4.354 7.365-4.35L12.056 0Z" />
    </svg>
  );
}

export function PlusIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function MinusIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M5 12h14" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function BanIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="m5.6 5.6 12.8 12.8" />
    </svg>
  );
}

export function LayersIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  );
}

export function ClipboardIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="8" y="3" width="8" height="4" rx="1" />
      <path d="M9 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3" />
      <path d="m9 13 2 2 4-4" />
    </svg>
  );
}

export function LockIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function RefreshIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

export function ChatIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
    </svg>
  );
}
