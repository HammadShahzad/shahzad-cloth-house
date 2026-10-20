import Image from "next/image";
import { PHOTOS, type PhotoKey } from "../photos";

// Where each photo sits in a group of four: one large, one wide, two small.
const SLOTS = [
  ["col-span-2 row-span-2", "col-span-2", "", ""],
  // every second group is mirrored on desktop so the page doesn't repeat itself
  [
    "col-span-2 row-span-2 md:col-start-3 md:row-start-1",
    "col-span-2 md:col-start-1 md:row-start-1",
    "md:col-start-1 md:row-start-2",
    "md:col-start-2 md:row-start-2",
  ],
];
const SIZES = [
  "(min-width: 1240px) 580px, (min-width: 768px) 47vw, 92vw",
  "(min-width: 1240px) 580px, (min-width: 768px) 47vw, 92vw",
  "(min-width: 1240px) 290px, (min-width: 768px) 24vw, 46vw",
  "(min-width: 1240px) 290px, (min-width: 768px) 24vw, 46vw",
];

/** Real shop photos in an editorial mosaic, with their captions. */
export function PhotoGrid({ photos }: { photos: PhotoKey[] }) {
  const groups: PhotoKey[][] = [];
  for (let i = 0; i < photos.length; i += 4) groups.push(photos.slice(i, i + 4));
  return (
    <div className="mt-12 space-y-3 md:space-y-4">
      {groups.map((group, g) => (
        <ul key={g} className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] lg:auto-rows-[230px] gap-3 md:gap-4">
          {group.map((key, i) => {
            const p = PHOTOS[key];
            return (
              <li key={key} className={SLOTS[g % 2][i]}>
                <figure className="group zoom relative h-full overflow-hidden rounded-md bg-navy/10">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes={SIZES[i]}
                    className="object-cover"
                    style={p.pos ? { objectPosition: p.pos } : undefined}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 shade-bottom px-3 pt-10 pb-2.5 md:px-4 md:pb-3.5 text-[12px] md:text-[13px] font-semibold leading-snug text-cream">
                    {p.caption}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
}
