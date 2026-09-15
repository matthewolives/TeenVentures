import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AfterHoursScroller from "@/components/AfterHoursScroller";
import { fetchUpcomingEvents } from "@/lib/luma";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "After Hours",
  description:
    "Una serie di eventi serali aperti a tutti gli adolescenti italiani. Incontra chi ha costruito qualcosa di reale.",
};

export default async function AfterHoursPage() {
  const { events, unavailable } = await fetchUpcomingEvents();

  return (
    <>
      <Navbar />
      <main className="after-hours-page font-bryndan flex-1 bg-white pt-16 text-black">
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
          <AfterHoursScroller events={events} unavailable={unavailable} />
        </section>

        <div className="section-divider" />

        {/* WhatsApp section */}
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="text-center">
            <p className="mb-6 text-[1.272rem] leading-[1.2] text-black md:text-[1.618rem]">
              Unisciti al gruppo WhatsApp
            </p>
            <p className="mx-auto mb-8 max-w-xl text-base leading-[1.618] text-black/60">
              Resta aggiornato su tutte le news di TeenVentures
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
