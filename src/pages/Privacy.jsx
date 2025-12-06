import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Privacy = () => {
  const { language } = useLanguage()

  const translations = {
    it: {
      title: 'Privacy Policy - Ville Pisciotta | Trattamento Dati Personali',
      pageTitle: 'Privacy Policy',
      intro1: 'La presente Informativa Privacy descrive le modalità di trattamento dei dati personali degli utenti che visitano o utilizzano il sito web dedicato a Villa Gelvi e Villa MiraScopello (di seguito "il Sito").',
      intro2: 'Il trattamento avviene nel rispetto del Regolamento UE 2016/679 (GDPR) e della normativa italiana vigente.',
      titolare: '1. Titolare del Trattamento',
      titolareText1: 'Il Titolare del trattamento è:',
      titolareText2: 'Il Titolare può essere contattato per qualsiasi richiesta relativa al trattamento dei dati personali.',
      tipologie: '2. Tipologie di dati raccolti',
      datiVolontari: '2.1 Dati forniti volontariamente dall\'utente',
      datiVolontariText1: 'Attraverso il form di richiesta informazioni/prenotazioni, l\'utente può comunicare:',
      datiVolontariText2: 'Eventuali ulteriori informazioni inserite nel messaggio rientrano nei dati volontariamente forniti dall\'utente.',
      datiAutomatici: '2.2 Dati raccolti automaticamente',
      datiAutomaticiText1: 'Il Sito può raccogliere automaticamente informazioni tecniche (es. indirizzo IP, tipo di browser, data e ora della visita) necessarie per il funzionamento e la sicurezza del Sito.',
      datiAutomaticiText2: 'Questi dati non vengono utilizzati per finalità di profilazione, marketing o analisi statistica.',
      cookie: '2.3 Cookie',
      cookieText1: 'Il sito utilizza esclusivamente cookie tecnici necessari al funzionamento.',
      cookieText2: 'Non vengono utilizzati sistemi di analisi come Google Analytics né cookie di profilazione.',
      cookieText3: 'Il sito integra una mappa tramite Google Maps iframe, che può installare cookie tecnici o di servizi esterni.',
      finalita: '3. Finalità del trattamento',
      finalitaText: 'I dati personali raccolti sono trattati per le seguenti finalità:',
      finalita1: 'Rispondere alle richieste di informazioni inviate tramite il form di contatto.',
      finalita2: 'Gestire richieste di prenotazione presso Villa Gelvi e Villa MiraScopello.',
      finalita3: 'Comunicazioni amministrative o informative relative alle richieste dell\'utente.',
      finalita4: 'Adempimento di obblighi di legge eventualmente applicabili.',
      finalita5: 'Garantire la sicurezza e il corretto funzionamento del sito.',
      finalitaText2: 'Non vengono effettuate attività di marketing o newsletter.',
      baseGiuridica: '4. Base giuridica del trattamento',
      baseGiuridica1: 'Esecuzione di misure precontrattuali (art. 6.1.b GDPR): richieste di informazioni e prenotazioni.',
      baseGiuridica2: 'Adempimento di obblighi legali (art. 6.1.c GDPR).',
      baseGiuridica3: 'Legittimo interesse del Titolare (art. 6.1.f GDPR) limitatamente alla sicurezza e al corretto funzionamento del sito.',
      modalita: '5. Modalità del trattamento',
      modalitaText: 'Il trattamento viene effettuato mediante strumenti elettronici e/o manuali, adottando misure tecniche e organizzative idonee a proteggere i dati da accessi non autorizzati, perdita o diffusione.',
      conservazione: '6. Conservazione dei dati',
      conservazione1: 'Dati inviati tramite form di contatto/prenotazione: fino a 12 mesi dalla comunicazione.',
      conservazione2: 'Dati tecnici di navigazione: secondo i tempi tecnici del server Aruba.',
      conservazioneText: 'I dati non necessari vengono eliminati o anonimizzati.',
      comunicazione: '7. Comunicazione dei dati a terzi',
      comunicazioneText: 'I dati possono essere comunicati esclusivamente a:',
      comunicazione1: 'Aruba S.p.A., per il servizio di hosting del sito.',
      comunicazione2: 'Fornitori tecnici incaricati della manutenzione del sito (se presenti).',
      comunicazione3: 'Autorità pubbliche se richiesto da obblighi di legge.',
      comunicazioneText2: 'Non vengono comunicati a terzi per finalità commerciali né venduti.',
      serviziEsterni: '8. Servizi esterni integrati',
      googleMaps: 'Google Maps (iframe)',
      googleMapsText: 'L\'integrazione della mappa può comportare il trattamento di dati da parte di Google Ireland Ltd., sulla base dell\'informativa privacy di Google.',
      whatsapp: 'Pulsante WhatsApp',
      whatsappText1: 'Il pulsante presente sul sito rimanda all\'app WhatsApp.',
      whatsappText2: 'Nessun dato viene raccolto automaticamente dal sito: l\'utente decide volontariamente di aprire la chat con il Titolare.',
      trasferimento: '9. Trasferimento dei dati extra-UE',
      trasferimentoText: 'Eventuali trasferimenti tramite servizi Google avvengono nel rispetto degli artt. 44–49 del GDPR, sulla base delle garanzie fornite dal fornitore.',
      diritti: '10. Diritti dell\'utente',
      dirittiText: 'L\'utente, in qualità di interessato, può esercitare i seguenti diritti:',
      diritti1: 'Accesso ai dati personali',
      diritti2: 'Rettifica',
      diritti3: 'Cancellazione (diritto all\'oblio)',
      diritti4: 'Limitazione del trattamento',
      diritti5: 'Portabilità dei dati',
      diritti6: 'Opposizione al trattamento',
      diritti7: 'Reclamo al Garante per la Protezione dei Dati Personali',
      dirittiText2: 'Per esercitare tali diritti:',
      minori: '11. Minori',
      minoriText1: 'Il Sito non raccoglie volontariamente dati di minori di 18 anni.',
      minoriText2: 'Eventuali dati forniti verranno immediatamente cancellati.',
      modifiche: '12. Modifiche alla presente Informativa',
      modificheText1: 'Il Titolare si riserva il diritto di aggiornare la presente Privacy Policy in qualsiasi momento.',
      modificheText2: 'Le modifiche saranno pubblicate su questa pagina.'
    },
    en: {
      title: 'Privacy Policy - Ville Pisciotta | Personal Data Processing',
      pageTitle: 'Privacy Policy',
      intro1: 'This Privacy Policy describes the methods of processing personal data of users who visit or use the website dedicated to Villa Gelvi and Villa MiraScopello (hereinafter "the Site").',
      intro2: 'Processing takes place in compliance with EU Regulation 2016/679 (GDPR) and current Italian legislation.',
      titolare: '1. Data Controller',
      titolareText1: 'The Data Controller is:',
      titolareText2: 'The Controller can be contacted for any request relating to the processing of personal data.',
      tipologie: '2. Types of data collected',
      datiVolontari: '2.1 Data voluntarily provided by the user',
      datiVolontariText1: 'Through the information/booking request form, the user can communicate:',
      datiVolontariText2: 'Any additional information entered in the message falls within the data voluntarily provided by the user.',
      datiAutomatici: '2.2 Automatically collected data',
      datiAutomaticiText1: 'The Site may automatically collect technical information (e.g. IP address, browser type, date and time of visit) necessary for the operation and security of the Site.',
      datiAutomaticiText2: 'This data is not used for profiling, marketing or statistical analysis purposes.',
      cookie: '2.3 Cookies',
      cookieText1: 'The site uses exclusively technical cookies necessary for operation.',
      cookieText2: 'Analysis systems such as Google Analytics or profiling cookies are not used.',
      cookieText3: 'The site integrates a map via Google Maps iframe, which may install technical cookies or external services.',
      finalita: '3. Purpose of processing',
      finalitaText: 'The personal data collected is processed for the following purposes:',
      finalita1: 'Respond to information requests sent through the contact form.',
      finalita2: 'Manage booking requests at Villa Gelvi and Villa MiraScopello.',
      finalita3: 'Administrative or informative communications relating to user requests.',
      finalita4: 'Compliance with legal obligations that may apply.',
      finalita5: 'Ensure the security and proper functioning of the site.',
      finalitaText2: 'No marketing or newsletter activities are carried out.',
      baseGiuridica: '4. Legal basis for processing',
      baseGiuridica1: 'Execution of pre-contractual measures (art. 6.1.b GDPR): information and booking requests.',
      baseGiuridica2: 'Compliance with legal obligations (art. 6.1.c GDPR).',
      baseGiuridica3: 'Legitimate interest of the Controller (art. 6.1.f GDPR) limited to the security and proper functioning of the site.',
      modalita: '5. Processing methods',
      modalitaText: 'Processing is carried out using electronic and/or manual tools, adopting technical and organizational measures suitable for protecting data from unauthorized access, loss or disclosure.',
      conservazione: '6. Data retention',
      conservazione1: 'Data sent via contact/booking form: up to 12 months from communication.',
      conservazione2: 'Technical navigation data: according to Aruba server technical times.',
      conservazioneText: 'Unnecessary data is deleted or anonymized.',
      comunicazione: '7. Communication of data to third parties',
      comunicazioneText: 'Data may be communicated exclusively to:',
      comunicazione1: 'Aruba S.p.A., for the site hosting service.',
      comunicazione2: 'Technical suppliers in charge of site maintenance (if any).',
      comunicazione3: 'Public authorities if required by legal obligations.',
      comunicazioneText2: 'They are not communicated to third parties for commercial purposes nor sold.',
      serviziEsterni: '8. Integrated external services',
      googleMaps: 'Google Maps (iframe)',
      googleMapsText: 'The map integration may involve data processing by Google Ireland Ltd., based on Google\'s privacy policy.',
      whatsapp: 'WhatsApp button',
      whatsappText1: 'The button on the site redirects to the WhatsApp app.',
      whatsappText2: 'No data is automatically collected by the site: the user voluntarily decides to open the chat with the Controller.',
      trasferimento: '9. Transfer of data outside the EU',
      trasferimentoText: 'Any transfers via Google services take place in compliance with articles 44-49 of the GDPR, based on the guarantees provided by the supplier.',
      diritti: '10. User rights',
      dirittiText: 'The user, as a data subject, can exercise the following rights:',
      diritti1: 'Access to personal data',
      diritti2: 'Rectification',
      diritti3: 'Deletion (right to be forgotten)',
      diritti4: 'Limitation of processing',
      diritti5: 'Data portability',
      diritti6: 'Opposition to processing',
      diritti7: 'Complaint to the Data Protection Authority',
      dirittiText2: 'To exercise these rights:',
      minori: '11. Minors',
      minoriText1: 'The Site does not voluntarily collect data from minors under 18 years of age.',
      minoriText2: 'Any data provided will be immediately deleted.',
      modifiche: '12. Changes to this Policy',
      modificheText1: 'The Controller reserves the right to update this Privacy Policy at any time.',
      modificheText2: 'Changes will be published on this page.'
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
            {/* 1. Titolare del Trattamento */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.titolare}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.titolareText1}
              </p>
              <div className="ml-4 md:ml-8 text-base font-questrial text-gray-700">
                <p className="mb-2"><strong>Ugo Pisciotta</strong></p>
                <p className="mb-2">Via Enrico Fermi, 1</p>
                <p className="mb-2">Castellammare del Golfo (TP)</p>
                <p className="mb-4">Email: <a href="mailto:compliance@villepisciotta.com" className="text-accent hover:underline">compliance@villepisciotta.com</a></p>
              </div>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.titolareText2}
              </p>
            </section>

            {/* 2. Tipologie di dati raccolti */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.tipologie}
              </h2>

              {/* 2.1 Dati forniti volontariamente dall'utente */}
              <div className="ml-4 md:ml-8 mb-6">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  {t.datiVolontari}
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                  {t.datiVolontariText1}
                </p>
                <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                  <li className="text-justify">{language === 'it' ? 'Nome' : 'Name'}</li>
                  <li className="text-justify">{language === 'it' ? 'Cognome' : 'Surname'}</li>
                  <li className="text-justify">{language === 'it' ? 'Indirizzo email' : 'Email address'}</li>
                </ul>
                <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                  {t.datiVolontariText2}
                </p>
              </div>

              {/* 2.2 Dati raccolti automaticamente */}
              <div className="ml-4 md:ml-8 mb-6">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  {t.datiAutomatici}
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify">
                  {t.datiAutomaticiText1}
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                  {t.datiAutomaticiText2}
                </p>
              </div>

              {/* 2.3 Cookie */}
              <div className="ml-4 md:ml-8">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  {t.cookie}
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify mb-2">
                  {t.cookieText1}
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify mb-2">
                  {t.cookieText2}
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify">
                  {t.cookieText3}
                </p>
              </div>
            </section>

            {/* 3. Finalità del trattamento */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.finalita}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.finalitaText}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">{t.finalita1}</li>
                <li className="text-justify">{t.finalita2}</li>
                <li className="text-justify">{t.finalita3}</li>
                <li className="text-justify">{t.finalita4}</li>
                <li className="text-justify">{t.finalita5}</li>
              </ul>
              <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                {t.finalitaText2}
              </p>
            </section>

            {/* 4. Base giuridica del trattamento */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.baseGiuridica}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">{t.baseGiuridica1}</li>
                <li className="text-justify">{t.baseGiuridica2}</li>
                <li className="text-justify">{t.baseGiuridica3}</li>
              </ul>
            </section>

            {/* 5. Modalità del trattamento */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.modalita}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.modalitaText}
              </p>
            </section>

            {/* 6. Conservazione dei dati */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.conservazione}
              </h2>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">{t.conservazione1}</li>
                <li className="text-justify">{t.conservazione2}</li>
              </ul>
              <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                {t.conservazioneText}
              </p>
            </section>

            {/* 7. Comunicazione dei dati a terzi */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.comunicazione}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.comunicazioneText}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">{t.comunicazione1}</li>
                <li className="text-justify">{t.comunicazione2}</li>
                <li className="text-justify">{t.comunicazione3}</li>
              </ul>
              <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                {t.comunicazioneText2}
              </p>
            </section>

            {/* 8. Servizi esterni integrati */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.serviziEsterni}
              </h2>
              
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-playfair font-semibold text-primary mb-2">
                  {t.googleMaps}
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify">
                  {t.googleMapsText}
                </p>
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-playfair font-semibold text-primary mb-2">
                  {t.whatsapp}
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify">
                  {t.whatsappText1}
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify mt-2">
                  {t.whatsappText2}
                </p>
              </div>
            </section>

            {/* 9. Trasferimento dei dati extra-UE */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.trasferimento}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.trasferimentoText}
              </p>
            </section>

            {/* 10. Diritti dell'utente */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.diritti}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.dirittiText}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">{t.diritti1}</li>
                <li className="text-justify">{t.diritti2}</li>
                <li className="text-justify">{t.diritti3}</li>
                <li className="text-justify">{t.diritti4}</li>
                <li className="text-justify">{t.diritti5}</li>
                <li className="text-justify">{t.diritti6}</li>
                <li className="text-justify">{t.diritti7}</li>
              </ul>
              <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                {t.dirittiText2} <a href="mailto:compliance@villepisciotta.com" className="text-accent hover:underline">compliance@villepisciotta.com</a>
              </p>
            </section>

            {/* 11. Minori */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.minori}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.minoriText1}
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify mt-2">
                {t.minoriText2}
              </p>
            </section>

            {/* 12. Modifiche alla presente Informativa */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.modifiche}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.modificheText1}
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify mt-2">
                {t.modificheText2}
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

