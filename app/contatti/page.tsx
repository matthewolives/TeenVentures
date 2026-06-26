import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contatti",
  description: "Contatta TeenVentures su LinkedIn e Instagram.",
};

export default function ContattiPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <h1 className="font-bryndan text-4xl md:text-5xl text-white leading-tight mb-16">
            Contatti
          </h1>
          <p className="font-mono text-xs tracking-widest text-white/50 uppercase mb-6">
            Social
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/company/teenventures/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bryndan text-3xl md:text-4xl text-white hover:text-white/60 transition-colors w-fit"
            >
              LinkedIn →
            </a>
            <a
              href="https://www.instagram.com/teenventures_/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bryndan text-3xl md:text-4xl text-white hover:text-white/60 transition-colors w-fit"
            >
              Instagram →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
