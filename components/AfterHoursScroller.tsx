"use client";

import { useEffect, useRef, useState } from "react";

import { LUMA_CALENDAR_URL, type CalendarEvent } from "@/lib/luma";

export default function AfterHoursScroller({ events, unavailable }: { events: CalendarEvent[]; unavailable: boolean }) {
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
    if (!track || events.length < 2) return;

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
        const nextEvent = (eventIndex + 1) % events.length;
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
  }, [events.length]);

  if (!events.length) return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-center">
      <p>{unavailable ? "Gli eventi non sono al momento disponibili." : "Nuovi eventi in arrivo. Seguici su Luma!"}</p>
      <a href={LUMA_CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block rounded-md bg-black px-6 py-3 text-white">Apri il calendario Luma →</a>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden py-6 md:py-10" aria-label="Eventi After Hours">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="relative mx-auto w-[90%]">
          <div
            ref={trackRef}
            className="flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
          {events.map((event, index) => (
            <div
              key={event.id}
              ref={(card) => {
                cardRefs.current[index] = card;
              }}
              className="relative w-full shrink-0 snap-start overflow-hidden border border-black/15 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                {/* The blurred cover layer fills the frame without sacrificing any of the original image. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-60"
                  loading="lazy"
                />
                {/* The full image remains visible, centered, and uncropped above the fill layer. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={event.image}
                  alt={event.name}
                  className="relative z-10 h-full w-full object-contain"
                  loading={index === 0 ? "eager" : "lazy"}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/soon.png";
                  }}
                />
              </div>
              <div className="space-y-3 bg-white px-6 py-6 md:px-12">
                <p className="text-sm text-black/60"><time dateTime={event.startAt}>{event.date} (ora italiana)</time> · {event.location}</p>
                <h3 className="text-xl md:text-2xl">{event.name}</h3>
                <a href={event.href} target="_blank" rel="noopener noreferrer" className="inline-block rounded-md bg-black px-6 py-3 text-white transition hover:bg-black/80">Iscriviti su Luma →</a>
              </div>
            </div>
            ))}
          </div>
          <button
            hidden={events.length < 2}
            type="button"
            aria-label="Evento precedente"
            onClick={() => goToEvent((currentEvent - 1 + events.length) % events.length)}
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-black/75 text-2xl text-white shadow-lg transition hover:border-[#f4b940] hover:bg-[#f4b940] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4b940] md:left-8"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            hidden={events.length < 2}
            type="button"
            aria-label="Evento successivo"
            onClick={() => goToEvent((currentEvent + 1) % events.length)}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-black/75 text-2xl text-white shadow-lg transition hover:border-[#f4b940] hover:bg-[#f4b940] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f4b940] md:right-8"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <nav className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2" aria-label="Selezione evento">
        {events.map((event, index) => (
          <button
            key={event.id}
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
