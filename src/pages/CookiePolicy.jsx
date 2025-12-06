import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const CookiePolicy = () => {
  // Imposta il titolo della pagina
  useEffect(() => {
    document.title = 'Cookie Policy - Ville Pisciotta | Gestione Cookie'
  }, [])

  // Animazione fade-in per il titolo hero
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            if (el.classList.contains('fade-in-hero-hidden')) {
              el.classList.add('fade-in-hero')
              el.classList.remove('fade-in-hero-hidden')
              observer.unobserve(el)
            }
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    // Trova tutti gli elementi con fade-in-hero-hidden
    const elements = document.querySelectorAll('.fade-in-hero-hidden')
    elements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

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
          alt="Interno della villa MiraScopello"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white text-center px-4 fade-in-hero-hidden">
            Cookie Policy
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="prose prose-lg max-w-none">
          <p className="text-base font-questrial text-gray-700 mb-8 text-justify">
            La presente Cookie Policy descrive le tipologie di cookie utilizzate dal sito web dedicato a Villa Gelvi e Villa MiraScopello (di seguito "il Sito") e le modalità di gestione degli stessi.
          </p>

          <p className="text-base font-questrial text-gray-700 mb-12 text-justify">
            Il trattamento dei dati personali tramite cookie avviene nel rispetto del Regolamento UE 2016/679 (GDPR) e della normativa italiana vigente, in particolare del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
          </p>

          <div className="space-y-8">
            {/* 1. Cosa sono i cookie */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                1. Cosa sono i cookie
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell'utente (computer, tablet, smartphone) quando visita un sito web. I cookie permettono al sito di riconoscere il dispositivo dell'utente e memorizzare alcune informazioni sulle sue preferenze o azioni passate.
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify">
                I cookie possono essere "di prima parte" (impostati direttamente dal sito visitato) o "di terza parte" (impostati da altri siti o servizi).
              </p>
            </section>

            {/* 2. Tipologie di cookie utilizzati */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                2. Tipologie di cookie utilizzati
              </h2>

              {/* 2.1 Cookie tecnici */}
              <div className="ml-4 md:ml-8 mb-6">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  2.1 Cookie tecnici (necessari)
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                  Il Sito utilizza esclusivamente cookie tecnici strettamente necessari per il funzionamento del sito stesso. Questi cookie non richiedono il consenso dell'utente ai sensi della normativa vigente.
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                  I cookie tecnici utilizzati hanno le seguenti finalità:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                  <li className="text-justify">Garantire il corretto funzionamento del sito e delle sue funzionalità</li>
                  <li className="text-justify">Memorizzare le preferenze di navigazione dell'utente</li>
                  <li className="text-justify">Mantenere la sessione dell'utente durante la navigazione</li>
                  <li className="text-justify">Garantire la sicurezza e prevenire attività fraudolente</li>
                </ul>
                <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                  Questi cookie hanno una durata limitata e vengono eliminati automaticamente al termine della sessione di navigazione o dopo un periodo di tempo prestabilito.
                </p>
              </div>

              {/* 2.2 Cookie di terze parti */}
              <div className="ml-4 md:ml-8">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  2.2 Cookie di terze parti
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                  Il Sito integra servizi di terze parti che possono installare cookie sul dispositivo dell'utente:
                </p>
                
                <div className="mb-4">
                  <h4 className="text-lg md:text-xl font-playfair font-semibold text-primary mb-2">
                    Google Maps
                  </h4>
                  <p className="text-base font-questrial text-gray-700 text-justify mb-2">
                    Il Sito utilizza Google Maps tramite iframe per visualizzare le mappe interattive delle strutture. Google Maps può installare cookie tecnici e di servizio per il corretto funzionamento del servizio.
                  </p>
                  <p className="text-base font-questrial text-gray-700 text-justify">
                    Per maggiori informazioni sui cookie utilizzati da Google Maps, si prega di consultare l'<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">informativa privacy di Google</a> e la <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Cookie Policy di Google</a>.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Cookie non utilizzati */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                3. Cookie non utilizzati
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                Il Sito <strong>non utilizza</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">Cookie di profilazione o marketing</li>
                <li className="text-justify">Cookie di analisi statistica (come Google Analytics)</li>
                <li className="text-justify">Cookie pubblicitari o di tracciamento</li>
                <li className="text-justify">Cookie di social network (come Facebook, Instagram, Twitter)</li>
                <li className="text-justify">Cookie di remarketing o retargeting</li>
              </ul>
            </section>

            {/* 4. Durata dei cookie */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                4. Durata dei cookie
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                I cookie tecnici utilizzati dal Sito possono essere:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify"><strong>Cookie di sessione:</strong> vengono eliminati automaticamente alla chiusura del browser</li>
                <li className="text-justify"><strong>Cookie persistenti:</strong> rimangono memorizzati sul dispositivo per un periodo limitato, necessario al funzionamento del sito</li>
              </ul>
              <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                I cookie di terze parti (come quelli di Google Maps) seguono le politiche di durata stabilite dai rispettivi fornitori.
              </p>
            </section>

            {/* 5. Gestione dei cookie */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                5. Gestione dei cookie
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                L'utente può gestire o disabilitare i cookie attraverso le impostazioni del proprio browser. Di seguito i link alle istruzioni per i browser più comuni:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Chrome</a>
                </li>
                <li className="text-justify">
                  <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Mozilla Firefox</a>
                </li>
                <li className="text-justify">
                  <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Safari</a>
                </li>
                <li className="text-justify">
                  <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Edge</a>
                </li>
                <li className="text-justify">
                  <a href="https://help.opera.com/it/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Opera</a>
                </li>
              </ul>
              <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                <strong>Nota importante:</strong> La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del Sito e impedire l'accesso ad alcune funzionalità.
              </p>
            </section>

            {/* 6. Consenso */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                6. Consenso
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                Poiché il Sito utilizza esclusivamente cookie tecnici necessari al funzionamento, non è richiesto il consenso esplicito dell'utente ai sensi della normativa vigente.
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify">
                L'utilizzo del Sito implica l'accettazione dell'uso dei cookie tecnici. L'utente può comunque gestire o disabilitare i cookie attraverso le impostazioni del browser come indicato nella sezione precedente.
              </p>
            </section>

            {/* 7. Titolare del trattamento */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                7. Titolare del trattamento
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                Il Titolare del trattamento dei dati personali raccolti tramite cookie è:
              </p>
              <div className="ml-4 md:ml-8 text-base font-questrial text-gray-700">
                <p className="mb-2"><strong>Ugo Pisciotta</strong></p>
                <p className="mb-2">Via Enrico Fermi, 1</p>
                <p className="mb-2">Castellammare del Golfo (TP)</p>
                <p className="mb-4">Email: <a href="mailto:compliance@villepisciotta.com" className="text-accent hover:underline">compliance@villepisciotta.com</a></p>
              </div>
              <p className="text-base font-questrial text-gray-700 text-justify">
                Per qualsiasi richiesta relativa all'utilizzo dei cookie o al trattamento dei dati personali, è possibile contattare il Titolare all'indirizzo email indicato.
              </p>
            </section>

            {/* 8. Modifiche alla Cookie Policy */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                8. Modifiche alla Cookie Policy
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                Il Titolare si riserva il diritto di aggiornare la presente Cookie Policy in qualsiasi momento per riflettere eventuali modifiche nell'utilizzo dei cookie o per adeguarsi a nuove normative.
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify mt-2">
                Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Si consiglia di consultare periodicamente questa pagina per essere informati sull'utilizzo dei cookie.
              </p>
            </section>

            {/* 9. Link utili */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                9. Link utili
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                Per maggiori informazioni sui cookie e sulla privacy:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">
                  <a href="/privacy" className="text-accent hover:underline">Privacy Policy del Sito</a>
                </li>
                <li className="text-justify">
                  <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Garante per la Protezione dei Dati Personali</a>
                </li>
                <li className="text-justify">
                  <a href="https://www.youronlinechoices.eu/it/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Your Online Choices (gestione cookie pubblicitari)</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CookiePolicy

