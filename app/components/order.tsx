import { PHONE_DISPLAY, whatsappUrl } from "../site";
import { SectionHead, WhatsAppGlyph } from "./ui";

const STEPS = [
  {
    t: "Send us what you need",
    d: "On WhatsApp, tell us the fabric, colour and length, or send a photo of what you have in mind.",
  },
  {
    t: "We confirm on WhatsApp",
    d: "We check the shelves and agree the price and delivery with you before anything is cut.",
  },
  {
    t: "Delivered to your door",
    d: "We cut your fabric to length and send it anywhere in Pakistan, or keep it ready for you to collect.",
  },
];

/** How ordering by WhatsApp works. Used on the home page, every category page and /order-online. */
export function OrderSteps({
  topic = "",
  id = "order-title",
  title,
}: {
  topic?: string;
  id?: string;
  title?: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="bg-sand py-20 md:py-24">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHead
            eyebrow="Order on WhatsApp"
            id={id}
            title={title ?? <>Delivered <span className="display-italic text-navy">across Pakistan</span></>}
            intro="You don't have to be in Sialkot to shop with us. Order on WhatsApp and we will send your fabric to your door."
          />
          <a
            href={whatsappUrl(topic ? `ordering ${topic} for delivery.` : "ordering fabric for delivery.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 bg-[#25D366] text-[#05290F] px-6 py-3.5 rounded-md text-[15px] font-semibold hover:brightness-105 transition"
          >
            <WhatsAppGlyph className="h-5 w-5" />
            Order on WhatsApp · {PHONE_DISPLAY}
          </a>
        </div>
        <ol className="mt-12 grid gap-10 md:gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.t} className="border-t border-navy/20 pt-6">
              <div className="text-[13px] font-semibold tracking-[0.2em] text-gold-dark">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="display mt-4 text-[24px] text-ink">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-[1.7] text-ink/70">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
