import Image from "next/image";
import { PHOTOS, type PhotoKey } from "../photos";

export function PhotoGrid({ photos }: { photos: PhotoKey[] }) {
  return (
    <ul className={`mt-12 grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-5 ${photos.length > 4 ? "lg:grid-cols-4" : "md:grid-cols-4"}`}>
      {photos.map((key) => {
        const p = PHOTOS[key];
        return (
          <li key={key}>
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-navy/10">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 290px, (min-width: 768px) 24vw, 46vw"
                  className="object-cover"
                  style={p.pos ? { objectPosition: p.pos } : undefined}
                />
              </div>
              <figcaption className="mt-3 text-[13px] md:text-[14px] leading-[1.5] text-ink/65">{p.caption}</figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
