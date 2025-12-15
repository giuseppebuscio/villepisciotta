import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import VillaSelection from '../components/VillaSelection'
import Footer from '../components/Footer'
import { MapPin, Users, Home as HomeIcon, Heart } from 'lucide-react'
import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Home = () => {
  const { language } = useLanguage()

  const translations = {
    it: {
      title: 'Ville Pisciotta - Ville e Appartamenti in Sicilia | Castellammare del Golfo e Scopello',
      whyChoose: 'Perché scegliere le nostre ville',
      whyChooseDesc: 'Esperienze uniche che combinano lusso, comfort e autenticità siciliana',
      comfort: 'Comfort e design',
      comfortDesc: 'Spazi ampi e arredati con cura per il massimo comfort',
      location: 'Posizioni strategiche',
      locationDesc: 'Vicino a spiagge, borghi storici e attrazioni turistiche',
      view: 'Accoglienza autentica',
      viewDesc: 'Ospitalità calorosa e attenzione costante per farti sentire a casa',
      ourSpaces: 'I nostri ambienti',
      ourSpacesDesc: 'Scopri gli spazi e gli ambienti delle nostre ville di lusso',
      villaMiraScopello: 'Villa MiraScopello',
      villaGelvi: 'Villa Gelvi',
      bookVacation: 'Prenota la tua vacanza',
      bookVacationDesc: 'Contattaci per maggiori informazioni e disponibilità',
      callNow: 'Chiama ora',
      contact: 'Contatti'
    },
    en: {
      title: 'Ville Pisciotta - Villas and Apartments in Sicily | Castellammare del Golfo and Scopello',
      whyChoose: 'Why choose our villas',
      whyChooseDesc: 'Unique experiences combining luxury, comfort and Sicilian authenticity',
      comfort: 'Comfort and design',
      comfortDesc: 'Spacious spaces carefully furnished for maximum comfort',
      location: 'Strategic locations',
      locationDesc: 'Close to beaches, historic villages and tourist attractions',
      view: 'Authentic hospitality',
      viewDesc: 'Warm hospitality and constant attention to make you feel at home',
      ourSpaces: 'Our spaces',
      ourSpacesDesc: 'Discover the spaces and environments of our luxury villas',
      villaMiraScopello: 'Villa MiraScopello',
      villaGelvi: 'Villa Gelvi',
      bookVacation: 'Book your vacation',
      bookVacationDesc: 'Contact us for more information and availability',
      callNow: 'Call now',
      contact: 'Contact'
    }
  }

  const t = translations[language]

  // Imposta il titolo della pagina
  useEffect(() => {
    document.title = t.title
  }, [language, t.title])

  // Gestione fade-in per tutti gli elementi
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            // Determina quale animazione usare
            if (el.classList.contains('fade-in-hero-hidden')) {
              el.classList.add('fade-in-hero')
              el.classList.remove('fade-in-hero-hidden')
            } else {
              el.classList.add('fade-in')
              el.classList.remove('fade-in-hidden')
              // Rimuovi la classe fade-in dopo l'animazione per permettere agli hover di funzionare
              setTimeout(() => {
                el.classList.remove('fade-in')
              }, 600)
            }
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    // Seleziona tutti gli elementi testo, button e immagini nella pagina principale
    const mainContainer = document.querySelector('.min-h-screen')
    if (!mainContainer) return

    // Identifica la hero section - è il componente Hero che contiene il div con h-screen
    const navElement = mainContainer.querySelector('nav')
    let heroSection = null
    let heroImagesContainer = null
    if (navElement && navElement.nextElementSibling) {
      const nextSibling = navElement.nextElementSibling
      // Verifica se è la hero section (ha classe relative e h-screen)
      if (nextSibling.classList.contains('relative') && nextSibling.classList.contains('h-screen')) {
        heroSection = nextSibling
        // Trova il container delle immagini di sfondo (primo div dentro la hero)
        heroImagesContainer = nextSibling.querySelector('.relative.h-full')
      }
    }

    // Elementi normali (con transform fade-in)
    const elements = mainContainer.querySelectorAll(
      'h1:not([class*="navbar"]):not([class*="footer"]), ' +
      'h2:not([class*="navbar"]):not([class*="footer"]), ' +
      'h3:not([class*="navbar"]):not([class*="footer"]), ' +
      'p:not([class*="navbar"]):not([class*="footer"]):not([class*="absolute"]), ' +
      'span:not([class*="navbar"]):not([class*="footer"]):not([class*="absolute"]), ' +
      'button:not([class*="navbar"]):not([class*="footer"]), ' +
      'svg:not([class*="navbar"]):not([class*="footer"])'
    )
    
    // Elementi con hover (immagini e link) - solo opacity fade-in (senza transform)
    // Include anche i link della hero (anche quelli con href che inizia con #)
    const hoverElements = mainContainer.querySelectorAll(
      'img:not([class*="navbar"]):not([class*="footer"]):not([src*="logo"]), ' +
      'a:not([class*="navbar"]):not([class*="footer"])'
    )

    elements.forEach((el, index) => {
      // Escludi navbar, footer e lightbox
      const isInNav = el.closest('nav')
      const isInFooter = el.closest('footer')
      const isInLightbox = el.closest('[class*="lightbox"]') || el.closest('[role="dialog"]')
      
      // Escludi solo le immagini di sfondo della hero
      const isHeroBackgroundImage = heroImagesContainer && heroImagesContainer.contains(el) && el.tagName === 'IMG'
      
      // Verifica se l'elemento è nella hero section (ma non le immagini di sfondo)
      const isInHeroContent = heroSection && heroSection.contains(el) && !isHeroBackgroundImage
      
      // Skip elementi già animati o in componenti specifici
      if (
        !isInNav &&
        !isInFooter &&
        !isInLightbox &&
        !isHeroBackgroundImage &&
        el.offsetParent !== null &&
        !el.classList.contains('fade-in') &&
        !el.classList.contains('fade-in-hero')
      ) {
        // Usa animazione solo-opacity per elementi nella hero
        if (isInHeroContent) {
          el.classList.add('fade-in-hero-hidden')
          setTimeout(() => {
            observer.observe(el)
          }, index * 50)
        } else {
          el.classList.add('fade-in-hidden')
          setTimeout(() => {
            observer.observe(el)
          }, index * 50)
        }
      }
    })

    // Gestisci elementi con hover (solo opacity, no transform)
    hoverElements.forEach((el, index) => {
      const isInNav = el.closest('nav')
      const isInFooter = el.closest('footer')
      const isInLightbox = el.closest('[class*="lightbox"]') || el.closest('[role="dialog"]')
      const isHeroBackgroundImage = heroImagesContainer && heroImagesContainer.contains(el) && el.tagName === 'IMG'
      
      // Verifica se l'elemento è nella hero section (per i link/pulsanti della hero)
      const isInHeroContent = heroSection && heroSection.contains(el) && !isHeroBackgroundImage
      
      if (
        !isInNav &&
        !isInFooter &&
        !isInLightbox &&
        !isHeroBackgroundImage &&
        el.offsetParent !== null &&
        !el.classList.contains('fade-in-hero') &&
        !el.classList.contains('fade-in-hero-hidden')
      ) {
        // Usa animazione fade-in-hero per elementi nella hero (link, pulsanti)
        if (isInHeroContent) {
          el.classList.add('fade-in-hero-hidden')
          setTimeout(() => {
            observer.observe(el)
          }, index * 50)
        } else {
          el.classList.add('fade-in-hero-hidden')
          setTimeout(() => {
            observer.observe(el)
          }, index * 50)
        }
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />

      <VillaSelection />

      {/* Features Section */}
      <section 
        className="relative py-20 px-4 text-white overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/mirascopello/760b8e4b.jpg')`,
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-12">
            <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-white mb-4">
              {t.whyChoose}
            </h2>
            <p className="text-lg text-white/90 font-questrial max-w-2xl mx-auto">
              {t.whyChooseDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <HomeIcon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2 text-white">{t.comfort}</h3>
              <p className="font-questrial text-white/90">
                {t.comfortDesc}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2 text-white">{t.location}</h3>
              <p className="font-questrial text-white/90">
                {t.locationDesc}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2 text-white">{t.view}</h3>
              <p className="font-questrial text-white/90">
                {t.viewDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4">
              {t.ourSpaces}
            </h2>
            <p className="text-lg text-gray-600 font-questrial max-w-2xl mx-auto">
              {t.ourSpacesDesc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/mirascopello/b51e6dd5.webp"
                alt="Interno della villa MiraScopello"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-playfair font-semibold text-lg">{t.villaMiraScopello}</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/mirascopello/4ee47fdf.jpg"
                alt="Camera da letto villa MiraScopello"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-playfair font-semibold text-lg">{t.villaMiraScopello}</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/gelvi/A erice/7149db8d.jpg"
                alt="Camera da letto appartamento Erice Villa Gelvi"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-playfair font-semibold text-lg">
                  Villa Gelvi
                </h3>
                <p className="text-white/80 font-questrial text-sm mt-1">
                  Appartamento Erice
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/gelvi/C segesta/07991ae6.webp"
                alt="Open Space appartamento Segesta"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-playfair font-semibold text-lg">
                  Villa Gelvi
                </h3>
                <p className="text-white/80 font-questrial text-sm mt-1">
                  Appartamento Segesta
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/mirascopello/06aff529.jpg"
                alt="Cucina villa MiraScopello"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-playfair font-semibold text-lg">{t.villaMiraScopello}</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/mirascopello/763795c4.webp"
                alt="Camera da letto villa MiraScopello"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-playfair font-semibold text-lg">{t.villaMiraScopello}</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/gelvi/B scopello/1dcbd96f.jpg"
                alt="Appartamento Scopello Villa Gelvi"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-playfair font-semibold text-lg">
                  Villa Gelvi
                </h3>
                <p className="text-white/80 font-questrial text-sm mt-1">
                  Appartamento Scopello
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/mirascopello/842a7dc8.jpg"
                alt="Vista esterna villa MiraScopello"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-playfair font-semibold text-lg">{t.villaMiraScopello}</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img
                src="/gelvi/D zingaro/1cc79d3c.jpg"
                alt="Appartamento Zingaro Villa Gelvi"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-playfair font-semibold text-lg">
                  Villa Gelvi
                </h3>
                <p className="text-white/80 font-questrial text-sm mt-1">
                  Appartamento Zingaro
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-20 px-4 text-white overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/mirascopello/6f63e8e1.jpg')`,
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="mb-12">
            <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-white mb-4">
              {t.bookVacation}
            </h2>
            <p className="text-lg text-white/90 font-questrial max-w-2xl mx-auto">
              {t.bookVacationDesc}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="tel:+393384394380"
              className="inline-block bg-accent/80 border border-accent hover:bg-[rgb(170,120,40)]/80 text-white px-8 py-3 rounded-none font-questrial transition-all duration-300"
            >
              {t.callNow}
            </a>
            <a
              href="/contatti"
              className="inline-block border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-none font-questrial transition-all duration-300"
            >
              {t.contact}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
