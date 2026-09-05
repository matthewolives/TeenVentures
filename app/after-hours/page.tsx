import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AfterHoursScroller from "@/components/AfterHoursScroller";

export const metadata: Metadata = {
  title: "After Hours",
  description:
    "Una serie di eventi serali aperti a tutti gli adolescenti italiani. Incontra chi ha costruito qualcosa di reale.",
};

type LumaEvent = {
  api_id: string;
  name: string;
  start_at: string;
  url: string;
  cover_url?: string;
};

async function fetchUpcomingEvents(): Promise<LumaEvent[]> {
  const calendarId = process.env.LUMA_CALENDAR_API_ID;
  if (!calendarId) return [];

  try {
    const now = new Date().toISOString();
    const res = await fetch(
      `https://api.lu.ma/public/v1/calendar/list-events?calendar_api_id=${calendarId}&after=${now}&series_mode=sessions`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.entries ?? []).slice(0, 3).map((entry: { event: LumaEvent }) => entry.event);
  } catch {
    return [];
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function AfterHoursPage() {
  const upcomingEvents = await fetchUpcomingEvents();
  const hasEvents = upcomingEvents.length > 0;

  return (
    <>
      <Navbar />
      <main className="after-hours-page font-poppins flex-1 bg-white pt-16 text-black">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h1 className="mx-auto w-[90%] text-[2.058rem] leading-[1.2] text-black md:text-[2.618rem] lg:text-[3.33rem]">
            <span className="font-pacifico font-normal">After Hours</span>{" "}
            <span className="font-teenventures text-base md:text-[1.272rem] lg:text-[1.618rem]">
              by Teen Ventures
            </span>
          </h1>
          <div className="mx-auto mt-6 w-[90%] space-y-4 text-base leading-[1.618] text-black/60 md:text-[1.272rem]">
            <p>
              <span className="font-pacifico">After Hours</span> è una serie di eventi serali aperti
              a tutti gli adolescenti italiani.
            </p>
            <p>
              Ogni appuntamento porta una persona che ha costruito qualcosa di reale a parlare
              direttamente con chi sta cercando il proprio posto nel mondo startup.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Events scroller */}
        <section className="py-16 md:py-24">
          <div className="mx-auto mb-10 max-w-7xl px-6">
            <h2 className="mx-auto w-[90%] text-[2.058rem] leading-[1.2] text-black md:text-[2.618rem]">
              Iscriviti ai prossimi <span className="font-pacifico">After Hours</span>
            </h2>
          </div>
          <AfterHoursScroller />
        </section>

        <div className="section-divider" />

        {/* Events section (Luma) */}
        {hasEvents && (
          <>
            <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
              <h2 className="mb-10 text-[0.786rem] font-medium uppercase tracking-widest text-black/50">
                Prossimi eventi
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {upcomingEvents.map((event) => (
                  <a
                    key={event.api_id}
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col gap-4 border border-black/20 p-6 transition-colors hover:border-black/50"
                  >
                    {event.cover_url && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={event.cover_url}
                        alt={event.name}
                        className="aspect-video w-full object-cover"
                      />
                    )}
                    <p className="text-[0.786rem] text-black/40">{formatDate(event.start_at)}</p>
                    <h3 className="text-base text-black transition-colors group-hover:text-black/70">
                      {event.name}
                    </h3>
                    <span className="mt-auto text-[0.786rem] text-black/50">Registrati su Luma →</span>
                  </a>
                ))}
              </div>
            </section>
            <div className="section-divider" />
          </>
        )}

        {/* WhatsApp section */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="text-center">
            {!hasEvents && (
              <p className="mb-4 text-[2.058rem] font-semibold leading-[1.2] text-black md:text-[2.618rem]">
                Gli <span className="font-pacifico font-normal">After Hours</span> torneranno presto.
              </p>
            )}
            <p className="mb-6 text-[1.272rem] leading-[1.2] text-black md:text-[1.618rem]">
              Unisciti al gruppo WhatsApp
            </p>
            <p className="mx-auto mb-8 max-w-xl text-base leading-[1.618] text-black/60">
              Resta aggiornato su tutte le novità ed iniziative di TeenVentures
            </p>
            <a
              href="https://chat.whatsapp.com/Io3E85jCHee4vIMJICLuei?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-black bg-black px-6 py-3 text-base text-white transition-colors hover:bg-transparent hover:text-black"
            >
              Unisciti al gruppo WhatsApp →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
