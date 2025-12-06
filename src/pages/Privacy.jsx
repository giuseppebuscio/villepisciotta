import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const Privacy = () => {
  // Gestione fade-in per tutti gli elementi
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in')
            entry.target.classList.remove('fade-in-hidden')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    const mainContainer = document.querySelector('.min-h-screen')
    if (!mainContainer) return

    const navElement = mainContainer.querySelector('nav')
    let heroSection = null
    if (navElement && navElement.nextElementSibling) {
      const nextSibling = navElement.nextElementSibling
      if (nextSibling.classList.contains('relative') && nextSibling.querySelector('h1')) {
        heroSection = nextSibling
      }
    }

    // Seleziona tutti gli elementi di testo
    const elements = mainContainer.querySelectorAll(
      'h1, h2, h3, p, li, ul, section'
    )

    elements.forEach((el, index) => {
      const isInNav = el.closest('nav')
      const isInFooter = el.closest('footer')
      const isInLightbox = el.closest('[class*="lightbox"]') || el.closest('[role="dialog"]')
      const isInHero = heroSection && heroSection.contains(el)
      
      if (
        !isInNav &&
        !isInFooter &&
        !isInLightbox &&
        !isInHero &&
        el.offsetParent !== null &&
        !el.classList.contains('fade-in') &&
        !el.classList.contains('fade-in-hidden')
      ) {
        el.classList.add('fade-in-hidden')
        setTimeout(() => {
          observer.observe(el)
        }, index * 30)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-[50vh] w-full">
        <img
          src="/mirascopello/1.jpg"
          alt="Privacy Policy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white text-center px-4">
            Privacy Policy
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="prose prose-lg max-w-none">
          <p className="text-base font-questrial text-gray-700 mb-8 text-justify">
            La presente Informativa Privacy descrive le modalità di trattamento dei dati personali degli utenti che visitano o utilizzano il sito web dedicato a Villa Gelvi e Villa MiraScopello (di seguito "il Sito").
          </p>

          <p className="text-base font-questrial text-gray-700 mb-12 text-justify">
            Il trattamento avviene nel rispetto del Regolamento UE 2016/679 (GDPR) e della normativa italiana vigente.
          </p>

          <div className="space-y-8">
            {/* 1. Titolare del Trattamento */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                1. Titolare del Trattamento
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                Il Titolare del trattamento è:
              </p>
              <div className="ml-4 md:ml-8 text-base font-questrial text-gray-700">
                <p className="mb-2"><strong>Ugo Pisciotta</strong></p>
                <p className="mb-2">Via Enrico Fermi, 1</p>
                <p className="mb-2">Castellammare del Golfo (TP)</p>
                <p className="mb-4">Email: <a href="mailto:compliance@villepisciotta.com" className="text-accent hover:underline">compliance@villepisciotta.com</a></p>
              </div>
              <p className="text-base font-questrial text-gray-700 text-justify">
                Il Titolare può essere contattato per qualsiasi richiesta relativa al trattamento dei dati personali.
              </p>
            </section>

            {/* 2. Tipologie di dati raccolti */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                2. Tipologie di dati raccolti
              </h2>

              {/* 2.1 Dati forniti volontariamente dall'utente */}
              <div className="ml-4 md:ml-8 mb-6">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  2.1 Dati forniti volontariamente dall'utente
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                  Attraverso il form di richiesta informazioni/prenotazioni, l'utente può comunicare:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                  <li className="text-justify">Nome</li>
                  <li className="text-justify">Cognome</li>
                  <li className="text-justify">Indirizzo email</li>
                </ul>
                <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                  Eventuali ulteriori informazioni inserite nel messaggio rientrano nei dati volontariamente forniti dall'utente.
                </p>
              </div>

              {/* 2.2 Dati raccolti automaticamente */}
              <div className="ml-4 md:ml-8 mb-6">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  2.2 Dati raccolti automaticamente
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify">
                  Il Sito può raccogliere automaticamente informazioni tecniche (es. indirizzo IP, tipo di browser, data e ora della visita) necessarie per il funzionamento e la sicurezza del Sito.
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                  Questi dati non vengono utilizzati per finalità di profilazione, marketing o analisi statistica.
                </p>
              </div>

              {/* 2.3 Cookie */}
              <div className="ml-4 md:ml-8">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  2.3 Cookie
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify mb-2">
                  Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento.
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify mb-2">
                  Non vengono utilizzati sistemi di analisi come Google Analytics né cookie di profilazione.
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify">
                  Il sito integra una mappa tramite Google Maps iframe, che può installare cookie tecnici o di servizi esterni.
                </p>
              </div>
            </section>

            {/* 3. Finalità del trattamento */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                3. Finalità del trattamento
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                I dati personali raccolti sono trattati per le seguenti finalità:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">Rispondere alle richieste di informazioni inviate tramite il form di contatto.</li>
                <li className="text-justify">Gestire richieste di prenotazione presso Villa Gelvi e Villa MiraScopello.</li>
                <li className="text-justify">Comunicazioni amministrative o informative relative alle richieste dell'utente.</li>
                <li className="text-justify">Adempimento di obblighi di legge eventualmente applicabili.</li>
                <li className="text-justify">Garantire la sicurezza e il corretto funzionamento del sito.</li>
              </ul>
              <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                Non vengono effettuate attività di marketing o newsletter.
              </p>
            </section>

            {/* 4. Base giuridica del trattamento */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                4. Base giuridica del trattamento
              </h2>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">Esecuzione di misure precontrattuali (art. 6.1.b GDPR): richieste di informazioni e prenotazioni.</li>
                <li className="text-justify">Adempimento di obblighi legali (art. 6.1.c GDPR).</li>
                <li className="text-justify">Legittimo interesse del Titolare (art. 6.1.f GDPR) limitatamente alla sicurezza e al corretto funzionamento del sito.</li>
              </ul>
            </section>

            {/* 5. Modalità del trattamento */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                5. Modalità del trattamento
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                Il trattamento viene effettuato mediante strumenti elettronici e/o manuali, adottando misure tecniche e organizzative idonee a proteggere i dati da accessi non autorizzati, perdita o diffusione.
              </p>
            </section>

            {/* 6. Conservazione dei dati */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                6. Conservazione dei dati
              </h2>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">Dati inviati tramite form di contatto/prenotazione: fino a 12 mesi dalla comunicazione.</li>
                <li className="text-justify">Dati tecnici di navigazione: secondo i tempi tecnici del server Aruba.</li>
              </ul>
              <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                I dati non necessari vengono eliminati o anonimizzati.
              </p>
            </section>

            {/* 7. Comunicazione dei dati a terzi */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                7. Comunicazione dei dati a terzi
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                I dati possono essere comunicati esclusivamente a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">Aruba S.p.A., per il servizio di hosting del sito.</li>
                <li className="text-justify">Fornitori tecnici incaricati della manutenzione del sito (se presenti).</li>
                <li className="text-justify">Autorità pubbliche se richiesto da obblighi di legge.</li>
              </ul>
              <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                Non vengono comunicati a terzi per finalità commerciali né venduti.
              </p>
            </section>

            {/* 8. Servizi esterni integrati */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                8. Servizi esterni integrati
              </h2>
              
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-playfair font-semibold text-primary mb-2">
                  Google Maps (iframe)
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify">
                  L'integrazione della mappa può comportare il trattamento di dati da parte di Google Ireland Ltd., sulla base dell'informativa privacy di Google.
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-playfair font-semibold text-primary mb-2">
                  Pulsante WhatsApp
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify">
                  Il pulsante presente sul sito rimanda all'app WhatsApp.
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify mt-2">
                  Nessun dato viene raccolto automaticamente dal sito: l'utente decide volontariamente di aprire la chat con il Titolare.
                </p>
              </div>
            </section>

            {/* 9. Trasferimento dei dati extra-UE */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                9. Trasferimento dei dati extra-UE
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                Eventuali trasferimenti tramite servizi Google avvengono nel rispetto degli artt. 44–49 del GDPR, sulla base delle garanzie fornite dal fornitore.
              </p>
            </section>

            {/* 10. Diritti dell'utente */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                10. Diritti dell'utente
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                L'utente, in qualità di interessato, può esercitare i seguenti diritti:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">Accesso ai dati personali</li>
                <li className="text-justify">Rettifica</li>
                <li className="text-justify">Cancellazione (diritto all'oblio)</li>
                <li className="text-justify">Limitazione del trattamento</li>
                <li className="text-justify">Portabilità dei dati</li>
                <li className="text-justify">Opposizione al trattamento</li>
                <li className="text-justify">Reclamo al Garante per la Protezione dei Dati Personali</li>
              </ul>
              <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                Per esercitare tali diritti: <a href="mailto:compliance@villepisciotta.com" className="text-accent hover:underline">compliance@villepisciotta.com</a>
              </p>
            </section>

            {/* 11. Minori */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                11. Minori
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                Il Sito non raccoglie volontariamente dati di minori di 18 anni.
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify mt-2">
                Eventuali dati forniti verranno immediatamente cancellati.
              </p>
            </section>

            {/* 12. Modifiche alla presente Informativa */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                12. Modifiche alla presente Informativa
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                Il Titolare si riserva il diritto di aggiornare la presente Privacy Policy in qualsiasi momento.
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify mt-2">
                Le modifiche saranno pubblicate su questa pagina.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Privacy

