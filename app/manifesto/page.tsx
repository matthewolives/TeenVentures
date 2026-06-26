import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ManifestoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="py-12 md:py-16 flex justify-center px-6">
          <div className="max-w-3xl w-full">
            <p className="font-mono text-xs tracking-widest text-white/50 uppercase mb-6">
              Manifesto
            </p>
            <h1 className="font-bryndan text-4xl md:text-5xl text-white leading-tight mb-8">
              Il talento non può e non deve aspettare.
            </h1>
          </div>
        </section>

        <div className="section-divider" />

        <section className="py-12 md:py-16 flex justify-center px-6">
          <div className="font-mono text-lg text-white/70 leading-relaxed space-y-6 max-w-3xl w-full">
            <p>
              In qualche piccolo paese di provincia tra Bolzano ed Agrigento, in questo esatto
              momento, c&apos;è un adolescente con mille idee in testa che non riesce a smettere
              di pensare.
            </p>
            <p><strong className="text-white">Nessuno lo sta ascoltando.</strong></p>
            <p>
              Lo conosco bene, quel ragazzo.<br />
              È nato e cresciuto in una realtà di periferia che cercava costantemente di convincerlo
              che <strong className="text-white">pensasse troppo in grande</strong>.<br />
              Ha imparato presto che l&apos;ambizione è un lusso per quelli nati nel posto giusto,
              con le persone giuste intorno. Gli hanno detto, in mille modi diversi:<br />
              <strong className="text-white">&ldquo;Non è roba per quelli come noi.&rdquo;</strong>
            </p>
            <p>
              Forse ha smesso di provarci. Forse no.<br />
              Una cosa che ha capito per certo è che non importa quante cose abbia da dire,
              nessuno è realmente disposto ad ascoltarlo.
            </p>
            <p>
              C&apos;è qualcosa di ancora più crudele, però, di cui non si parla abbastanza.<br />
              Questi ragazzi, quelli che a sedici anni pensano a progetti che vorrebbero costruire e
              problemi che vorrebbero risolvere, spesso finiscono per{" "}
              <strong className="text-white">sentirsi stupidi</strong>.<br />
              Non perché lo siano. Ma perché gli altri non li capiscono.
            </p>
            <p>
              Quando tutti i tuoi compagni si preoccupano di essere popolari a scuola e tu invece
              stai pensando a qualcosa che vuoi costruire, inevitabilmente ti senti sbagliato, solo.
            </p>
            <p>Ti senti <strong className="text-white">diverso</strong>.</p>
            <p>
              &ldquo;Diverso&rdquo;, a quell&apos;età, non è mai un complimento.<br />
              La solitudine non viene dall&apos;assenza di persone intorno, ma dall&apos;assenza di
              qualcuno che ti capisca davvero.
            </p>
            <p>
              Il problema non sei tu. Il problema è che adeguarsi alla massa e a ciò che è
              &ldquo;normale&rdquo; è più facile che pensare. La mediocrità non fa rumore, non
              disturba, non richiede spiegazioni. Chi sceglie di non alzare la testa non deve mai
              giustificarsi. Chi invece insiste a fare domande, a immaginare, a voler costruire
              qualcosa di diverso, deve difendersi ogni giorno. Non perché abbia torto, ma perché
              disturba l&apos;equilibrio di chi ha già smesso di provarci da tempo.
            </p>
            <p>
              Nessuno ci ha mai detto, a quell&apos;età, che non eravamo sbagliati, e che quella
              tendenza di vedere le cose in modo diverso non era un difetto da correggere, ma un{" "}
              <strong className="text-white">potenziale tutto da scoprire</strong>. Nessuno ci ha
              aspettato all&apos;uscita da scuola per dirci che avevamo qualcosa di speciale, e che
              dovevamo tenercelo stretto.<br />
              Nessuno ha mai voluto aiutarci a capire cosa farne.
            </p>
            <p>
              TeenVentures esiste per quella ragazza e per quel ragazzo.<br />
              Per dare voce e strumenti a ogni giovane italiano che ha{" "}
              <strong className="text-white">qualcosa da dire</strong>, e che finalmente ha qualcuno
              disposto ad ascoltarlo.
            </p>
            <p>
              Crediamo che il talento non debba richiedere un&apos;età minima per essere preso sul
              serio. Crediamo che i momenti più influenti nella vita di chi può fare la differenza
              non avvengano nei coworking delle grandi città, ma nelle camerette, sui treni
              regionali, nelle aule dei licei dove nessuno si aspetta grandi cose.<br />
              Crediamo che aspettare di diventare adulti per sentirsi degni di essere ascoltati sia
              uno spreco enorme, sia per chi ha il talento che per il Paese intero.
            </p>
            <p>
              TeenVentures è la <strong className="text-white">rivincita</strong> di tutti quelli a
              cui è stato detto che pensavano troppo in grande.<br />
              È l&apos;opportunità che ognuno di noi avrebbe voluto avere, e che abbiamo il dovere
              di dare alle nuove generazioni.
            </p>
            <p>
              Perché il futuro dell&apos;Italia non inizia a trent&apos;anni.<br />
              <strong className="text-white">Inizia adesso.</strong>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
