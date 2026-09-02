"use client";

import { useEffect, useRef, useState } from "react";

const EVENTS = [
  {
    image: "/Annalisa.png",
    alt: "After Hours w/ Annalisa Puligheddu",
    label: "Iscriviti Ora",
    href: "https://luma.com/m7t3h30h",
  },
  { image: "/soon.png", alt: "Coming Soon", label: "In Arrivo" },
  {
    image: "/Mirko.png",
    alt: "After Hours w/ Mirko Belleri",
    label: "Iscriviti Ora",
    href: "https://luma.com/9a7mdtq5",
  },
  { image: "/soon.png", alt: "Coming Soon", label: "In Arrivo" },
];

export default function AfterHoursScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentEvent, setCurrentEvent] = useState(0);

  const goToEvent = (eventIndex: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[eventIndex];
    if (!track || !card) return;

    setCurrentEvent(eventIndex);
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateFromScroll = () => {
      const nearestEvent = cardRefs.current.reduce((nearestIndex, card, index) => {
        if (!card) return nearestIndex;
        const cardPosition = card.offsetLeft - track.offsetLeft;
        const nearestCard = cardRefs.current[nearestIndex];
        if (!nearestCard) return index;
        const nearestPosition = nearestCard.offsetLeft - track.offsetLeft;
        return Math.abs(cardPosition - track.scrollLeft) < Math.abs(nearestPosition - track.scrollLeft)
          ? index
          : nearestIndex;
      }, 0);

      setCurrentEvent(nearestEvent);
    };

    track.addEventListener("scroll", updateFromScroll, { passive: true });
    const interval = window.setInterval(() => {
      setCurrentEvent((eventIndex) => {
        const nextEvent = (eventIndex + 1) % EVENTS.length;
        const card = cardRefs.current[nextEvent];
        if (card) {
          track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
        }
        return nextEvent;
      });
    }, 10000);

    return () => {
      track.removeEventListener("scroll", updateFromScroll);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-6 md:py-10" aria-label="Eventi After Hours">
      <div
        ref={trackRef}
        className="mx-auto flex w-[92%] snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] md:w-[70%] [&::-webkit-scrollbar]:hidden"
      >
        {EVENTS.map((event, index) => (
          <div
            key={`${event.image}-${index}`}
            ref={(card) => {
              cardRefs.current[index] = card;
            }}
            className="relative aspect-video w-full shrink-0 snap-start overflow-hidden border border-black/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={event.image} alt={event.alt} className="h-full w-full object-cover" />
            <a
              href={event.href ?? "#"}
              aria-disabled={!event.href}
              onClick={(clickEvent) => {
                if (!event.href) clickEvent.preventDefault();
              }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg transition hover:bg-black/80 aria-disabled:pointer-events-none aria-disabled:opacity-70 md:bottom-24 md:px-12 md:py-5"
            >
              {event.label}
            </a>
          </div>
        ))}
      </div>
      <nav className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2" aria-label="Selezione evento">
        {EVENTS.map((event, index) => (
          <button
            key={`${event.alt}-${index}`}
            type="button"
            aria-label={`Vai all'evento ${index + 1}`}
            aria-current={index === currentEvent ? "true" : undefined}
            onClick={() => goToEvent(index)}
            className={`h-2 w-2 rounded-full border border-black transition ${
              index === currentEvent ? "scale-125 bg-black opacity-100" : "bg-transparent opacity-70"
            }`}
          />
        ))}
      </nav>
    </section>
  );
}