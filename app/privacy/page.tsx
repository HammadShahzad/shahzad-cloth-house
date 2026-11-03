import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/chrome";
import { ADDRESS, BUSINESS_NAME, PHONE_DISPLAY } from "../site";

export const metadata: Metadata = {
  title: { absolute: `Privacy policy | ${BUSINESS_NAME}` },
  description: `How ${BUSINESS_NAME} uses cookies and visitor statistics on shahzadclothhouse.com.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const UPDATED = "3 November 2026";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader current="/privacy" />
      <main id="main" className="mx-auto max-w-[820px] px-5 md:px-10 py-16 md:py-24">
        <nav aria-label="Breadcrumb" className="text-[13px] text-ink/70">
          <ol className="flex items-center gap-2">
            <li><Link href="/" className="hover:text-navy underline-offset-4 hover:underline">Home</Link></li>
            <li aria-hidden className="text-gold-text">/</li>
            <li aria-current="page" className="font-semibold text-navy-deep">Privacy</li>
          </ol>
        </nav>
        <h1 className="display mt-8 text-[44px] md:text-[56px] leading-[1] text-navy-deep">Privacy policy</h1>
        <p className="mt-4 text-[14px] text-ink/60">Last updated {UPDATED}</p>

        <div className="mt-10 space-y-8 text-[16px] leading-[1.75] text-ink/85">
          <section>
            <h2 className="display text-[28px] text-navy-deep">Who we are</h2>
            <p className="mt-3">
              {BUSINESS_NAME} is a family-run cloth shop at {ADDRESS.street}, {ADDRESS.city}, {ADDRESS.country}. This website
              shows our fabric and lets you contact us. We do not sell anything on the site itself, and there are no
              accounts or forms.
            </p>
          </section>

          <section>
            <h2 className="display text-[28px] text-navy-deep">What we measure</h2>
            <p className="mt-3">
              To see which pages and fabrics people look at, the site uses these tools. They set cookies in your browser.
            </p>
            <ul className="mt-4 list-disc pl-6 space-y-3">
              <li>
                <strong>Google Analytics</strong> counts visits, the pages viewed, roughly where visitors come from (city or
                country) and which device they use. It also notes when someone taps our WhatsApp or call button.
              </li>
              <li>
                <strong>Microsoft Clarity</strong> records how the page is used (clicks, scrolling and mouse movement) so we
                can see where the site is hard to use. Anything typed into the page is hidden from these recordings.
              </li>
              <li>
                <strong>Google Tag Manager</strong> loads the tools above. It does not collect anything itself.
              </li>
            </ul>
            <p className="mt-4">
              If we advertise on Facebook, Instagram or Google, we may add their measurement tags (Meta Pixel or Google Ads)
              to see whether those ads bring visitors. This page will be updated if we do.
            </p>
            <p className="mt-4">
              We never see your name or number from these tools. You can block or delete cookies in your browser settings at
              any time, and the site will still work.
            </p>
          </section>

          <section>
            <h2 className="display text-[28px] text-navy-deep">When you message or call us</h2>
            <p className="mt-3">
              WhatsApp messages and calls go straight to our phone. We use your number and what you tell us only to answer
              you and send your order, and we do not share it with anyone except the courier who delivers your parcel.
            </p>
          </section>

          <section>
            <h2 className="display text-[28px] text-navy-deep">Questions</h2>
            <p className="mt-3">
              Call or WhatsApp us on {PHONE_DISPLAY}, or visit the shop.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
