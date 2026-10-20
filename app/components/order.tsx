import Image from "next/image";
import { PHOTOS, type PhotoKey } from "../photos";
import { SectionHead, WhatsAppButton } from "./ui";

const STEPS = [
  {
    t: "Send us what you need",
    d: "On WhatsApp, tell us the fabric, colour and length, or send a photo of what you have in mind.",
  },
  {
    t: "We confirm price and delivery",
    d: "We check the shelves, send you photos, and agree the price and delivery with you before anything is cut.",
  },
  {
    t: "Cut, packed and delivered",
    d: "We cut your fabric to length and send it anywhere in Pakistan, or keep it ready for you to collect in Sialkot.",
  },
];

/** How ordering by WhatsApp works. Used on the home page, every category page and /order-online. */
export function OrderSteps({
  topic = "",
  id = "order-title",
  title,
  photo = "packing-urdu",
}: {
  topic?: string;
  id?: string;
  title?: React.ReactNode;
  photo?: PhotoKey;
}) {
  const p = PHOTOS[photo];
  return (
    <section aria-labelledby={id} className="bg-sand py-20 md:py-24">
      <div className="mx-auto max-w-[1240px] px-5 md:px-10 grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <SectionHead
            eyebrow="Order on WhatsApp"
            id={id}
            title={title ?? <>Delivered <span className="display-italic text-gold-text">across Pakistan</span></>}
            intro="You don't have to be in Sialkot to shop with us. Three steps, all on WhatsApp."
          />
          <ol className="mt-10 space-y-7">
            {STEPS.map((s, i) => (
              <li key={s.t} className="grid grid-cols-[52px_1fr] gap-4">
                <span className="display h-[52px] w-[52px] rounded-full border border-gold text-navy grid place-items-center text-[24px]" aria-hidden>
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-[18px] font-bold text-navy-deep">{s.t}</h3>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-ink/75">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <WhatsAppButton
            className="mt-10"
            topic={topic ? `ordering ${topic} for delivery.` : "ordering fabric for delivery."}
            label="Start an order on WhatsApp"
          />
        </div>
        <figure className="lg:col-span-5 mx-auto w-full max-w-[420px]">
          <div className="frame">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-navy/10">
              <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 420px, 90vw" className="object-cover" />
            </div>
          </div>
          <figcaption className="mt-6 text-[13px] text-ink/70">{p.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
