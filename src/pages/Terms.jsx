import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Terms = () => {
  const { language } = useLanguage()

  const translations = {
    it: {
      title: 'Termini e Condizioni - Ville Pisciotta | Regolamento Prenotazioni',
      pageTitle: 'Termini e Condizioni',
      intro1: 'Le presenti Condizioni Generali regolano l\'accesso e l\'utilizzo del sito web e disciplinano le modalità di prenotazione e cancellazione dei soggiorni presso Villa Gelvi e Villa MiraScopello (di seguito "le Strutture").',
      intro2: 'Accedendo al sito e/o effettuando una prenotazione, l\'utente accetta integralmente i presenti Termini e Condizioni.',
      oggetto: '1. Oggetto del servizio',
      oggettoText: 'Il sito web ha lo scopo di presentare le caratteristiche, i servizi e le disponibilità delle Strutture e di consentire all\'utente di richiedere informazioni o effettuare una prenotazione.',
      prenotazioni: '2. Prenotazioni',
      prenotazioniText1: 'Le prenotazioni possono essere effettuate tramite i moduli presenti sul sito, via e-mail o tramite canali autorizzati.',
      prenotazioniText2: 'La prenotazione è considerata confermata solo al ricevimento della relativa conferma scritta e dell\'eventuale caparra o pagamento richiesto.',
      prezzi: '3. Prezzi e Pagamenti',
      prezziText1: 'I prezzi, ove indicati, si intendono per l\'intero periodo di soggiorno e possono variare in base alla stagione, al numero di ospiti o a servizi aggiuntivi richiesti.',
      prezziText2: 'Al momento della prenotazione può essere richiesta una caparra confirmatoria o il pagamento anticipato parziale/totale, secondo le modalità comunicate.',
      cancellazione: '4. Politiche di Cancellazione',
      cancellazioneText: 'Le politiche di cancellazione variano in base alla Struttura prenotata:',
      gelvi: '4.1 Villa Gelvi',
      gelviText1: 'La cancellazione è gratuita se richiesta almeno 14 giorni prima della data di arrivo.',
      gelviText2: 'Oltre tale termine, eventuali somme versate potranno essere trattenute a titolo di penale, salvo diverse disposizioni comunicate al momento della prenotazione.',
      mirascopello: '4.2 Villa MiraScopello',
      mirascopelloText1: 'La cancellazione è gratuita se richiesta almeno 30 giorni prima della data di arrivo.',
      mirascopelloText2: 'Oltre tale termine, eventuali somme versate potranno essere trattenute a titolo di penale, salvo diverse disposizioni comunicate al momento della prenotazione.',
      checkin: '5. Check-in e Check-out',
      checkinText1: 'Orari di check-in e check-out verranno comunicati in fase di prenotazione.',
      checkinText2: 'Eventuali esigenze particolari possono essere gestite previa disponibilità.',
      responsabilita: '6. Responsabilità degli Ospiti',
      responsabilitaText: 'L\'ospite si impegna a:',
      responsabilita1: 'utilizzare gli spazi e i servizi con cura e rispetto;',
      responsabilita2: 'rispettare le regole della Struttura comunicate all\'arrivo;',
      responsabilita3: 'risarcire eventuali danni causati durante il soggiorno.',
      limitazioni: '7. Limitazioni di Responsabilità',
      limitazioniText: 'Il proprietario delle Strutture non è responsabile per:',
      limitazioni1: 'interruzioni di servizi esterni non direttamente controllabili (es. elettricità, internet, acqua);',
      limitazioni2: 'smarrimenti, furti o danni a beni personali degli ospiti non custoditi adeguatamente.',
      privacy: '8. Privacy',
      privacyText: 'Il trattamento dei dati personali avviene nel rispetto della normativa vigente. Maggiori informazioni sono disponibili nella Privacy Policy del sito.',
      modifiche: '9. Modifiche ai Termini e Condizioni',
      modificheText: 'Ci riserviamo il diritto di modificare in qualsiasi momento i presenti Termini e Condizioni. Le modifiche avranno effetto dalla pubblicazione sul sito.',
      legge: '10. Legge applicabile',
      leggeText: 'I presenti Termini e Condizioni sono regolati dalla legge italiana. Per eventuali controversie è competente il foro territorialmente previsto dalla legge.'
    },
    en: {
      title: 'Terms and Conditions - Ville Pisciotta | Booking Regulations',
      pageTitle: 'Terms and Conditions',
      intro1: 'These General Conditions govern access to and use of the website and regulate the methods of booking and cancellation of stays at Villa Gelvi and Villa MiraScopello (hereinafter "the Structures").',
      intro2: 'By accessing the site and/or making a booking, the user fully accepts these Terms and Conditions.',
      oggetto: '1. Purpose of the service',
      oggettoText: 'The website aims to present the features, services and availability of the Structures and to allow the user to request information or make a booking.',
      prenotazioni: '2. Bookings',
      prenotazioniText1: 'Bookings can be made through the forms on the site, by email or through authorized channels.',
      prenotazioniText2: 'The booking is considered confirmed only upon receipt of the relevant written confirmation and any deposit or payment required.',
      prezzi: '3. Prices and Payments',
      prezziText1: 'Prices, where indicated, are intended for the entire stay period and may vary based on season, number of guests or additional services requested.',
      prezziText2: 'At the time of booking, a confirmatory deposit or partial/total advance payment may be required, according to the methods communicated.',
      cancellazione: '4. Cancellation Policies',
      cancellazioneText: 'Cancellation policies vary based on the booked Structure:',
      gelvi: '4.1 Villa Gelvi',
      gelviText1: 'Cancellation is free if requested at least 14 days before the arrival date.',
      gelviText2: 'Beyond this deadline, any sums paid may be retained as a penalty, except for different provisions communicated at the time of booking.',
      mirascopello: '4.2 Villa MiraScopello',
      mirascopelloText1: 'Cancellation is free if requested at least 30 days before the arrival date.',
      mirascopelloText2: 'Beyond this deadline, any sums paid may be retained as a penalty, except for different provisions communicated at the time of booking.',
      checkin: '5. Check-in and Check-out',
      checkinText1: 'Check-in and check-out times will be communicated at the time of booking.',
      checkinText2: 'Any special needs can be managed subject to availability.',
      responsabilita: '6. Guest Responsibilities',
      responsabilitaText: 'The guest undertakes to:',
      responsabilita1: 'use spaces and services with care and respect;',
      responsabilita2: 'respect the Structure\'s rules communicated upon arrival;',
      responsabilita3: 'compensate for any damage caused during the stay.',
      limitazioni: '7. Limitations of Liability',
      limitazioniText: 'The owner of the Structures is not responsible for:',
      limitazioni1: 'interruptions of external services not directly controllable (e.g. electricity, internet, water);',
      limitazioni2: 'loss, theft or damage to guests\' personal belongings not adequately stored.',
      privacy: '8. Privacy',
      privacyText: 'The processing of personal data takes place in compliance with current regulations. More information is available in the site\'s Privacy Policy.',
      modifiche: '9. Changes to Terms and Conditions',
      modificheText: 'We reserve the right to modify these Terms and Conditions at any time. Changes will take effect from publication on the site.',
      legge: '10. Applicable law',
      leggeText: 'These Terms and Conditions are governed by Italian law. For any disputes, the court territorially provided for by law has jurisdiction.'
    }
  }

  const t = translations[language]

  // Imposta il titolo della pagina
  useEffect(() => {
    document.title = t.title
  }, [language, t.title])

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
            {t.pageTitle}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="prose prose-lg max-w-none">
          <p className="text-base font-questrial text-gray-700 mb-8 text-justify">
            {t.intro1}
          </p>

          <p className="text-base font-questrial text-gray-700 mb-12 text-justify">
            {t.intro2}
          </p>

          <div className="space-y-8">
            {/* 1. Oggetto del servizio */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.oggetto}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.oggettoText}
              </p>
            </section>

            {/* 2. Prenotazioni */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.prenotazioni}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.prenotazioniText1}
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.prenotazioniText2}
              </p>
            </section>

            {/* 3. Prezzi e Pagamenti */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.prezzi}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.prezziText1}
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.prezziText2}
              </p>
            </section>

            {/* 4. Politiche di Cancellazione */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.cancellazione}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-6">
                {t.cancellazioneText}
              </p>

              {/* 4.1 Villa Gelvi */}
              <div className="ml-4 md:ml-8 mb-6">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  {t.gelvi}
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify mb-2">
                  {t.gelviText1}
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify">
                  {t.gelviText2}
                </p>
              </div>

              {/* 4.2 Villa MiraScopello */}
              <div className="ml-4 md:ml-8">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  {t.mirascopello}
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify mb-2">
                  {t.mirascopelloText1}
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify">
                  {t.mirascopelloText2}
                </p>
              </div>
            </section>

            {/* 5. Check-in e Check-out */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.checkin}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.checkinText1}
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.checkinText2}
              </p>
            </section>

            {/* 6. Responsabilità degli Ospiti */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.responsabilita}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.responsabilitaText}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">{t.responsabilita1}</li>
                <li className="text-justify">{t.responsabilita2}</li>
                <li className="text-justify">{t.responsabilita3}</li>
              </ul>
            </section>

            {/* 7. Limitazioni di Responsabilità */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.limitazioni}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.limitazioniText}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">{t.limitazioni1}</li>
                <li className="text-justify">{t.limitazioni2}</li>
              </ul>
            </section>

            {/* 8. Privacy */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.privacy}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.privacyText}
              </p>
            </section>

            {/* 9. Modifiche ai Termini e Condizioni */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.modifiche}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.modificheText}
              </p>
            </section>

            {/* 10. Legge applicabile */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.legge}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.leggeText}
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

