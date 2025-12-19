import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
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
  const { language } = useLanguage()

  const translations = {
    it: {
      title: 'Villa Gelvi - Appartamenti in Sicilia | Ville Pisciotta',
      appartamenti: 'Appartamenti',
      descrizione: 'Descrizione',
      servizi: 'Servizi inclusi',
      prezzi: 'Prezzi',
      recensioni: 'Recensioni',
      contatti: 'Contatti',
      posizione: 'Posizione',
      camere: 'Camere',
      bagni: 'Bagni',
      ospiti: 'Ospiti',
      mq: 'mq',
      prezzoGiornaliero: 'Prezzo giornaliero',
      prezziGiornalieri: 'Prezzi giornalieri',
      dal: 'Dal',
      al: 'Al',
      nonIncluso: 'Non incluso',
      deposito: 'Deposito cauzionale rimborsabile: € 100',
      tassaSoggiorno: 'Tassa di soggiorno: € 1,50/persona',
      pulizia: 'Pulizia finale: € 60',
      prenotaVacanza: 'Prenota la tua vacanza',
      prenotaVacanzaDesc: 'Contattaci per maggiori informazioni e disponibilità',
      chiamaOra: 'Chiama ora',
      contattiLink: 'Contatti',
      recensionePrecedente: 'Recensione precedente',
      recensioneSuccessiva: 'Recensione successiva',
      // Servizi comuni
      ariaCondizionata: 'Aria condizionata in tutti gli ambienti',
      pianoCottura: 'Piano cottura',
      fornoElettrico: 'Forno elettrico',
      fornoMicroonde: 'Forno microonde',
      lavatrice: 'Lavatrice',
      asciugacapelli: 'Asciugacapelli',
      ferroStiro: 'Ferro da stiro',
      asseStiro: 'Asse da stiro',
      moka: 'Moka',
      tostapane: 'Tostapane',
      bollitore: 'Bollitore',
      culla: 'Culla',
      seggiolone: 'Seggiolone',
      tvSat: 'TV-SAT',
      wifi: 'WI-FI internet',
      rilevatore: 'Rilevatore di monossido di carbonio e gas',
      lenzuola: 'Set di lenzuola e asciugamani da bagno cambiati settimanalmente per prenotazioni superiori ad una settimana',
      // Descrizioni appartamenti
      ericeDesc: 'cucina-soggiorno, 1 camera matrimoniale, 1 camera doppia, bagno, 3 balconi',
      scopelloDesc: 'cucina-soggiorno, 1 camera matrimoniale, 1 camera doppia, bagno',
      zingaroDesc: 'cucina-soggiorno, 1 camera matrimoniale e letto singolo, 1 camera doppia, bagno, lavanderia, balcone',
      segestaDesc: 'cucina-soggiorno, letto matrimoniale e letto singolo, bagno, terrazza',
      // Altri testi
      descrizioneTitle: 'Descrizione',
      descrizioneText: 'Villa Gelvi, che offre 4 appartamenti, dispone di un giardino e di una bellissima terrazza attrezzata con gazebo, 2 barbecue, tavoli, sedie, sdraio e giochi per bambini. A poche decine di metri si trovano 2 bar, un fornitissimo supermercato e un\'ottimo ristorante/pizzeria che pratica uno sconto del 15% agli ospiti. Nel giardino c\'è un punto acqua per sciacquarsi i piedi dal ritorno dalla spiaggia. Nessun problema di posteggio davanti casa. La famiglia Pisciotta che abita a piano terra (entrate indipendenti - max privacy) sarà pronta ad accogliervi con sincera ed infinita ospitalità per farvi trascorrere una serena vacanza e risolvere qualsiasi problema si possa verificare.',
      daSapere: 'Da sapere',
      daSapere1: 'Le feste e gli eventi di gruppo sono vietati.',
      daSapere2: 'Estintore antincendio.',
      daSapere3: 'Tutti gli ospiti, minorenni inclusi, dovranno essere presenti al momento del check-in e mostrare il passaporto o un documento d\'identità rilasciato dal proprio governo.',
      daSapere4: 'Numero di registrazione della struttura (CIN): IT081005C2HAE3IXSF',
      nostriAppartamenti: 'I nostri appartamenti',
      scegliAppartamento: 'Scegli l\'appartamento perfetto per la tua vacanza',
      maxPersone: 'Max {max} persone • {sqm} mq',
      aPartireDa: 'a partire da € {price}',
      dettagli: 'Dettagli',
      ariaCondizionata: 'Aria condizionata in tutti gli ambienti',
      ariaCondizionataDesc: 'Aria condizionata in tutti gli ambienti',
      servizi: 'Servizi inclusi',
      per2Persone: 'Per 2 persone',
      per3Persone: 'Per 3 persone',
      chiudi: 'Chiudi',
      immaginePrecedente: 'Immagine precedente',
      immagineSuccessiva: 'Immagine successiva'
    },
    en: {
      title: 'Villa Gelvi - Apartments in Sicily | Ville Pisciotta',
      appartamenti: 'Apartments',
      descrizione: 'Description',
      servizi: 'Included services',
      prezzi: 'Prices',
      recensioni: 'Reviews',
      contatti: 'Contact',
      posizione: 'Location',
      camere: 'Rooms',
      bagni: 'Bathrooms',
      ospiti: 'Guests',
      mq: 'sqm',
      prezzoGiornaliero: 'Daily price',
      prezziGiornalieri: 'Daily prices',
      dal: 'From',
      al: 'To',
      nonIncluso: 'Not included',
      deposito: 'Refundable security deposit: € 100',
      tassaSoggiorno: 'Tourist tax: € 1.50/person',
      pulizia: 'Final cleaning: € 60',
      prenotaVacanza: 'Book your vacation',
      prenotaVacanzaDesc: 'Contact us for more information and availability',
      chiamaOra: 'Call now',
      contattiLink: 'Contact',
      recensionePrecedente: 'Previous review',
      recensioneSuccessiva: 'Next review',
      // Servizi comuni
      ariaCondizionata: 'Air conditioning in all rooms',
      pianoCottura: 'Stove',
      fornoElettrico: 'Electric oven',
      fornoMicroonde: 'Microwave oven',
      lavatrice: 'Washing machine',
      asciugacapelli: 'Hair dryer',
      ferroStiro: 'Iron',
      asseStiro: 'Ironing board',
      moka: 'Moka',
      tostapane: 'Toaster',
      bollitore: 'Kettle',
      culla: 'Crib',
      seggiolone: 'High chair',
      tvSat: 'TV-SAT',
      wifi: 'WI-FI internet',
      rilevatore: 'Carbon monoxide and gas detector',
      lenzuola: 'Set of bed sheets and bath towels changed weekly for bookings longer than one week',
      // Descrizioni appartamenti
      ericeDesc: 'kitchen-living room, 1 double bedroom, 1 twin bedroom, bathroom, 3 balconies',
      scopelloDesc: 'kitchen-living room, 1 double bedroom, 1 twin bedroom, bathroom',
      zingaroDesc: 'kitchen-living room, 1 double bedroom and single bed, 1 twin bedroom, bathroom, laundry, balcony',
      segestaDesc: 'kitchen-living room, double bed and single bed, bathroom, terrace',
      // Altri testi
      descrizioneTitle: 'Description',
      descrizioneText: 'Villa Gelvi, which offers 4 apartments, has a garden and a beautiful equipped terrace with gazebo, 2 barbecues, tables, chairs, sun loungers and children\'s games. A few tens of meters away there are 2 bars, a well-stocked supermarket and an excellent restaurant/pizzeria that offers a 15% discount to guests. In the garden there is a water point to rinse your feet when returning from the beach. No parking problems in front of the house. The Pisciotta family who lives on the ground floor (independent entrances - max privacy) will be ready to welcome you with sincere and infinite hospitality to make you spend a peaceful vacation and solve any problem that may arise.',
      daSapere: 'Things to know',
      daSapere1: 'Parties and group events are prohibited.',
      daSapere2: 'Fire extinguisher.',
      daSapere3: 'All guests, including minors, must be present at check-in and show a passport or identity document issued by their government.',
      daSapere4: 'Structure registration number (CIN): IT081005C2HAE3IXSF',
      nostriAppartamenti: 'Our apartments',
      scegliAppartamento: 'Choose the perfect apartment for your vacation',
      maxPersone: 'Max {max} people • {sqm} sqm',
      aPartireDa: 'from € {price}',
      dettagli: 'Details',
      ariaCondizionata: 'Air conditioning in all rooms',
      ariaCondizionataDesc: 'Air conditioning in all rooms',
      servizi: 'Included services',
      per2Persone: 'For 2 people',
      per3Persone: 'For 3 people',
      chiudi: 'Close',
      immaginePrecedente: 'Previous image',
      immagineSuccessiva: 'Next image'
    }
  }

  const t = translations[language]

  // Funzione per tradurre i servizi
  const translateService = (service) => {
    const serviceMap = {
      'Aria condizionata in tutti gli ambienti': t.ariaCondizionata,
      'Piano cottura': t.pianoCottura,
      'Forno elettrico': t.fornoElettrico,
      'Forno microonde': t.fornoMicroonde,
      'Lavatrice': t.lavatrice,
      'Asciugacapelli': t.asciugacapelli,
      'Ferro da stiro': t.ferroStiro,
      'Asse da stiro': t.asseStiro,
      'Moka': t.moka,
      'Tostapane': t.tostapane,
      'Bollitore': t.bollitore,
      'Culla': t.culla,
      'Seggiolone': t.seggiolone,
      'TV-SAT': t.tvSat,
      'WI-FI internet': t.wifi,
      'Rilevatore di monossido di carbonio e gas': t.rilevatore,
      'Set di lenzuola e asciugamani da bagno cambiati settimanalmente per prenotazioni superiori ad una settimana': t.lenzuola
    }
    return serviceMap[service] || service
  }

  // Funzione per tradurre le descrizioni degli appartamenti
  const translateApartmentDescription = (apartmentId) => {
    const descMap = {
      'erice': t.ericeDesc,
      'scopello': t.scopelloDesc,
      'zingaro': t.zingaroDesc,
      'segesta': t.segestaDesc
    }
    return descMap[apartmentId] || ''
  }

  // Funzione per tradurre notIncluded
  const translateNotIncluded = (item) => {
    if (item.includes('Deposito')) return t.deposito
    if (item.includes('Tassa')) return t.tassaSoggiorno
    if (item.includes('Pulizia')) return t.pulizia
    return item
  }

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

  const [currentReview, setCurrentReview] = useState(0)
  const [selectedApartment, setSelectedApartment] = useState(null)
  const [apartmentImageIndex, setApartmentImageIndex] = useState(0)

  // Reset currentReview quando cambia la lingua
  useEffect(() => {
    setCurrentReview(0)
  }, [language])

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
      name: language === 'it' ? 'Appartamento Erice' : 'Erice Apartment',
      maxPersons: 4,
      sqm: 55,
      description: t.ericeDesc,
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
      name: language === 'it' ? 'Appartamento Scopello' : 'Scopello Apartment',
      maxPersons: 4,
      sqm: 60,
      description: t.scopelloDesc,
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
      name: language === 'it' ? 'Appartamento Zingaro' : 'Zingaro Apartment',
      maxPersons: 5,
      sqm: 65,
      description: t.zingaroDesc,
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
      name: language === 'it' ? 'Monolocale Segesta' : 'Segesta Studio',
      maxPersons: 3,
      sqm: 45,
      description: t.segestaDesc,
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

  const reviewsItalian = [
    {
      author: "Maria R.",
      role: "Turista",
      logo: "/Resources/booking.png",
      text: "Villa Gelvi ci è piaciuta molto perché è in una posizione strategica.. a 10 minuti a piedi dal centro, ma in un posto comodo per uscire con la macchina e zero problemi a parcheggiare. Il nostro bimbo di due anni ha apprezzato molto la terrazza che aveva vari giochi (altalena, bici, macchinina, ecc.) I proprietari molto gentili!"
    },
    {
      author: "Giovanni P.",
      role: "Viaggiatore",
      logo: "/Resources/airbnb.png",
      text: "La casa si trova in un'ottima posizione a poca distanza dal centro volendo raggiungerlo a piedi , centro città che in estate è molto movimentato, a due passi c'è un grande supermercato per fare la spesa e inoltre si trova a pochissimi kilometri da Scopello, la riserva dello Zingaro o dalla spiaggia di Guidaloca. La casa rispecchia le foto messe sul sito, spaziosa, climatizzata e pulita , con ampia terrazza in cui rilassarsi , magari bevendo un bella birra Messina Ghiacchiata. Ugo inoltre è stato un host gentile e disponibilissimo a qualsiasi nostra richiesta. Consigliata!"
    },
    {
      author: "Sophie L.",
      role: "Famiglia",
      logo: "/Resources/vrbo.png",
      text: "L'appartamento corrisponde perfettamente alla descrizione, è molto confortevole, completo di forno, microonde, frigorifero, la cucina è completa di tutto. C'è una grande terrazza con sdraio, sedie, tavoli, barbecue. La posizione dell'alloggio è strategica sia per visitare i luoghi naturalistici ed archeologici della splendida Sicilia occidentale ( da non perdere riserva dello zingaro, Scopello, Erice, Trapani, Segesta, Selinunte, le saline, Favignana, San Vito, Marsala...) che per accedere alle spiagge, necessaria è l'automobile, nessuna difficoltà di parcheggio vicino all'abitazione. A pochi passi si trovano negozi, bar,ristoranti. Castellammare è un paese molto carino ed ottimo punto di partenza. I proprietari sono eccezionali, disponibilissimi consigliamo a tutti l'appartamento, noi torneremo sicuramente."
    }
  ]

  const reviewsEnglish = [
    {
      author: "Maria R.",
      role: "Tourist",
      logo: "/Resources/booking.png",
      text: "This property is amazing for a long stay. You have everything you need from the washing machine to the grill on the rooftop terrace and fully equipped kitchen. This apartment has two separate bedrooms and one kitchen with a living room. It's very spacious and in each of the rooms there is air-conditioning. The host is amazing, they are living on the ground floor of the building and are here to help with everything. Our flight was delayed so we changed our arrival time throughout the day and it wasn't a problem. The host even welcomed us with a bottle of Sicilian wine. The location is also convenient for travelling around as it is close to the main roads leading to Palermo, Trapani, or Scopello. Furthermore, parking in front of the property is free and there's definitely enough spaces. Overall the stay was amazing and perfect for a long relaxing holiday."
    },
    {
      author: "Giovanni P.",
      role: "Traveler",
      logo: "/Resources/airbnb.png",
      text: "Very nice Appartement in a beautiful Villa, close to the City with nice Restaurants we suggest Gusto with good Pizza and nice Atmosphäre. In the Appartement you find everything you need. Ugo is a very nice and sympathic Person. He was always reachable."
    },
    {
      author: "Sophie L.",
      role: "Family",
      logo: "/Resources/vrbo.png",
      text: "We spent more than 2 weeks of marvelous holiday in this beautiful place. The apartment was clean and cosy, equipped with everything you need. Pictures on the site is true to life. Our daughter especially liked playground on the roof and we enjoyed spending evenings eating delicious fish fried on the barbecue there. We didn't like the town beach as it's rocky and inconvenient for a little child, we went to the sandy beach that is 2 km away. We didn't rent a car from the beginning, but we had to because it was very difficult to walk twice a day such a long distance with a child. Thanks Ugo, he helped us to find a good car for a reasonable price. When arrived, we asked Ugo thousand of questions and he patiently answered them all. He has a special map where, if you ask, he can show all good places in this town. Without any hesitation I can recommend this place to stay in Castellammare del Golfo."
    }
  ]

  const currentReviews = language === 'it' ? reviewsItalian : reviewsEnglish

  const getInitials = (name) => {
    const cleanName = name.replace(/\./g, '')
    const parts = cleanName.split(' ').filter(part => part.length > 0 && part !== 'e')
    
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    }
    return cleanName.substring(0, 2).toUpperCase()
  }

  const goToPreviousReview = () => {
    setCurrentReview((prev) => (prev - 1 + currentReviews.length) % currentReviews.length)
  }

  const goToNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % currentReviews.length)
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
              {t.descrizione}
            </button>
            <button
              onClick={() => scrollToSection('appartamenti')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              {t.appartamenti}
            </button>
            <button
              onClick={() => scrollToSection('recensioni')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              {t.recensioni}
            </button>
            <button
              onClick={() => scrollToSection('contatti')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              {t.contatti}
            </button>
            <button
              onClick={() => scrollToSection('posizione')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              {t.posizione}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Descrizione */}
        <div id="descrizione" className="mb-16 scroll-mt-20">
          <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-6 text-center">
            {t.descrizioneTitle}
          </h2>
          <div className="space-y-4 text-base font-questrial text-gray-700 text-justify">
            <p>
              {t.descrizioneText}
            </p>
          </div>
        </div>

        {/* Sezione Da Sapere */}
        <section id="da-sapere" className="mb-16 scroll-mt-20">
          <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-8 text-center">
            {t.daSapere}
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <ul className="space-y-3 text-base font-questrial text-gray-700">
              <li className="flex items-start">
                <ArrowRight className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{t.daSapere1}</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{t.daSapere2}</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{t.daSapere3}</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{t.daSapere4}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sezione I nostri appartamenti */}
        <section id="appartamenti" className="mb-16 scroll-mt-20">
          <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-4 text-center">
            {t.nostriAppartamenti}
          </h2>
          <p className="text-base font-questrial text-gray-600 text-center mb-12">
            {t.scegliAppartamento}
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
                    {t.maxPersone.replace('{max}', apartment.maxPersons).replace('{sqm}', apartment.sqm)}
                  </p>
                  <p className="text-sm font-questrial text-gray-700 mb-2">
                    {apartment.description}
                  </p>
                  <p className="text-base font-questrial text-primary font-semibold mb-4">
                    {t.aPartireDa.replace('{price}', getMinPrice(apartment))}
                  </p>
                  <button
                    onClick={() => openApartmentModal(apartment)}
                    className="w-full bg-accent border border-accent hover:bg-[rgb(170,120,40)] text-white px-8 py-3 rounded-none font-questrial transition-all duration-300"
                  >
                    {t.dettagli}
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
              {t.recensioni}
            </h2>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex gap-2">
              <button
                onClick={goToPreviousReview}
                className="border-2 border-accent/30 text-accent p-2 rounded-full transition-all duration-300 hover:border-accent"
                aria-label={t.recensionePrecedente}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={goToNextReview}
                className="border-2 border-accent/30 text-accent p-2 rounded-full transition-all duration-300 hover:border-accent"
                aria-label={t.recensioneSuccessiva}
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
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center p-2 shadow-md">
                        <img 
                          src={currentReviews[(currentReview - 1 + currentReviews.length) % currentReviews.length].logo}
                          alt="Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    {/* <h3 className="text-lg font-playfair font-semibold text-primary mb-1">
                      {currentReviews[(currentReview - 1 + currentReviews.length) % currentReviews.length].author}
                    </h3>
                    <p className="text-sm font-questrial text-gray-500 mb-3">
                      {currentReviews[(currentReview - 1 + currentReviews.length) % currentReviews.length].role}
                    </p> */}
                    <p className="text-sm font-questrial text-gray-600 leading-relaxed line-clamp-4">
                      &ldquo;{currentReviews[(currentReview - 1 + currentReviews.length) % currentReviews.length].text}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Attiva - Full width su mobile, 2/5 su desktop */}
              <div className="flex-shrink-0 w-full md:w-2/5 scale-100 opacity-100 z-10 transition-all duration-500">
                <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 h-full">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center p-3 shadow-lg border-4 border-accent/30">
                        <img 
                          src={currentReviews[currentReview].logo}
                          alt="Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    {/* <h3 className="text-lg md:text-xl font-playfair font-semibold text-primary mb-1">
                      {currentReviews[currentReview].author}
                    </h3>
                    <p className="text-sm md:text-base font-questrial text-gray-500 mb-4">
                      {currentReviews[currentReview].role}
                    </p> */}
                    <p className="text-sm md:text-base font-questrial text-gray-700 leading-relaxed">
                      &ldquo;{currentReviews[currentReview].text}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Successiva - Nascosta su mobile, visibile su desktop */}
              <div className="hidden md:flex flex-shrink-0 w-1/5 scale-90 opacity-60 transition-all duration-500">
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center p-2 shadow-md">
                        <img 
                          src={currentReviews[(currentReview + 1) % currentReviews.length].logo}
                          alt="Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    {/* <h3 className="text-lg font-playfair font-semibold text-primary mb-1">
                      {currentReviews[(currentReview + 1) % currentReviews.length].author}
                    </h3>
                    <p className="text-sm font-questrial text-gray-500 mb-3">
                      {currentReviews[(currentReview + 1) % currentReviews.length].role}
                    </p> */}
                    <p className="text-sm font-questrial text-gray-600 leading-relaxed line-clamp-4">
                      &ldquo;{currentReviews[(currentReview + 1) % currentReviews.length].text}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {currentReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentReview
                      ? 'bg-accent w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={language === 'it' ? `Vai alla recensione ${index + 1}` : `Go to review ${index + 1}`}
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
              {t.prenotaVacanza}
            </h2>
            <p className="text-base text-white/90 font-questrial max-w-2xl mx-auto">
              {t.prenotaVacanzaDesc}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="tel:+393384394380"
              className="inline-block bg-accent/80 border border-accent hover:bg-[rgb(170,120,40)]/80 text-white px-8 py-3 rounded-none font-questrial transition-all duration-300"
            >
              {t.chiamaOra}
            </a>
            <a
              href="/contatti"
              className="inline-block border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-none font-questrial transition-all duration-300"
            >
              {t.contattiLink}
            </a>
          </div>
        </div>
      </section>

      {/* Sezione Posizione - Full Width */}
      <section id="posizione" className="w-full scroll-mt-20">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d330.38180812770236!2d12.886898667726564!3d38.0205347757924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131981574bfc2d93%3A0x720f00c2aebd0b4b!2sVia%20Enrico%20Fermi%2C%209%2C%2091014%20Castellammare%20del%20Golfo%20TP!5e0!3m2!1sit!2sit!4v1766155882745!5m2!1sit!2sit"
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
              aria-label={t.chiudi}
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
                    alt={apartmentImageAltTexts[selectedApartment.images[apartmentImageIndex]] || `${selectedApartment.name} - ${language === 'it' ? 'Foto' : 'Photo'} ${apartmentImageIndex + 1}`}
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
                        aria-label={t.immaginePrecedente}
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          nextApartmentImage()
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-300 shadow-lg"
                        aria-label={t.immagineSuccessiva}
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
                  {t.maxPersone.replace('{max}', selectedApartment.maxPersons).replace('{sqm}', selectedApartment.sqm)}
                </p>
                <p className="text-base font-questrial text-gray-700">
                  {selectedApartment.description}
                </p>
              </div>

              {/* Servizi */}
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">{t.servizi}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedApartment.services.map((service, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="text-accent mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-base font-questrial text-gray-700">{translateService(service)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prezzi */}
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-bold text-primary mb-4">{t.prezziGiornalieri}</h3>
                {selectedApartment.id === 'segesta' ? (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-playfair font-semibold text-primary mb-3">{t.per2Persone}</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">{t.dal}</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">{t.al}</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">{t.prezzoGiornaliero}</th>
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
                      <h4 className="text-lg font-playfair font-semibold text-primary mb-3">{t.per3Persone}</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">{t.dal}</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">{t.al}</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">{t.prezzoGiornaliero}</th>
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
                          <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">{t.dal}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">{t.al}</th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-playfair font-semibold text-primary text-sm">{t.prezzoGiornaliero}</th>
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
                <h3 className="text-lg font-playfair font-bold text-primary mb-4">{t.nonIncluso}</h3>
                <ul className="space-y-2">
                  {selectedApartment.notIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <X className="text-red-500 mr-2 mt-1 flex-shrink-0" size={18} />
                      <span className="text-base font-questrial text-gray-700">{translateNotIncluded(item)}</span>
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
