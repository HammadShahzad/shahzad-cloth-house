"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Google Tag Manager. GA4 and Microsoft Clarity (and any ad pixels later) are set up
 * inside the GTM container, so they can change without a code deploy.
 */
export function TagManager({ id }: { id: string }) {
  if (!id) return null;
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${id}');`}
    </Script>
  );
}

/** Fallback for visitors with JavaScript off. Goes right after <body>. */
export function TagManagerNoScript({ id }: { id: string }) {
  if (!id) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${id}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  );
}

/**
 * Every order starts with a WhatsApp message or a phone call, so a tap on either counts as a lead.
 * One listener on the page catches every WhatsApp and call link, wherever it sits.
 * Events go to the data layer only; GTM passes them on to GA4 (and ad pixels, if added).
 */
export function LeadTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      let method = "";
      if (href.startsWith("https://wa.me/")) method = "whatsapp";
      else if (href.startsWith("tel:")) method = "phone";
      else if (href.startsWith("https://maps.app.goo.gl/")) {
        push({ event: "get_directions" });
        return;
      }
      if (!method) return;
      push({
        event: "generate_lead",
        lead_method: method,
        link_text: (link.textContent ?? "").trim().slice(0, 60),
      });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}

function push(data: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}
