import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ARTICLES = [
  {
    source: "Forbes Italia",
    title: "TeenVentures a Milano: la carica degli under-20 che vogliono ridisegnare il futuro del business italiano",
    href: "https://nextleaders.forbes.it/articoli/teenventures-a-milano-la-carica-degli-under-20-che-vogliono-ridisegnare-il-futuro-del-business-italiano",
  },
  {
    source: "Università di Napoli Federico II",
    title: "Un federiciano vince TeenVentures: premiata la startup che usa l'IA per il video editing",
    href: "https://www.unina.it/it/w/un-federiciano-vince-teenventures-premiata-la-startup-che-usa-l-ia-per-il-video-editing?redirect=%2Fit%2Fhome",
  },
  {
    source: "Caserta Web",
    title: "TeenVentures Vol.1 si è concluso a Milano: trionfo per due ragazzi casertani",
    href: "https://casertaweb.com/notizie/teenventures-vol-1-si-e-concluso-a-milano-trionfo-per-due-ragazzi-casertani/",
  },
  {
    source: "Politiche Giovanili",
    title: "A Milano si chiude TeenVentures, la prima competizione under-20 dedicata alle startup",
    href: "https://www.politichegiovanili.com/2026/06/01/a-milano-si-chiude-teenventures-la-prima-competizione-under-20-dedicata-alle-startup/",
  },
  {
    source: "OndaWebTV",
    title: "Casertani vincenti a Milano: TeenVentures va al team Restry",
    href: "https://www.ondawebtv.it/casertani-vincenti-a-milano-teenventures-va-al-team-restry/",
  },
  {
    source: "Liceo Giannone Caserta",
    title: "A Milano con Francesco Di Stefano e Flavio Bernoni: abbiamo vinto TeenVentures",
    href: "https://www.liceogiannonecaserta.edu.it/evento/a-milano-con-francesco-di-stefano-e-flavio-bernoni-abbiamo-vinto-teenventures/",
  },
];

export default function MediaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-20 md:py-28 flex justify-center px-6">
          <div className="max-w-3xl w-full">
            <p className="font-mono text-xs tracking-widest text-white/50 uppercase mb-6">
              Media
            </p>
            <h1 className="font-bryndan text-4xl md:text-5xl text-white leading-tight">
              Hanno parlato di noi.
            </h1>
          </div>
        </section>

        <div className="section-divider" />

        {/* Articles */}
        <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col divide-y divide-white/15">
            {ARTICLES.map((article, i) => (
              <a
                key={i}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-8 flex flex-col gap-2 hover:opacity-70 transition-opacity group"
              >
                <p className="font-mono text-xs tracking-widest text-white/40 uppercase">
                  {article.source}
                </p>
                <p className="font-mono text-lg text-white leading-relaxed">
                  {article.title} →
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
