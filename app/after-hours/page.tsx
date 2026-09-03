import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AfterHoursScroller from "@/components/AfterHoursScroller";

export const metadata: Metadata = {
  title: "After Hours",
  description:
    "Una serie di eventi serali aperti a tutti gli adolescenti italiani. Builders Talk, Demo Night, Tech Night: incontra chi ha costruito qualcosa di reale.",
};

const FORMAT_CARDS = [
  {
    name: "Builders Talk",
    description: "Conversazioni con founders o operators del mondo startup.",
  },
  {
    name: "Tech Night",
    description: "Workshop pratici per costruire qualcosa.",
  },
  {
    name: "Demo Night",
    description: "Giovani founder mostrano i loro prodotti in diretta.",
  },
];

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
      <main className="flex-1 pt-16">
        <AfterHoursScroller />
        {/* Header */}
        <section className="max-w-7xl mx-auto px-16 md:px-24 py-20 md:py-28">
          <h1 className="font-bryndan text-5xl md:text-6xl text-white leading-tight max-w-3xl">
            TeenVentures After Hours
          </h1>
          <div className="font-mono text-xl text-white/60 mt-6 max-w-2xl leading-relaxed space-y-4">
            <p>
              After Hours è una serie di eventi serali aperti a tutti gli adolescenti italiani.
            </p>
            <p>
              Ogni appuntamento porta una persona che ha costruito qualcosa di reale a parlare
              direttamente con chi sta cercando il proprio posto nel mondo startup.
            </p>
            <p>
              Tre format: <span className="text-white">Builders Talk</span>, con ospiti che raccontano il loro percorso;{" "}
              <span className="text-white">Demo Night</span>, dove i ragazzi presentano i loro progetti;{" "}
              <span className="text-white">Tech Night</span>, workshop pratici per costruire qualcosa insieme.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Events section */}
        {hasEvents && (
          <>
            <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
              <h2 className="font-bryndan text-4xl md:text-5xl text-white mb-10">
                Iscriviti ai prossimi After Hours
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <a
                    key={event.api_id}
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/20 p-6 flex flex-col gap-4 hover:border-white/50 transition-colors group"
                  >
                    {event.cover_url && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={event.cover_url}
                        alt={event.name}
                        className="w-full aspect-video object-cover"
                      />
                    )}
                    <p className="font-mono text-xs text-white/40">
                      {formatDate(event.start_at)}
                    </p>
                    <h3 className="font-mono text-sm text-white group-hover:text-white/70 transition-colors">
                      {event.name}
                    </h3>
                    <span className="font-mono text-xs text-white/50 mt-auto">
                      Registrati su Luma →
                    </span>
                  </a>
                ))}
              </div>
            </section>
            <div className="section-divider" />
          </>
        )}

        {/* WhatsApp section */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="font-bryndan text-4xl md:text-5xl text-white mb-6">
              Unisciti al gruppo WhatsApp
            </p>
            <p className="font-mono text-lg text-white/60 mb-8 leading-relaxed max-w-xl mx-auto">
              Resta aggiornato su tutte le novità ed iniziative di TeenVentures
            </p>
            <a
              href="https://chat.whatsapp.com/Io3E85jCHee4vIMJICLuei?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black border border-white px-6 py-3 text-base hover:bg-transparent hover:text-white transition-colors"
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
