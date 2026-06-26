import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <h1 className="font-bryndan text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl">
            Il primo programma di imprenditoria per adolescenti italiani.
          </h1>
          <div className="mt-10">
            <Link href="/competizione/vol1" className="inline-block bg-white text-black border border-white px-6 py-3 text-base hover:bg-transparent hover:text-white transition-colors">
              Scopri la competizione →
            </Link>
          </div>
        </section>

        <div className="section-divider" />

        {/* Descrizione */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex justify-center">
          <div className="font-mono text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed space-y-6">
            <p>TeenVentures è il primo programma di imprenditoria per adolescenti italiani.</p>
            <p>
              È un posto dove i ragazzi più ambiziosi d&apos;Italia si incontrano, imparano
              da chi ha già costruito qualcosa di reale, e iniziano a costruire a loro volta.
            </p>
            <p>
              Non aspettare che qualcuno ti dia il permesso.<br />
              <span className="text-white">Qui nessuno ti dirà che pensi troppo in grande.</span>
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Programmi */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <h2 className="font-mono text-xs tracking-widest text-white/50 uppercase mb-10">
            I nostri programmi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card Competizione */}
            <div className="border border-white/30 p-8 flex flex-col gap-6 hover:border-white/60 transition-colors">
              <span className="font-mono text-xs text-white/40 tracking-widest">01</span>
              <div>
                <h3 className="font-bryndan text-4xl text-white mb-3">Competizione</h3>
                <p className="font-mono text-sm text-white/70 leading-relaxed">
                  La gara per giovani imprenditori italiani. Mentor, workshop ed evento finale.
                </p>
              </div>
              <Link
                href="/competizione/vol1"
                className="font-mono text-sm text-white/60 hover:text-white transition-colors mt-auto"
              >
                → Vol.1
              </Link>
            </div>

            {/* Card After Hours */}
            <div className="border border-white/30 p-8 flex flex-col gap-6 hover:border-white/60 transition-colors">
              <span className="font-mono text-xs text-white/40 tracking-widest">02</span>
              <div>
                <h3 className="font-bryndan text-4xl text-white mb-3">After Hours</h3>
                <p className="font-mono text-sm text-white/70 leading-relaxed">
                  Webinar serali su imprenditoria e startup, aperti a tutti.
                </p>
              </div>
              <Link
                href="/after-hours"
                className="font-mono text-sm text-white/60 hover:text-white transition-colors mt-auto"
              >
                → Scopri
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
