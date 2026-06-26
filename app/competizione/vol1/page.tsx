import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const STATS = [
  { value: "20", label: "partecipanti" },
  { value: "9", label: "città" },
  { value: "8", label: "workshop" },
  { value: "30 Mag 2026", label: "finale a Milano" },
];

const MENTORS = [
  { name: "Giacomo Gallazzi", company: "Finanz" },
  { name: "Gabriele Concli", company: "Monarch" },
  { name: "Lorenzo Milano", company: "Pillar" },
  { name: "Samuel Mouhadab", company: "JetHR" },
  { name: "Alessandro Lombardo", company: "Augment.org" },
  { name: "Matteo Melina", company: "Cibus" },
  { name: "Irene Mingozzi", company: "Italian Founders Fund" },
  { name: "Cesca Centini", company: "The Modern Renaissance" },
];

export default function Vol1Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <p className="font-mono text-xs tracking-widest text-white/50 uppercase mb-6">
            Edizione · Vol.1
          </p>
          <h1 className="font-bryndan text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            TeenVentures Vol.1 — 2026
          </h1>
        </section>

        <div className="section-divider" />

        {/* Stats */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="border-r border-white/20 last:border-r-0 px-5 py-7 first:pl-0"
              >
                <p className="font-bryndan text-2xl md:text-3xl text-white whitespace-nowrap">{s.value}</p>
                <p className="font-mono text-xs text-white/50 mt-2 uppercase tracking-widest">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Video recap */}
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="relative w-full aspect-video">
            <iframe
              src="https://www.youtube.com/embed/9kac3UhK0hA"
              title="TeenVentures Vol.1 — Recap"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </section>

        <div className="section-divider" />

        {/* Descrizione */}
        <section className="py-16 md:py-24 flex justify-center px-6">
          <div className="font-mono text-lg text-white/80 max-w-3xl leading-relaxed space-y-6">
            <p>
              La prima edizione di TeenVentures si è tenuta nella primavera del 2026. 20 adolescenti
              selezionati da 9 città italiane hanno affrontato un percorso di due mesi a fianco di
              founders e professionisti delle realtà più rilevanti del mondo startup e VC italiano.
            </p>
            <p>
              Otto workshop per preparare i ragazzi all&apos;evento finale: un Demo Day a Milano
              davanti a 100 persone e una giuria formata da founders e investitori. Ogni gruppo ha
              presentato il proprio progetto, costruito nel corso del programma, in una vera pitch session.
            </p>
            <p>
              Il gruppo vincitore di TeenVentures Vol.1 è stato Restry, composto da{" "}
              <a
                href="https://www.linkedin.com/in/flavio-bernoni/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:text-white/70 transition-colors"
              >
                Flavio Bernoni
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/giuseppe-di-sorbo-0b4a29275/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:text-white/70 transition-colors"
              >
                Giuseppe Di Sorbo
              </a>
              , e{" "}
              <a
                href="https://www.linkedin.com/in/francesco-di-stefano-/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:text-white/70 transition-colors"
              >
                Francesco Di Stefano
              </a>
              , che hanno ideato un tool per automatizzare i processi ripetitivi del video editing
              e permettere a video editors di concentrarsi esclusivamente sulla parte creativa.
            </p>
            <p>
              I ragazzi hanno conquistato i biglietti per Wave by Vento e l&apos;accesso agli uffici
              di Vento a OGR Torino, per fare shadowing al team e alle startup del loro batch.
            </p>
            <p>
              Due partecipanti hanno trovato lavoro in startup italiane prima ancora della fine del programma.
            </p>
            <p>
              Tutto questo è stato possibile grazie a <span className="text-white">Vento</span> e a{" "}
              <a
                href="https://www.linkedin.com/in/marco-venturini-74a4901bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:text-white/70 transition-colors"
              >
                Marco Venturini
              </a>
              , partner principale di TeenVentures Vol.1.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Vincitori */}
        <section className="py-16 md:py-24 flex justify-center px-6">
          <div className="max-w-3xl w-full">
            <p className="font-mono text-base uppercase tracking-widest mb-6">
              🏆 <span className="text-white">Vincitori</span>
            </p>
            <h2 className="font-bryndan text-4xl text-white mb-2">Restry</h2>
            <p className="font-mono text-lg text-white/50 mb-6">
              Flavio Bernoni · Giuseppe Di Sorbo · Francesco Di Stefano
            </p>
            <p className="font-mono text-lg text-white/80 leading-relaxed">
              Tool per automatizzare i processi ripetitivi del video editing e permettere
              a video editors di concentrarsi esclusivamente sulla parte creativa.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Mentor */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <h2 className="font-mono text-xs tracking-widest text-white/50 uppercase mb-10">
            Mentor
          </h2>
          <div>
            {MENTORS.map((mentor, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-6 border-b border-white/15 first:border-t"
              >
                <span className="font-bryndan text-2xl md:text-3xl text-white">{mentor.name}</span>
                <span className="font-mono text-sm text-white/50">{mentor.company}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Gallery */}
        <section className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <h2 className="font-mono text-xs tracking-widest text-white/50 uppercase mb-10">
            Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "/gallery/foto1.jpg",
              "/gallery/foto2.jpg",
              "/gallery/foto3.jpg",
              "/gallery/foto4.jpg",
              "/gallery/foto5.jpg",
              "/gallery/foto6.jpg",
              "/gallery/foto7.jpg",
              "/gallery/foto8.jpg",
              "/gallery/foto9.jpg",
            ].map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt={`TeenVentures Vol.1 — foto ${i + 1}`}
                className="w-full aspect-[4/3] object-cover"
              />
            ))}
          </div>
        </section>

        <div className="section-divider" />

        {/* Sponsor */}
        <section className="py-16 md:py-24 flex flex-col items-center gap-8">
          <p className="font-mono text-xs tracking-widest text-white/50 uppercase">
            Sponsored by
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sponsors/vento.png"
            alt="Vento"
            className="h-12 object-contain"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
