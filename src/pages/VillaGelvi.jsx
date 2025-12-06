import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { 
  Users, 
  Home as HomeIcon, 
  Waves, 
  Wifi, 
  Car, 
  Utensils,
  Bed,
  Bath,
  Square,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Coffee,
  Tv,
  Wind,
  ChefHat,
  Droplets,
  Baby,
  Zap,
  X
} from 'lucide-react'

const VillaGelvi = () => {
  // Imposta il titolo della pagina
  useEffect(() => {
    document.title = 'Villa Gelvi - Appartamenti in Sicilia | Ville Pisciotta'
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

  const [currentReview, setCurrentReview] = useState(0)
  const [selectedApartment, setSelectedApartment] = useState(null)
  const [apartmentImageIndex, setApartmentImageIndex] = useState(0)

  // Mappa degli alt text per le immagini degli appartamenti
  const apartmentImageAltTexts = {
    '/gelvi/A erice/270-a1044ded.webp': 'Interno appartamento Erice Villa Gelvi',
    '/gelvi/A erice/307a22b3.jpg': 'Camera appartamento Erice Villa Gelvi',
    '/gelvi/A erice/5244ac9f.jpg': 'Camera appartamento Erice Villa Gelvi',
    '/gelvi/A erice/7149db8d.jpg': 'Camera appartamento Erice Villa Gelvi',
    '/gelvi/A erice/bd2158ca.jpg': 'Camera appartamento Erice Villa Gelvi',
    '/gelvi/A erice/d4516c1b.jpg': 'Interno appartamento Erice Villa Gelvi',
    '/gelvi/A erice/d6901348.jpg': 'Interno appartamento Erice Villa Gelvi',
    '/gelvi/A erice/dd6475df.webp': 'Interno appartamento Erice Villa Gelvi',
    '/gelvi/A erice/ed4f034f.webp': 'Bagno appartamento Erice Villa Gelvi',
    '/gelvi/B scopello/1dcbd96f.jpg': 'Interno appartamento Scopello Villa Gelvi',
    '/gelvi/B scopello/25568e96.jpg': 'Bagno appartamento Scopello Villa Gelvi',
    '/gelvi/B scopello/3f83c9d0.jpg': 'Camera appartamento Scopello Villa Gelvi',
    '/gelvi/B scopello/50bcf81a.jpg': 'Interno appartamento Scopello Villa Gelvi',
    '/gelvi/B scopello/5a09e5da.jpg': 'Camera appartamento Scopello Villa Gelvi',
    '/gelvi/B scopello/5acb42b2.jpg': 'Interno appartamento Scopello Villa Gelvi',
    '/gelvi/B scopello/8bac6b9c.webp': 'Interno appartamento Scopello Villa Gelvi',
    '/gelvi/B scopello/cd27522f.jpg': 'Interno appartamento Scopello Villa Gelvi',
    '/gelvi/B scopello/f024bb8a.jpg': 'Camera appartamento Scopello Villa Gelvi',
    '/gelvi/B scopello/faef9686.webp': 'Camera appartamento Scopello Villa Gelvi',
    '/gelvi/D zingaro/1cc79d3c.jpg': 'Interno appartamento Zingaro Villa Gelvi',
    '/gelvi/D zingaro/2e0cb1b5.jpg': 'Bagno appartamento Zingaro Villa Gelvi',
    '/gelvi/D zingaro/64835aba.webp': 'Bagno appartamento Zingaro Villa Gelvi',
    '/gelvi/D zingaro/69c7d9e0.jpg': 'Camera appartamento Zingaro Villa Gelvi',
    '/gelvi/D zingaro/6fd0d87e.jpg': 'Camera appartamento Zingaro Villa Gelvi',
    '/gelvi/D zingaro/b1e9b11f.jpg': 'Interno appartamento Zingaro Villa Gelvi',
    '/gelvi/D zingaro/bd39bb7e.jpg': 'Camera appartamento Zingaro Villa Gelvi',
    '/gelvi/D zingaro/ec9dd78e.jpg': 'Interno appartamento Zingaro Villa Gelvi',
    '/gelvi/C segesta/07991ae6.webp': 'Interno appartamento Segesta Villa Gelvi',
    '/gelvi/C segesta/2.jpg': 'Interno appartamento Segesta Villa Gelvi',
    '/gelvi/C segesta/2c922174.webp': 'Interno appartamento Segesta Villa Gelvi',
    '/gelvi/C segesta/44fd025f.jpg': 'Interno appartamento Segesta Villa Gelvi',
    '/gelvi/C segesta/66f8d8ba.webp': 'Interno appartamento Segesta Villa Gelvi',
    '/gelvi/C segesta/6c75cf6d.jpg': 'Camera da letto appartamento Segesta Villa Gelvi',
    '/gelvi/C segesta/b643225b.jpg': 'Interno appartamento Segesta Villa Gelvi',
    '/gelvi/C segesta/c324472c.jpg': 'Camera da letto appartamento Segesta Villa Gelvi',
    '/gelvi/C segesta/d7375b86.jpg': 'Bagno appartamento Segesta Villa Gelvi'
  }

  const apartments = [
    {
      id: 'erice',
      name: 'Appartamento Erice',
      maxPersons: 4,
      sqm: 55,
      description: 'cucina-soggiorno, 1 camera matrimoniale, 1 camera doppia, bagno, 3 balconi',
      images: [
        '/gelvi/A erice/270-a1044ded.webp',
        '/gelvi/A erice/307a22b3.jpg',
        '/gelvi/A erice/5244ac9f.jpg',
        '/gelvi/A erice/7149db8d.jpg',
        '/gelvi/A erice/bd2158ca.jpg',
        '/gelvi/A erice/d4516c1b.jpg',
        '/gelvi/A erice/d6901348.jpg',
        '/gelvi/A erice/dd6475df.webp',
        '/gelvi/A erice/ed4f034f.webp'
      ],
      rooms: 2,
      bathrooms: 1,
      services: [
        'Aria condizionata in tutti gli ambienti',
        'Piano cottura',
        'Forno elettrico',
        'Forno microonde',
        'Lavatrice',
        'Asciugacapelli',
        'Ferro da stiro',
        'Asse da stiro',
        'Moka',
        'Tostapane',
        'Bollitore',
        'Culla',
        'Seggiolone',
        'TV-SAT',
        'WI-FI internet',
        'Rilevatore di monossido di carbonio e gas',
        'Set di lenzuola e asciugamani da bagno cambiati settimanalmente per prenotazioni superiori ad una settimana'
      ],
      prices: [
        { from: '28/03/2026', to: '26/06/2026', price: 60 },
        { from: '27/06/2026', to: '24/07/2026', price: 80 },
        { from: '25/07/2026', to: '07/08/2026', price: 100 },
        { from: '08/08/2026', to: '21/08/2026', price: 130 },
        { from: '22/08/2026', to: '04/09/2026', price: 90 },
        { from: '05/09/2026', to: '25/09/2026', price: 70 },
        { from: '26/09/2026', to: '06/11/2026', price: 60 }
      ],
      notIncluded: [
        'Deposito cauzionale rimborsabile: € 100',
        'Tassa di soggiorno: € 1,50/persona',
        'Pulizia finale: € 60'
      ]
    },
    {
      id: 'scopello',
      name: 'Appartamento Scopello',
      maxPersons: 4,
      sqm: 60,
      description: 'cucina-soggiorno, 1 camera matrimoniale, 1 camera doppia, bagno',
      images: [
        '/gelvi/B scopello/1dcbd96f.jpg',
        '/gelvi/B scopello/25568e96.jpg',
        '/gelvi/B scopello/3f83c9d0.jpg',
        '/gelvi/B scopello/50bcf81a.jpg',
        '/gelvi/B scopello/5a09e5da.jpg',
        '/gelvi/B scopello/5acb42b2.jpg',
        '/gelvi/B scopello/8bac6b9c.webp',
        '/gelvi/B scopello/cd27522f.jpg',
        '/gelvi/B scopello/f024bb8a.jpg',
        '/gelvi/B scopello/faef9686.webp'
      ],
      rooms: 2,
      bathrooms: 1,
      services: [
        'Aria condizionata in tutti gli ambienti',
        'Piano cottura',
        'Forno elettrico',
        'Forno microonde',
        'Lavatrice',
        'Asciugacapelli',
        'Ferro da stiro',
        'Asse da stiro',
        'Moka',
        'Tostapane',
        'Bollitore',
        'Culla',
        'Seggiolone',
        'TV-SAT',
        'WI-FI internet',
        'Rilevatore di monossido di carbonio e gas',
        'Set di lenzuola e asciugamani da bagno cambiati settimanalmente per prenotazioni superiori ad una settimana'
      ],
      prices: [
        { from: '28/03/2026', to: '26/06/2026', price: 60 },
        { from: '27/06/2026', to: '24/07/2026', price: 80 },
        { from: '25/07/2026', to: '07/08/2026', price: 100 },
        { from: '08/08/2026', to: '21/08/2026', price: 130 },
        { from: '22/08/2026', to: '04/09/2026', price: 90 },
        { from: '05/09/2026', to: '25/09/2026', price: 70 },
        { from: '26/09/2026', to: '06/11/2026', price: 60 }
      ],
      notIncluded: [
        'Deposito cauzionale rimborsabile: € 100',
        'Tassa di soggiorno: € 1,50/persona',
        'Pulizia finale: € 60'
      ]
    },
    {
      id: 'zingaro',
      name: 'Appartamento Zingaro',
      maxPersons: 5,
      sqm: 65,
      description: 'cucina-soggiorno, 1 camera matrimoniale e letto singolo, 1 camera doppia, bagno, lavanderia, balcone',
      images: [
        '/gelvi/D zingaro/1cc79d3c.jpg',
        '/gelvi/D zingaro/2e0cb1b5.jpg',
        '/gelvi/D zingaro/64835aba.webp',
        '/gelvi/D zingaro/69c7d9e0.jpg',
        '/gelvi/D zingaro/6fd0d87e.jpg',
        '/gelvi/D zingaro/b1e9b11f.jpg',
        '/gelvi/D zingaro/bd39bb7e.jpg',
        '/gelvi/D zingaro/ec9dd78e.jpg'
      ],
      rooms: 2,
      bathrooms: 1,
      services: [
        'Aria condizionata in tutti gli ambienti',
        'Piano cottura',
        'Forno elettrico',
        'Forno microonde',
        'Lavatrice',
        'Asciugacapelli',
        'Ferro da stiro',
        'Asse da stiro',
        'Moka',
        'Tostapane',
        'Bollitore',
        'Culla',
        'Seggiolone',
        'TV-SAT',
        'WI-FI internet',
        'Rilevatore di monossido di carbonio e gas',
        'Set di lenzuola e asciugamani da bagno cambiati settimanalmente per prenotazioni superiori ad una settimana'
      ],
      prices: [
        { from: '28/03/2026', to: '26/06/2026', price: 65 },
        { from: '27/06/2026', to: '24/07/2026', price: 90 },
        { from: '25/07/2026', to: '07/08/2026', price: 115 },
        { from: '08/08/2026', to: '21/08/2026', price: 145 },
        { from: '22/08/2026', to: '04/09/2026', price: 105 },
        { from: '05/09/2026', to: '25/09/2026', price: 80 },
        { from: '26/09/2026', to: '06/11/2026', price: 65 }
      ],
      notIncluded: [
        'Deposito cauzionale rimborsabile: € 100',
        'Tassa di soggiorno: € 1,50/persona',
        'Pulizia finale: € 60'
      ]
    },
    {
      id: 'segesta',
      name: 'Monolocale Segesta',
      maxPersons: 3,
      sqm: 45,
      description: 'cucina-soggiorno, letto matrimoniale e letto singolo, bagno, terrazza',
      images: [
        '/gelvi/C segesta/07991ae6.webp',
        '/gelvi/C segesta/2.jpg',
        '/gelvi/C segesta/2c922174.webp',
        '/gelvi/C segesta/44fd025f.jpg',
        '/gelvi/C segesta/66f8d8ba.webp',
        '/gelvi/C segesta/6c75cf6d.jpg',
        '/gelvi/C segesta/b643225b.jpg',
        '/gelvi/C segesta/c324472c.jpg',
        '/gelvi/C segesta/d7375b86.jpg'
      ],
      rooms: 1,
      bathrooms: 1,
      services: [
        'Aria condizionata',
        'Piano cottura',
        'Forno elettrico',
        'Forno microonde',
        'Lavatrice',
        'Asciugacapelli',
        'Ferro da stiro',
        'Asse da stiro',
        'Moka',
        'Tostapane',
        'Bollitore',
        'Culla',
        'Seggiolone',
        'TV-SAT',
        'WI-FI internet',
        'Rilevatore di monossido di carbonio e gas',
        'Set di lenzuola e asciugamani da bagno cambiati settimanalmente per prenotazioni superiori ad una settimana'
      ],
      prices2Persons: [
        { from: '28/03/2026', to: '26/06/2026', price: 45 },
        { from: '27/06/2026', to: '24/07/2026', price: 60 },
        { from: '25/07/2026', to: '07/08/2026', price: 75 },
        { from: '08/08/2026', to: '21/08/2026', price: 90 },
        { from: '22/08/2026', to: '04/09/2026', price: 70 },
        { from: '05/09/2026', to: '25/09/2026', price: 55 },
        { from: '26/09/2026', to: '06/11/2026', price: 45 }
      ],
      prices3Persons: [
        { from: '28/03/2026', to: '26/06/2026', price: 55 },
        { from: '27/06/2026', to: '24/07/2026', price: 70 },
        { from: '25/07/2026', to: '07/08/2026', price: 85 },
        { from: '08/08/2026', to: '21/08/2026', price: 105 },
        { from: '22/08/2026', to: '04/09/2026', price: 80 },
        { from: '05/09/2026', to: '25/09/2026', price: 65 },
        { from: '26/09/2026', to: '06/11/2026', price: 55 }
      ],
      notIncluded: [
        'Deposito cauzionale rimborsabile: € 100',
        'Tassa di soggiorno: € 1,50/persona',
        'Pulizia finale: € 40'
      ]
    }
  ]

  const reviews = [
    {
      author: "Maria R.",
      role: "Turista",
      text: "Villa incredibile con vista mozzafiato sui faraglioni di Scopello. La piscina infinity è spettacolare, soprattutto al tramonto. Ugo e Deborah sono stati gentilissimi, sempre disponibili. Torneremo sicuramente!"
    },
    {
      author: "Giovanni P.",
      role: "Viaggiatore",
      text: "Settimana indimenticabile! La villa è ancora più bella delle foto. Spazi ampi, pulizia perfetta, ogni dettaglio curato. La posizione è ideale per visitare Scopello, Castellammare e le riserve naturali. Consigliatissima!"
    },
    {
      author: "Sophie L.",
      role: "Famiglia",
      text: "Perfetta per famiglie! I bambini hanno adorato la piscina e il giardino. La cucina è attrezzatissima, abbiamo cucinato ogni sera. La vista dalla terrazza è qualcosa di unico. Servizio impeccabile e accoglienza calorosa."
    },
    {
      author: "Marco T.",
      role: "Coppia",
      text: "Villa di lusso in posizione strategica. A pochi minuti dalle migliori spiagge della zona. L'idromassaggio è stato il tocco finale per un soggiorno perfetto. Ugo e Deborah ci hanno dato consigli preziosi sui posti da visitare."
    },
    {
      author: "Anna e Luca B.",
      role: "Coppia",
      text: "Vacanza da sogno! La villa è bellissima, curata in ogni dettaglio. La vista sui faraglioni è spettacolare, soprattutto al tramonto. La piscina riscaldata ci ha permesso di nuotare anche la sera. I proprietari sono stati fantastici, sempre pronti ad aiutarci. Ci torniamo sicuramente l'anno prossimo!"
    }
  ]

  const getInitials = (name) => {
    const cleanName = name.replace(/\./g, '')
    const parts = cleanName.split(' ').filter(part => part.length > 0 && part !== 'e')
    
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    }
    return cleanName.substring(0, 2).toUpperCase()
  }

  const goToPreviousReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const getMinPrice = (apartment) => {
    if (apartment.id === 'segesta') {
      const min2Persons = Math.min(...apartment.prices2Persons.map(p => p.price))
      const min3Persons = Math.min(...apartment.prices3Persons.map(p => p.price))
      return Math.min(min2Persons, min3Persons)
    }
    return Math.min(...apartment.prices.map(p => p.price))
  }

  const openApartmentModal = (apartment) => {
    setSelectedApartment(apartment)
    setApartmentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeApartmentModal = () => {
    setSelectedApartment(null)
    setApartmentImageIndex(0)
    document.body.style.overflow = 'unset'
  }

  const nextApartmentImage = () => {
    if (selectedApartment) {
      setApartmentImageIndex((prev) => (prev + 1) % selectedApartment.images.length)
    }
  }

  const prevApartmentImage = () => {
    if (selectedApartment) {
      setApartmentImageIndex((prev) => (prev - 1 + selectedApartment.images.length) % selectedApartment.images.length)
    }
  }

  // Gestione chiusura con ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedApartment) {
        closeApartmentModal()
      }
    }

    if (selectedApartment) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [selectedApartment])

  // Gestione fade-in per tutti gli elementi
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
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

    // Elementi normali (con transform fade-in)
    const elements = mainContainer.querySelectorAll(
      'h1:not([class*="navbar"]):not([class*="footer"]), ' +
      'h2:not([class*="navbar"]):not([class*="footer"]), ' +
      'h3:not([class*="navbar"]):not([class*="footer"]), ' +
      'p:not([class*="navbar"]):not([class*="footer"]):not([class*="absolute"]), ' +
      'button:not([class*="navbar"]):not([class*="footer"])'
    )
    
    // Elementi con hover (immagini e link) - solo opacity fade-in (senza transform)
    const hoverElements = mainContainer.querySelectorAll(
      'img:not([class*="navbar"]):not([class*="footer"]):not([src*="logo"]), ' +
      'a:not([class*="navbar"]):not([class*="footer"]):not([href^="#"])'
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
        !el.classList.contains('fade-in')
      ) {
        el.classList.add('fade-in-hidden')
        setTimeout(() => {
          observer.observe(el)
        }, index * 50)
      }
    })

    // Gestisci elementi con hover (solo opacity, no transform)
    hoverElements.forEach((el, index) => {
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
        !el.classList.contains('fade-in-hero') &&
        !el.classList.contains('fade-in-hero-hidden')
      ) {
        el.classList.add('fade-in-hero-hidden')
        setTimeout(() => {
          observer.observe(el)
        }, index * 50)
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
          src="/gelvi/C segesta/2.jpg"
          alt="Villa Gelvi - Vista esterna degli appartamenti a Erice, Sicilia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white text-center px-4 fade-in-hero-hidden">
            Villa Gelvi
          </h1>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-accent py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <button
              onClick={() => scrollToSection('descrizione')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              Descrizione
            </button>
            <button
              onClick={() => scrollToSection('da-sapere')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              Da sapere
            </button>
            <button
              onClick={() => scrollToSection('appartamenti')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              Appartamenti
            </button>
            <button
              onClick={() => scrollToSection('recensioni')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              Recensioni
            </button>
            <button
              onClick={() => scrollToSection('contatti')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              Contatti
            </button>
            <button
              onClick={() => scrollToSection('posizione')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              Posizione
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Descrizione */}
        <div id="descrizione" className="mb-16 scroll-mt-20">
          <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-6 text-center">
            Descrizione
          </h2>
          <div className="space-y-4 text-base font-questrial text-gray-700 text-justify">
            <p>
              Villa Gelvi, che offre 4 appartamenti, dispone di un giardino e di una bellissima terrazza attrezzata con gazebo, 2 barbecue, tavoli, sedie, sdraio e giochi per bambini. A poche decine di metri si trovano 2 bar, un fornitissimo supermercato e un'ottimo ristorante/pizzeria che pratica uno sconto del 15% agli ospiti. Nel giardino c'è un punto acqua per sciacquarsi i piedi dal ritorno dalla spiaggia. Nessun problema di posteggio davanti casa. La famiglia Pisciotta che abita a piano terra (entrate indipendenti - max privacy) sarà pronta ad accogliervi con sincera ed infinita ospitalità per farvi trascorrere una serena vacanza e risolvere qualsiasi problema si possa verificare.
            </p>
          </div>
        </div>

        {/* Sezione Da Sapere */}
        <section id="da-sapere" className="mb-16 scroll-mt-20">
          <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-8 text-center">
            Da sapere
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <ul className="space-y-3 text-base font-questrial text-gray-700">
              <li className="flex items-start">
                <ArrowRight className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Le feste e gli eventi di gruppo sono vietati.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Estintore antincendio.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Tutti gli ospiti, minorenni inclusi, dovranno essere presenti al momento del check-in e mostrare il passaporto o un documento d'identità rilasciato dal proprio governo.</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span>Numero di registrazione della struttura (CIN): IT081005C2HAE3IXSF</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sezione I nostri appartamenti */}
        <section id="appartamenti" className="mb-16 scroll-mt-20">
          <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4 text-center">
            I nostri appartamenti
          </h2>
          <p className="text-base font-questrial text-gray-600 text-center mb-12">
            Scegli l'appartamento perfetto per la tua vacanza
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {apartments.map((apartment) => (
              <div key={apartment.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 bg-gray-200">
                  <img
                    src={apartment.images[0]}
                    alt={apartmentImageAltTexts[apartment.images[0]] || apartment.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Users className="text-accent" size={16} />
                      <span className="text-sm font-questrial text-gray-700">{apartment.maxPersons}</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Bed className="text-accent" size={16} />
                      <span className="text-sm font-questrial text-gray-700">{apartment.rooms}</span>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <Bath className="text-accent" size={16} />
                      <span className="text-sm font-questrial text-gray-700">{apartment.bathrooms}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-primary mb-2">
                    {apartment.name}
                  </h3>
                  <p className="text-sm font-questrial text-gray-600 mb-1">
                    Max {apartment.maxPersons} persone • {apartment.sqm} mq
                  </p>
                  <p className="text-sm font-questrial text-gray-700 mb-2">
                    {apartment.description}
                  </p>
                  <p className="text-base font-questrial text-primary font-semibold mb-4">
                    a partire da € {getMinPrice(apartment)}
                  </p>
                  <button
                    onClick={() => openApartmentModal(apartment)}
                    className="w-full bg-accent border border-accent hover:bg-[rgb(170,120,40)] text-white px-8 py-3 rounded-none font-questrial transition-all duration-300"
                  >
                    Dettagli
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sezione Recensioni */}
        <section id="recensioni" className="mb-16 scroll-mt-20">
          <div className="relative mb-12">
            <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary text-center">
              Recensioni
            </h2>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2">
              <button
                onClick={goToPreviousReview}
                className="border-2 border-accent/30 text-accent p-2 rounded-full transition-all duration-300 hover:border-accent"
                aria-label="Recensione precedente"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNextReview}
                className="border-2 border-accent/30 text-accent p-2 rounded-full transition-all duration-300 hover:border-accent"
                aria-label="Recensione successiva"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden py-8">
              {/* Card Precedente - Nascosta su mobile, visibile su desktop */}
              <div className="hidden md:flex flex-shrink-0 w-1/5 scale-90 opacity-60 transition-all duration-500">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-playfair font-semibold text-lg">
                          {getInitials(reviews[(currentReview - 1 + reviews.length) % reviews.length].author)}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-playfair font-semibold text-primary mb-1">
                      {reviews[(currentReview - 1 + reviews.length) % reviews.length].author}
                    </h3>
                    <p className="text-sm font-questrial text-gray-500 mb-3">
                      {reviews[(currentReview - 1 + reviews.length) % reviews.length].role}
                    </p>
                    <p className="text-sm font-questrial text-gray-600 leading-relaxed line-clamp-4">
                      &ldquo;{reviews[(currentReview - 1 + reviews.length) % reviews.length].text}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Attiva - Full width su mobile, 2/5 su desktop */}
              <div className="flex-shrink-0 w-full md:w-2/5 scale-100 opacity-100 z-10 transition-all duration-500">
                <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 h-full">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-accent/20 flex items-center justify-center border-4 border-accent/30">
                        <span className="text-accent font-playfair font-semibold text-2xl md:text-3xl">
                          {getInitials(reviews[currentReview].author)}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-playfair font-semibold text-primary mb-1">
                      {reviews[currentReview].author}
                    </h3>
                    <p className="text-sm md:text-base font-questrial text-gray-500 mb-4">
                      {reviews[currentReview].role}
                    </p>
                    <p className="text-sm md:text-base font-questrial text-gray-700 leading-relaxed">
                      &ldquo;{reviews[currentReview].text}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Successiva - Nascosta su mobile, visibile su desktop */}
              <div className="hidden md:flex flex-shrink-0 w-1/5 scale-90 opacity-60 transition-all duration-500">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-playfair font-semibold text-lg">
                          {getInitials(reviews[(currentReview + 1) % reviews.length].author)}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-playfair font-semibold text-primary mb-1">
                      {reviews[(currentReview + 1) % reviews.length].author}
                    </h3>
                    <p className="text-sm font-questrial text-gray-500 mb-3">
                      {reviews[(currentReview + 1) % reviews.length].role}
                    </p>
                    <p className="text-sm font-questrial text-gray-600 leading-relaxed line-clamp-4">
                      &ldquo;{reviews[(currentReview + 1) % reviews.length].text}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentReview
                      ? 'bg-accent w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Vai alla recensione ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Sezione CTA - Full Width */}
      <section 
        id="contatti" 
        className="relative py-20 px-4 text-white overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat scroll-mt-20"
        style={{
          backgroundImage: `url('/mirascopello/6f63e8e1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <div className="mb-12">
            <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-white mb-4 text-center">
              Prenota la tua vacanza
            </h2>
            <p className="text-base text-white/90 font-questrial max-w-2xl mx-auto">
              Contattaci per maggiori informazioni e disponibilità
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="tel:+393384394380"
              className="inline-block bg-accent/80 border border-accent hover:bg-[rgb(170,120,40)]/80 text-white px-8 py-3 rounded-none font-questrial transition-all duration-300"
            >
              Chiama ora
            </a>
            <a
              href="/contatti"
              className="inline-block border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-none font-questrial transition-all duration-300"
            >
              Contatti
            </a>
          </div>
        </div>
      </section>

      {/* Sezione Posizione - Full Width */}
      <section id="posizione" className="w-full scroll-mt-20">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.3929139279635!2d12.850023077543886!3d38.037930196954896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131983d2c38dd7e7%3A0x732b1726381b61fe!2sVilla%20Mirascopello!5e0!3m2!1sit!2sit!4v1764980643346!5m2!1sit!2sit"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </section>

      {/* Modal Appartamento */}
      {selectedApartment && (
        <div
          className="fixed inset-0 bg-black/90 z-[9998] flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeApartmentModal}
        >
          <div className="relative bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto my-8" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeApartmentModal}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition-colors z-10 bg-white rounded-full p-2 shadow-lg"
              aria-label="Chiudi"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Image Slider */}
              <div className="relative mb-8">
                <div className="relative h-96 md:h-[500px] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={selectedApartment.images[apartmentImageIndex]}
                    alt={apartmentImageAltTexts[selectedApartment.images[apartmentImageIndex]] || `${selectedApartment.name} - Foto ${apartmentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {selectedApartment.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          prevApartmentImage()
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 shadow-lg"
                        aria-label="Immagine precedente"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          nextApartmentImage()
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 shadow-lg"
                        aria-label="Immagine successiva"
                      >
                        <ChevronRight size={24} />
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-questrial">
                        {apartmentImageIndex + 1} / {selectedApartment.images.length}
                      </div>
                    </>
                  )}
                </div>
                
                {/* Thumbnails */}
                {selectedApartment.images.length > 1 && (
                  <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                    {selectedApartment.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setApartmentImageIndex(idx)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === apartmentImageIndex ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={apartmentImageAltTexts[img] || `${selectedApartment.name} - Anteprima immagine ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Title and Info */}
              <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-2">
                  {selectedApartment.name}
                </h2>
                <p className="text-base font-questrial text-gray-600 mb-1">
                  Max {selectedApartment.maxPersons} persone • {selectedApartment.sqm} mq
                </p>
                <p className="text-base font-questrial text-gray-700">
                  {selectedApartment.description}
                </p>
              </div>

              {/* Servizi */}
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Servizi</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedApartment.services.map((service, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="text-accent mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-base font-questrial text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prezzi */}
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">Prezzi giornalieri</h3>
                {selectedApartment.id === 'segesta' ? (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-playfair font-semibold text-primary mb-3">Per 2 persone</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">Dal</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">Al</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">Prezzo giornaliero</th>
                            </tr>
                          </thead>
                          <tbody className="font-questrial text-sm">
                            {selectedApartment.prices2Persons.map((price, idx) => (
                              <tr key={idx} className={idx % 2 === 0 ? '' : 'bg-gray-50'}>
                                <td className="border border-gray-300 px-4 py-3">{price.from}</td>
                                <td className="border border-gray-300 px-4 py-3">{price.to}</td>
                                <td className="border border-gray-300 px-4 py-3 font-semibold">€ {price.price}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-playfair font-semibold text-primary mb-3">Per 3 persone</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">Dal</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">Al</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">Prezzo giornaliero</th>
                            </tr>
                          </thead>
                          <tbody className="font-questrial text-sm">
                            {selectedApartment.prices3Persons.map((price, idx) => (
                              <tr key={idx} className={idx % 2 === 0 ? '' : 'bg-gray-50'}>
                                <td className="border border-gray-300 px-4 py-3">{price.from}</td>
                                <td className="border border-gray-300 px-4 py-3">{price.to}</td>
                                <td className="border border-gray-300 px-4 py-3 font-semibold">€ {price.price}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">Dal</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">Al</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">Prezzo giornaliero</th>
                        </tr>
                      </thead>
                      <tbody className="font-questrial text-sm">
                        {selectedApartment.prices.map((price, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? '' : 'bg-gray-50'}>
                            <td className="border border-gray-300 px-4 py-3">{price.from}</td>
                            <td className="border border-gray-300 px-4 py-3">{price.to}</td>
                            <td className="border border-gray-300 px-4 py-3 font-semibold">€ {price.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Non incluso */}
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-playfair font-bold text-primary mb-4">Non incluso</h3>
                <ul className="space-y-2">
                  {selectedApartment.notIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <X className="text-red-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-base font-questrial text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default VillaGelvi
