export function SectionHead({
  eyebrow,
  id,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  id: string;
  title: React.ReactNode;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-[680px]">
      <p className={`eyebrow ${dark ? "text-gold" : "text-gold-dark"}`}>{eyebrow}</p>
      <h2 id={id} className={`display mt-4 text-[42px] md:text-[60px] ${dark ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-[16px] md:text-[17px] leading-[1.75] ${dark ? "text-cream/70" : "text-ink/70"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 h-8 w-8 shrink-0 rounded-full border border-gold/40 text-gold grid place-items-center">{icon}</span>
      <div className="flex-1">
        <div className="text-[11px] tracking-[0.24em] uppercase text-gold/90 mb-1">{label}</div>
        <div className="leading-[1.7] text-cream/90">{children}</div>
      </div>
    </div>
  );
}

export function SocialPill({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`lift inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[14px] font-semibold ${className}`}
    >
      {children}
    </a>
  );
}

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="20" r="15.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <text x="20" y="26" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontStyle="italic" fontSize="18" fill="currentColor">
        S
      </text>
    </svg>
  );
}

export function Arrow() {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" aria-hidden className="transition-transform group-hover:translate-x-1">
      <path d="M0 5H17M17 5L13 1M17 5L13 9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function PhoneGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.8 2z" />
    </svg>
  );
}

export function PinGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ClockGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function StarGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8l-6.4 3.9 1.7-7.3-5.6-4.9 7.4-.6L12 2z" />
    </svg>
  );
}

export function InstagramGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.25-1.5 1.55-1.5H17V4.4a22 22 0 0 0-2.4-.13c-2.4 0-4 1.46-4 4.13v2.5H8v3h2.6V21h2.9z" />
    </svg>
  );
}

export function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.5 3.5A11.7 11.7 0 0 0 12 0C5.4 0 0 5.4 0 12a12 12 0 0 0 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12a11.7 11.7 0 0 0-3.5-8.5zM12 21.8a9.7 9.7 0 0 1-5-1.4l-.36-.21-3.7.97.99-3.6-.24-.37A9.7 9.7 0 1 1 12 21.8zm5.6-7.3c-.3-.16-1.8-.9-2.1-1s-.5-.16-.7.15-.8 1-1 1.2-.4.2-.7 0a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.18-.3 0-.46.13-.6.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5s.05-.37 0-.52c-.07-.14-.7-1.7-1-2.3-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.55.07-.84.37-.3.3-1.1 1.1-1.1 2.7s1.13 3.13 1.3 3.35a12 12 0 0 0 4.7 4.1c.66.28 1.18.45 1.58.58.66.2 1.27.18 1.75.1.53-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.27-.2-.57-.34z" />
    </svg>
  );
}

export function TikTokGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.6 6.4a4.6 4.6 0 0 1-3.5-1.6V14a4.5 4.5 0 1 1-4.5-4.5c.2 0 .4 0 .6.04v2.36a2.13 2.13 0 1 0 1.5 2.04V2h2.4a4.6 4.6 0 0 0 3.5 4.4v2z" />
    </svg>
  );
}

export function GoogleLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 272 92" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Google">
      <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
      <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
      <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
      <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91S16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/>
    </svg>
  );
}
