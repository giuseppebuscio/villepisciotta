import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const CookiePolicy = () => {
  const { language } = useLanguage()

  const translations = {
    it: {
      title: 'Cookie Policy - Ville Pisciotta | Gestione Cookie',
      pageTitle: 'Cookie Policy',
      intro1: 'La presente Cookie Policy descrive le tipologie di cookie utilizzate dal sito web dedicato a Villa Gelvi e Villa MiraScopello (di seguito "il Sito") e le modalità di gestione degli stessi.',
      intro2: 'Il trattamento dei dati personali tramite cookie avviene nel rispetto del Regolamento UE 2016/679 (GDPR) e della normativa italiana vigente, in particolare del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.',
      cosaSono: '1. Cosa sono i cookie',
      cosaSonoText1: 'I cookie sono piccoli file di testo che vengono memorizzati sul dispositivo dell\'utente (computer, tablet, smartphone) quando visita un sito web. I cookie permettono al sito di riconoscere il dispositivo dell\'utente e memorizzare alcune informazioni sulle sue preferenze o azioni passate.',
      cosaSonoText2: 'I cookie possono essere "di prima parte" (impostati direttamente dal sito visitato) o "di terza parte" (impostati da altri siti o servizi).',
      tipologie: '2. Tipologie di cookie utilizzati',
      tecnici: '2.1 Cookie tecnici (necessari)',
      tecniciText1: 'Il Sito utilizza esclusivamente cookie tecnici strettamente necessari per il funzionamento del sito stesso. Questi cookie non richiedono il consenso dell\'utente ai sensi della normativa vigente.',
      tecniciText2: 'I cookie tecnici utilizzati hanno le seguenti finalità:',
      tecnici1: 'Garantire il corretto funzionamento del sito e delle sue funzionalità',
      tecnici2: 'Memorizzare le preferenze di navigazione dell\'utente',
      tecnici3: 'Mantenere la sessione dell\'utente durante la navigazione',
      tecnici4: 'Garantire la sicurezza e prevenire attività fraudolente',
      tecniciText3: 'Questi cookie hanno una durata limitata e vengono eliminati automaticamente al termine della sessione di navigazione o dopo un periodo di tempo prestabilito.',
      terzeParti: '2.2 Cookie di terze parti',
      terzePartiText1: 'Il Sito integra servizi di terze parti che possono installare cookie sul dispositivo dell\'utente:',
      googleMaps: 'Google Maps',
      googleMapsText1: 'Il Sito utilizza Google Maps tramite iframe per visualizzare le mappe interattive delle strutture. Google Maps può installare cookie tecnici e di servizio per il corretto funzionamento del servizio.',
      googleMapsText2: 'Per maggiori informazioni sui cookie utilizzati da Google Maps, si prega di consultare l\'informativa privacy di Google e la Cookie Policy di Google.',
      nonUtilizzati: '3. Cookie non utilizzati',
      nonUtilizzatiText: 'Il Sito non utilizza:',
      nonUtilizzati1: 'Cookie di profilazione o marketing',
      nonUtilizzati2: 'Cookie di analisi statistica (come Google Analytics)',
      nonUtilizzati3: 'Cookie pubblicitari o di tracciamento',
      nonUtilizzati4: 'Cookie di social network (come Facebook, Instagram, Twitter)',
      nonUtilizzati5: 'Cookie di remarketing o retargeting',
      durata: '4. Durata dei cookie',
      durataText: 'I cookie tecnici utilizzati dal Sito possono essere:',
      durata1: 'Cookie di sessione: vengono eliminati automaticamente alla chiusura del browser',
      durata2: 'Cookie persistenti: rimangono memorizzati sul dispositivo per un periodo limitato, necessario al funzionamento del sito',
      durataText2: 'I cookie di terze parti (come quelli di Google Maps) seguono le politiche di durata stabilite dai rispettivi fornitori.',
      gestione: '5. Gestione dei cookie',
      gestioneText: 'L\'utente può gestire o disabilitare i cookie attraverso le impostazioni del proprio browser. Di seguito i link alle istruzioni per i browser più comuni:',
      gestioneNota: 'Nota importante: La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del Sito e impedire l\'accesso ad alcune funzionalità.',
      consenso: '6. Consenso',
      consensoText1: 'Poiché il Sito utilizza esclusivamente cookie tecnici necessari al funzionamento, non è richiesto il consenso esplicito dell\'utente ai sensi della normativa vigente.',
      consensoText2: 'L\'utilizzo del Sito implica l\'accettazione dell\'uso dei cookie tecnici. L\'utente può comunque gestire o disabilitare i cookie attraverso le impostazioni del browser come indicato nella sezione precedente.',
      titolare: '7. Titolare del trattamento',
      titolareText1: 'Il Titolare del trattamento dei dati personali raccolti tramite cookie è:',
      titolareText2: 'Per qualsiasi richiesta relativa all\'utilizzo dei cookie o al trattamento dei dati personali, è possibile contattare il Titolare all\'indirizzo email indicato.',
      modifiche: '8. Modifiche alla Cookie Policy',
      modificheText1: 'Il Titolare si riserva il diritto di aggiornare la presente Cookie Policy in qualsiasi momento per riflettere eventuali modifiche nell\'utilizzo dei cookie o per adeguarsi a nuove normative.',
      modificheText2: 'Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Si consiglia di consultare periodicamente questa pagina per essere informati sull\'utilizzo dei cookie.',
      linkUtili: '9. Link utili',
      linkUtiliText: 'Per maggiori informazioni sui cookie e sulla privacy:',
      linkUtili1: 'Privacy Policy del Sito',
      linkUtili2: 'Garante per la Protezione dei Dati Personali',
      linkUtili3: 'Your Online Choices (gestione cookie pubblicitari)'
    },
    en: {
      title: 'Cookie Policy - Ville Pisciotta | Cookie Management',
      pageTitle: 'Cookie Policy',
      intro1: 'This Cookie Policy describes the types of cookies used by the website dedicated to Villa Gelvi and Villa MiraScopello (hereinafter "the Site") and the methods of managing them.',
      intro2: 'The processing of personal data through cookies takes place in compliance with EU Regulation 2016/679 (GDPR) and current Italian legislation, in particular Legislative Decree 196/2003 as amended by Legislative Decree 101/2018.',
      cosaSono: '1. What are cookies',
      cosaSonoText1: 'Cookies are small text files that are stored on the user\'s device (computer, tablet, smartphone) when visiting a website. Cookies allow the site to recognize the user\'s device and store some information about their preferences or past actions.',
      cosaSonoText2: 'Cookies can be "first-party" (set directly by the visited site) or "third-party" (set by other sites or services).',
      tipologie: '2. Types of cookies used',
      tecnici: '2.1 Technical cookies (necessary)',
      tecniciText1: 'The Site uses exclusively technical cookies strictly necessary for the operation of the site itself. These cookies do not require user consent under current legislation.',
      tecniciText2: 'The technical cookies used have the following purposes:',
      tecnici1: 'Ensure the correct functioning of the site and its features',
      tecnici2: 'Store user navigation preferences',
      tecnici3: 'Maintain the user\'s session during navigation',
      tecnici4: 'Ensure security and prevent fraudulent activity',
      tecniciText3: 'These cookies have a limited duration and are automatically deleted at the end of the navigation session or after a predetermined period of time.',
      terzeParti: '2.2 Third-party cookies',
      terzePartiText1: 'The Site integrates third-party services that may install cookies on the user\'s device:',
      googleMaps: 'Google Maps',
      googleMapsText1: 'The Site uses Google Maps via iframe to display interactive maps of the structures. Google Maps may install technical and service cookies for the correct functioning of the service.',
      googleMapsText2: 'For more information on cookies used by Google Maps, please consult Google\'s privacy policy and Google\'s Cookie Policy.',
      nonUtilizzati: '3. Cookies not used',
      nonUtilizzatiText: 'The Site does not use:',
      nonUtilizzati1: 'Profiling or marketing cookies',
      nonUtilizzati2: 'Statistical analysis cookies (such as Google Analytics)',
      nonUtilizzati3: 'Advertising or tracking cookies',
      nonUtilizzati4: 'Social network cookies (such as Facebook, Instagram, Twitter)',
      nonUtilizzati5: 'Remarketing or retargeting cookies',
      durata: '4. Cookie duration',
      durataText: 'The technical cookies used by the Site can be:',
      durata1: 'Session cookies: they are automatically deleted when the browser is closed',
      durata2: 'Persistent cookies: they remain stored on the device for a limited period, necessary for the site\'s operation',
      durataText2: 'Third-party cookies (such as those from Google Maps) follow the duration policies established by their respective providers.',
      gestione: '5. Cookie management',
      gestioneText: 'The user can manage or disable cookies through their browser settings. Below are links to instructions for the most common browsers:',
      gestioneNota: 'Important note: Disabling technical cookies may compromise the correct functioning of the Site and prevent access to some features.',
      consenso: '6. Consent',
      consensoText1: 'Since the Site uses exclusively technical cookies necessary for operation, explicit user consent is not required under current legislation.',
      consensoText2: 'Use of the Site implies acceptance of the use of technical cookies. The user can still manage or disable cookies through browser settings as indicated in the previous section.',
      titolare: '7. Data Controller',
      titolareText1: 'The Controller of personal data collected through cookies is:',
      titolareText2: 'For any request relating to the use of cookies or the processing of personal data, you can contact the Controller at the email address indicated.',
      modifiche: '8. Changes to Cookie Policy',
      modificheText1: 'The Controller reserves the right to update this Cookie Policy at any time to reflect any changes in cookie usage or to comply with new regulations.',
      modificheText2: 'Changes will be published on this page with indication of the last update date. It is recommended to periodically consult this page to be informed about cookie usage.',
      linkUtili: '9. Useful links',
      linkUtiliText: 'For more information on cookies and privacy:',
      linkUtili1: 'Site Privacy Policy',
      linkUtili2: 'Data Protection Authority',
      linkUtili3: 'Your Online Choices (advertising cookie management)'
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
            {/* 1. Cosa sono i cookie */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.cosaSono}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.cosaSonoText1}
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.cosaSonoText2}
              </p>
            </section>

            {/* 2. Tipologie di cookie utilizzati */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.tipologie}
              </h2>

              {/* 2.1 Cookie tecnici */}
              <div className="ml-4 md:ml-8 mb-6">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  {t.tecnici}
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                  {t.tecniciText1}
                </p>
                <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                  {t.tecniciText2}
                </p>
                <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                  <li className="text-justify">{t.tecnici1}</li>
                  <li className="text-justify">{t.tecnici2}</li>
                  <li className="text-justify">{t.tecnici3}</li>
                  <li className="text-justify">{t.tecnici4}</li>
                </ul>
                <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                  {t.tecniciText3}
                </p>
              </div>

              {/* 2.2 Cookie di terze parti */}
              <div className="ml-4 md:ml-8">
                <h3 className="text-xl md:text-2xl font-playfair font-bold text-primary mb-3">
                  {t.terzeParti}
                </h3>
                <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                  {t.terzePartiText1}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-lg md:text-xl font-playfair font-semibold text-primary mb-2">
                    {t.googleMaps}
                  </h4>
                  <p className="text-base font-questrial text-gray-700 text-justify mb-2">
                    {t.googleMapsText1}
                  </p>
                  <p className="text-base font-questrial text-gray-700 text-justify">
                    {language === 'it' ? (
                      <>
                        Per maggiori informazioni sui cookie utilizzati da Google Maps, si prega di consultare l'<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">informativa privacy di Google</a> e la <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Cookie Policy di Google</a>.
                      </>
                    ) : (
                      <>
                        For more information on cookies used by Google Maps, please consult <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google's privacy policy</a> and <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google's Cookie Policy</a>.
                      </>
                    )}
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Cookie non utilizzati */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.nonUtilizzati}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                <strong>{language === 'it' ? 'Il Sito' : 'The Site'}</strong> {language === 'it' ? 'non utilizza' : 'does not use'}:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">{t.nonUtilizzati1}</li>
                <li className="text-justify">{t.nonUtilizzati2}</li>
                <li className="text-justify">{t.nonUtilizzati3}</li>
                <li className="text-justify">{t.nonUtilizzati4}</li>
                <li className="text-justify">{t.nonUtilizzati5}</li>
              </ul>
            </section>

            {/* 4. Durata dei cookie */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.durata}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.durataText}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify"><strong>{language === 'it' ? 'Cookie di sessione:' : 'Session cookies:'}</strong> {language === 'it' ? 'vengono eliminati automaticamente alla chiusura del browser' : 'they are automatically deleted when the browser is closed'}</li>
                <li className="text-justify"><strong>{language === 'it' ? 'Cookie persistenti:' : 'Persistent cookies:'}</strong> {language === 'it' ? 'rimangono memorizzati sul dispositivo per un periodo limitato, necessario al funzionamento del sito' : 'they remain stored on the device for a limited period, necessary for the site\'s operation'}</li>
              </ul>
              <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                {t.durataText2}
              </p>
            </section>

            {/* 5. Gestione dei cookie */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.gestione}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.gestioneText}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Chrome</a>
                </li>
                <li className="text-justify">
                  <a href={language === 'it' ? "https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" : "https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Mozilla Firefox</a>
                </li>
                <li className="text-justify">
                  <a href={language === 'it' ? "https://support.apple.com/it-it/guide/safari/sfri11471/mac" : "https://support.apple.com/en-us/guide/safari/sfri11471/mac"} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Safari</a>
                </li>
                <li className="text-justify">
                  <a href={language === 'it' ? "https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" : "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Edge</a>
                </li>
                <li className="text-justify">
                  <a href={language === 'it' ? "https://help.opera.com/it/latest/web-preferences/#cookies" : "https://help.opera.com/en/latest/web-preferences/#cookies"} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Opera</a>
                </li>
              </ul>
              <p className="text-base font-questrial text-gray-700 text-justify mt-4">
                <strong>{language === 'it' ? 'Nota importante:' : 'Important note:'}</strong> {t.gestioneNota}
              </p>
            </section>

            {/* 6. Consenso */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.consenso}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.consensoText1}
              </p>
              <p className="text-base font-questrial text-gray-700 text-justify">
                {t.consensoText2}
              </p>
            </section>

            {/* 7. Titolare del trattamento */}
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

            {/* 8. Modifiche alla Cookie Policy */}
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

            {/* 9. Link utili */}
            <section>
              <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
                {t.linkUtili}
              </h2>
              <p className="text-base font-questrial text-gray-700 text-justify mb-4">
                {t.linkUtiliText}
              </p>
              <ul className="list-disc list-inside space-y-2 text-base font-questrial text-gray-700 ml-4">
                <li className="text-justify">
                  <a href="/privacy" className="text-accent hover:underline">{t.linkUtili1}</a>
                </li>
                <li className="text-justify">
                  <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{t.linkUtili2}</a>
                </li>
                <li className="text-justify">
                  <a href={language === 'it' ? "https://www.youronlinechoices.eu/it/" : "https://www.youronlinechoices.eu/"} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{t.linkUtili3}</a>
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

