import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const Terms = () => {
  // Imposta il titolo della pagina
  useEffect(() => {
    document.title = 'Termini e Condizioni - Ville Pisciotta | Regolamento Prenotazioni'
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
            Termini e Condizioni
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="prose prose-lg max-w-none">
          <p className="text-base font-questrial text-gray-700 mb-8 text-justify">
            Le presenti Condizioni Generali regolano l'accesso e l'utilizzo del sito web e disciplinano le modalità di prenotazione e cancellazione dei soggiorni presso Villa Gelvi e Villa MiraScopello (di seguito "le Strutture").
          </p>

          <p className="text-base font-questrial text-gray-700 mb-12 text-justify">
            Accedendo al sito e/o effettuando una prenotazione, l'utente accetta integralmente i presenti Termini e Condizioni.
          </p>

          <div className="space-y-8">
            {/* 1. Oggetto del servizio */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                1. Oggetto del servizio
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                Il sito web ha lo scopo di presentare le caratteristiche, i servizi e le disponibilità delle Strutture e di consentire all'utente di richiedere informazioni o effettuare una prenotazione.
              </p>
            </section>

            {/* 2. Prenotazioni */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                2. Prenotazioni
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                Le prenotazioni possono essere effettuate tramite i moduli presenti sul sito, via e-mail o tramite canali autorizzati.
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify">
                La prenotazione è considerata confermata solo al ricevimento della relativa conferma scritta e dell'eventuale caparra o pagamento richiesto.
              </p>
            </section>

            {/* 3. Prezzi e Pagamenti */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                3. Prezzi e Pagamenti
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                I prezzi, ove indicati, si intendono per l'intero periodo di soggiorno e possono variare in base alla stagione, al numero di ospiti o a servizi aggiuntivi richiesti.
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify">
                Al momento della prenotazione può essere richiesta una caparra confirmatoria o il pagamento anticipato parziale/totale, secondo le modalità comunicate.
              </p>
            </section>

            {/* 4. Politiche di Cancellazione */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                4. Politiche di Cancellazione
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-6">
                Le politiche di cancellazione variano in base alla Struttura prenotata:
              </p>

              {/* 4.1 Villa Gelvi */}
              <div className="ml-4 md:ml-8 mb-6">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  4.1 Villa Gelvi
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify mb-2">
                  La cancellazione è gratuita se richiesta almeno 14 giorni prima della data di arrivo.
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify">
                  Oltre tale termine, eventuali somme versate potranno essere trattenute a titolo di penale, salvo diverse disposizioni comunicate al momento della prenotazione.
                </p>
              </div>

              {/* 4.2 Villa MiraScopello */}
              <div className="ml-4 md:ml-8">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  4.2 Villa MiraScopello
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify mb-2">
                  La cancellazione è gratuita se richiesta almeno 30 giorni prima della data di arrivo.
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify">
                  Oltre tale termine, eventuali somme versate potranno essere trattenute a titolo di penale, salvo diverse disposizioni comunicate al momento della prenotazione.
                </p>
              </div>
            </section>

            {/* 5. Check-in e Check-out */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                5. Check-in e Check-out
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                Orari di check-in e check-out verranno comunicati in fase di prenotazione.
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify">
                Eventuali esigenze particolari possono essere gestite previa disponibilità.
              </p>
            </section>

            {/* 6. Responsabilità degli Ospiti */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                6. Responsabilità degli Ospiti
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                L'ospite si impegna a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">utilizzare gli spazi e i servizi con cura e rispetto;</li>
                <li className="text-justify">rispettare le regole della Struttura comunicate all'arrivo;</li>
                <li className="text-justify">risarcire eventuali danni causati durante il soggiorno.</li>
              </ul>
            </section>

            {/* 7. Limitazioni di Responsabilità */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                7. Limitazioni di Responsabilità
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                Il proprietario delle Strutture non è responsabile per:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">interruzioni di servizi esterni non direttamente controllabili (es. elettricità, internet, acqua);</li>
                <li className="text-justify">smarrimenti, furti o danni a beni personali degli ospiti non custoditi adeguatamente.</li>
              </ul>
            </section>

            {/* 8. Privacy */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                8. Privacy
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                Il trattamento dei dati personali avviene nel rispetto della normativa vigente. Maggiori informazioni sono disponibili nella Privacy Policy del sito.
              </p>
            </section>

            {/* 9. Modifiche ai Termini e Condizioni */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                9. Modifiche ai Termini e Condizioni
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                Ci riserviamo il diritto di modificare in qualsiasi momento i presenti Termini e Condizioni. Le modifiche avranno effetto dalla pubblicazione sul sito.
              </p>
            </section>

            {/* 10. Legge applicabile */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                10. Legge applicabile
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                I presenti Termini e Condizioni sono regolati dalla legge italiana. Per eventuali controversie è competente il foro territorialmente previsto dalla legge.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Terms

