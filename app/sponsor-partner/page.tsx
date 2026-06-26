import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SponsorPartnerPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="py-20 md:py-28 flex justify-center px-6">
          <div className="max-w-3xl w-full">
            <p className="font-mono text-xs tracking-widest text-white/50 uppercase mb-6">
              Sponsor & Partner
            </p>
            <h1 className="font-bryndan text-4xl md:text-5xl text-white leading-tight">
              Chi cammina con noi.
            </h1>
          </div>
        </section>

        <div className="section-divider" />

        {/* Albert School */}
        <section className="py-16 md:py-24 flex justify-center px-6">
          <div className="max-w-3xl w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sponsors/albert-school.png"
              alt="Albert School"
              className="h-14 object-contain mb-10"
            />
            <div className="font-mono text-lg text-white/70 leading-relaxed space-y-6">
              <p>
                <strong className="text-white">Albert School</strong>{" "}è la prima Data &amp; Business
                School europea, con campus a Milano, Parigi, Marsiglia, Ginevra e Madrid. Nata dalla
                convinzione che il futuro appartiene a chi sa combinare pensiero analitico e visione
                imprenditoriale, Albert forma i leader dell&apos;economia di domani attraverso un
                approccio pratico e orientato al mondo reale, con casi aziendali forniti da realtà
                come Google, LVMH e Moncler, programmi internazionali, e una comunità costruita
                attorno all&apos;ambizione.
              </p>
              <p>
                La sintonia con TeenVentures è naturale: entrambi crediamo che
                l&apos;imprenditorialità si insegni facendo, non solo studiando, e che il momento
                giusto per iniziare sia prima di quanto si pensi.{" "}
                <strong className="text-white">Albert School</strong> è il{" "}
                <strong className="text-white">partner accademico</strong> di TeenVentures, che
                supporta portando risorse, mentorship e una rete di professionisti a supporto dei
                giovani founder che partecipano al programma.
              </p>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* CTA */}
        <section className="py-24 md:py-32 flex flex-col items-center text-center px-6">
          <h2 className="font-bryndan text-4xl md:text-5xl text-white max-w-2xl leading-tight mb-10">
            Vuoi aiutarci a scovare e formare giovani talenti italiani?
          </h2>
          <Link
            href="/contatti"
            className="inline-block bg-white text-black border border-white px-8 py-4 text-lg hover:bg-transparent hover:text-white transition-colors"
          >
            Contattaci
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
