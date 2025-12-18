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
  Euro,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Beef,
  Layers2,
  Coffee,
  Tv,
  Wind,
  DoorOpen,
  ChefHat,
  Droplets,
  Shirt,
  Baby,
  Zap,
  Sun,
  X
} from 'lucide-react'

const VillaMirascopello = () => {
  const { language } = useLanguage()

  const translations = {
    it: {
      title: 'Villa MiraScopello - Villa a Scopello, Sicilia | Ville Pisciotta',
      descrizione: 'Descrizione',
      daSapere: 'Da sapere',
      servizi: 'Servizi inclusi',
      foto: 'Foto',
      prezzi: 'Prezzi',
      recensioni: 'Recensioni',
      contatti: 'Contatti',
      posizione: 'Posizione',
      camere: 'Camere da letto\nmatrimoniali/doppie',
      bagni: 'Bagni',
      ospiti: 'Ospiti',
      piscina: 'Piscina',
      piscinaDesc: 'Infinity 5x12\nriscaldata + idromassaggio',
      dimensioni: 'Dimensioni totali',
      mostraTutte: 'Mostra tutte',
      nonIncluso: 'Non incluso',
      dal: 'Dal',
      al: 'Al',
      prezzoSettimanale: 'Prezzo settimanale',
      recensionePrecedente: 'Recensione precedente',
      recensioneSuccessiva: 'Recensione successiva',
      // Descrizione
      descrizioneText1: 'In una posizione dominante, su una pittoresca collinetta, chiamata Castellaccio, tra Castellammare del Golfo e Scopello, con una veduta mozzafiato proprio sui meravigliosi faraglioni di Scopello e sul mare circostante, sorge una grande e splendida villa: Villa MiraScopello. Isolata e tranquilla ma nello stesso tempo vicina ad altre abitazioni e a tutto ciò di cui si può avere necessità, Villa MiraScopello rappresenta il luogo ideale per trascorre una vacanza rilassante ed indimenticabile.',
      descrizioneText2: 'La zona in cui sorge è una delle zone più belle di Castellammare del Golfo apprezzata molto sia dai turisti che dai residenti. La villa si trova a 8 minuti dal famoso borgo di Scopello a 3 dalla splendida baia di Guidaloca e a 5 minuti dal bellissimo paesino di Castellammare Del Golfo.',
      descrizioneText3: 'La villa è gestita dagli stessi proprietari, Ugo e Deborah, disponibili ed esperti nel settore turistico e pronti a cercare di risolvere qualsiasi problema si possa verificare.',
      descrizioneText4: 'La villa si sviluppa su due livelli: al piano terra si viene accolti da un grande salone, affiancato da una spaziosa cucina con soggiorno. La zona notte comprende tre camere da letto, tutte ben illuminate, servite complessivamente da quattro bagni, che garantiscono il massimo comfort e funzionalità. Completa il piano una comoda lavanderia, pratica e discreta.',
      descrizioneText5: 'Il piano primo è dedicato a un\'ulteriore zona notte, composta da tre camere da letto e da tre bagni, offrendo spazi ideali per la famiglia o per eventuali ospiti, con un\'ottima distribuzione tra privacy e comodità.',
      // Da sapere
      daSapere1: 'La temperatura dell\'acqua della piscina è di circa 25 °C (senza costi aggiuntivi).',
      daSapere2: 'Le feste e gli eventi di gruppo sono vietati.',
      daSapere3: 'Rilevatore di monossido di carbonio e gas.',
      daSapere4: 'Estintore antincendio.',
      daSapere5: 'Tutti gli ospiti, minorenni inclusi, dovranno essere presenti al momento del check-in e mostrare il passaporto o un documento d\'identità rilasciato dal proprio governo.',
      daSapere6: 'Lenzuola e asciugamani da bagno per l\'intera settimana, cambio completo per prenotazioni superiori ad una settimana.',
      daSapere7: 'Numero di registrazione della struttura (CIN): IT081005C2USCYFWIQ',
      // Servizi
      vistaMare: 'Vista mare panoramica',
      ariaCondizionata: 'Aria condizionata in tutte le camere',
      arrediEsterno: 'Arredi da esterno',
      barbecue: 'Barbecue coperto (carbone fornito)',
      cancello: 'Cancello automatico',
      docciaEsterna: 'Doccia esterna',
      asciugamaniPiscina: 'Asciugamani da piscina',
      fornoElettrico: 'Forno elettrico',
      fornoMicroonde: 'Forno microonde',
      lavastoviglie: 'Lavastoviglie',
      lavatrice: 'Lavatrice',
      asciugacapelli: 'Asciugacapelli',
      ferroStiro: 'Ferro da stiro',
      asseStiro: 'Asse da stiro',
      parcheggio: 'Parcheggio privato',
      terrazza: 'Terrazza',
      veranda: 'Veranda',
      tostapane: 'Tostapane',
      macchinaCapsule: 'Macchina da caffè a capsule',
      macchinaAmericano: 'Macchina da caffè americano',
      moka: 'Moka',
      bollitore: 'Bollitore',
      culla: 'Culla',
      seggiolone: 'Seggiolone',
      tvSat: 'TV-SAT',
      wifi: 'WI-FI internet',
      solarium: 'Solarium attrezzato (mq 120)',
      serviziSpaziEsterni: 'Spazi esterni & comfort',
      serviziComfortInterni: 'Comfort interni & tecnologia',
      serviziCucinaFamiglie: 'Cucina & servizi per famiglie',
      // Non incluso
      deposito: 'Deposito cauzionale rimborsabile: € 300.',
      tassaSoggiorno: 'Tassa di soggiorno: € 1,50/persona.',
      pulizia: 'Pulizia finale: € 150',
      riscaldamento: 'Riscaldamento ambiente: € 3/ora (se richiesto)',
      // Recensioni
      turista: 'Turista',
      viaggiatore: 'Viaggiatore',
      famiglia: 'Famiglia',
      coppia: 'Coppia',
      // CTA
      prenotaVacanza: 'Prenota la tua vacanza',
      prenotaVacanzaDesc: 'Contattaci per maggiori informazioni e disponibilità',
      chiamaOra: 'Chiama ora',
      contattiLink: 'Contatti'
    },
    en: {
      title: 'Villa MiraScopello - Villa in Scopello, Sicily | Ville Pisciotta',
      descrizione: 'Description',
      daSapere: 'Things to know',
      servizi: 'Included services',
      foto: 'Photos',
      prezzi: 'Prices',
      recensioni: 'Reviews',
      contatti: 'Contact',
      posizione: 'Location',
      camere: 'Bedrooms\n(double/twin)',
      bagni: 'Bathrooms',
      ospiti: 'Guests',
      piscina: 'Pool',
      piscinaDesc: 'Infinity 5x12\nheated + jacuzzi',
      dimensioni: 'Total size',
      mostraTutte: 'Show all',
      nonIncluso: 'Not included',
      dal: 'From',
      al: 'To',
      prezzoSettimanale: 'Weekly price',
      recensionePrecedente: 'Previous review',
      recensioneSuccessiva: 'Next review',
      // Descrizione
      descrizioneText1: 'In a dominant position, on a picturesque hill called Castellaccio, between Castellammare del Golfo and Scopello, with a breathtaking view of the wonderful faraglioni of Scopello and the surrounding sea, stands a large and splendid villa: Villa MiraScopello. Isolated and quiet but at the same time close to other houses and everything you may need, Villa MiraScopello represents the ideal place to spend a relaxing and unforgettable vacation.',
      descrizioneText2: 'The area where it stands is one of the most beautiful areas of Castellammare del Golfo, much appreciated by both tourists and residents. The villa is located 8 minutes from the famous village of Scopello, 3 minutes from the splendid bay of Guidaloca and 5 minutes from the beautiful village of Castellammare Del Golfo.',
      descrizioneText3: 'The villa is managed by the owners themselves, Ugo and Deborah, available and experienced in the tourism sector and ready to try to solve any problem that may arise.',
      descrizioneText4: 'The villa develops on two levels: on the ground floor you are welcomed by a large living room, flanked by a spacious kitchen with living area. The night area includes three bedrooms, all well lit, served by four bathrooms in total, which guarantee maximum comfort and functionality. A comfortable laundry room, practical and discreet, completes the floor.',
      descrizioneText5: 'The first floor is dedicated to a further night area, consisting of three bedrooms and three bathrooms, offering ideal spaces for the family or for any guests, with an excellent distribution between privacy and comfort.',
      // Da sapere
      daSapere1: 'The pool water temperature is approximately 25 °C (without additional costs).',
      daSapere2: 'Parties and group events are prohibited.',
      daSapere3: 'Carbon monoxide and gas detector.',
      daSapere4: 'Fire extinguisher.',
      daSapere5: 'All guests, including minors, must be present at check-in and show a passport or identity document issued by their government.',
      daSapere6: 'Bed sheets and bath towels for the entire week, complete change for bookings longer than one week.',
      daSapere7: 'Structure registration number (CIN): IT081005C2USCYFWIQ',
      // Servizi
      vistaMare: 'Panoramic sea view',
      ariaCondizionata: 'Air conditioning in all rooms',
      arrediEsterno: 'Outdoor furniture',
      barbecue: 'Covered barbecue (charcoal provided)',
      cancello: 'Automatic gate',
      docciaEsterna: 'Outdoor shower',
      asciugamaniPiscina: 'Pool towels',
      fornoElettrico: 'Electric oven',
      fornoMicroonde: 'Microwave oven',
      lavastoviglie: 'Dishwasher',
      lavatrice: 'Washing machine',
      asciugacapelli: 'Hair dryer',
      ferroStiro: 'Iron',
      asseStiro: 'Ironing board',
      parcheggio: 'Private parking',
      terrazza: 'Terrace',
      veranda: 'Veranda',
      tostapane: 'Toaster',
      macchinaCapsule: 'Capsule coffee machine',
      macchinaAmericano: 'American coffee machine',
      moka: 'Moka',
      bollitore: 'Kettle',
      culla: 'Crib',
      seggiolone: 'High chair',
      tvSat: 'TV-SAT',
      wifi: 'WI-FI internet',
      solarium: 'Equipped solarium (120 sqm)',
      serviziSpaziEsterni: 'Outdoor spaces & comfort',
      serviziComfortInterni: 'Indoor comfort & technology',
      serviziCucinaFamiglie: 'Kitchen & family services',
      // Non incluso
      deposito: 'Refundable security deposit: € 300.',
      tassaSoggiorno: 'Tourist tax: € 1.50/person.',
      pulizia: 'Final cleaning: € 150',
      riscaldamento: 'Rooms Heating: € 3/hour (if requested)',
      // Recensioni
      turista: 'Tourist',
      viaggiatore: 'Traveler',
      famiglia: 'Family',
      coppia: 'Couple',
      // CTA
      prenotaVacanza: 'Book your vacation',
      prenotaVacanzaDesc: 'Contact us for more information and availability',
      chiamaOra: 'Call now',
      contattiLink: 'Contact',
      // Posizione
      posizioneTitle: 'Location'
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

  const [currentReview, setCurrentReview] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [showAllPhotos, setShowAllPhotos] = useState(false)

  const initialGalleryImages = [
    "/mirascopello/1.jpg",
    "/mirascopello/2.jpg",
    "/mirascopello/3.jpg",
    "/mirascopello/4.jpg",
    "/mirascopello/5.jpg",
    "/mirascopello/06aff529.jpg",
    "/mirascopello/4ee47fdf.jpg",
    "/mirascopello/760b8e4b.jpg",
    "/mirascopello/646caed6.jpg"
  ]

  // Mappa degli alt text per le immagini
  const imageAltTexts = {
    "/mirascopello/1.jpg": "Interno della villa MiraScopello",
    "/mirascopello/2.jpg": "Esterno della villa MiraScopello",
    "/mirascopello/3.jpg": "Salotto della villa MiraScopello",
    "/mirascopello/4.jpg": "Vetrata che mostra piscina della villa MiraScopello",
    "/mirascopello/5.jpg": "Solarium della villa MiraScopello",
    "/mirascopello/06aff529.jpg": "Cucina villa MiraScopello",
    "/mirascopello/4ee47fdf.jpg": "Camera da letto villa MiraScopello",
    "/mirascopello/760b8e4b.jpg": "Esterno della villa MiraScopello",
    "/mirascopello/646caed6.jpg": "Panorama della villa MiraScopello",
    "/mirascopello/0c99b82f.jpg": "Piscina di notte villa MiraScopello",
    "/mirascopello/20e5e2d7.jpg": "Solarium della villa MiraScopello",
    "/mirascopello/220f10e0.jpg": "Camera da letto villa MiraScopello",
    "/mirascopello/22867ccb.jpg": "Camera da letto villa MiraScopello",
    "/mirascopello/25c1039b.jpg": "Bagno villa MiraScopello",
    "/mirascopello/270-0125a0b0.jpg": "Piscina villa MiraScopello",
    "/mirascopello/270-0c850c83.jpg": "Barbecue villa MiraScopello",
    "/mirascopello/270-1403057f.jpg": "Sedia esterna villa MiraScopello",
    "/mirascopello/270-1e6763fa.jpg": "Esterno di notte villa MiraScopello",
    "/mirascopello/270-34271ed2.jpg": "Barbecue villa MiraScopello",
    "/mirascopello/270-43df74a9.jpg": "Laghetto villa MiraScopello",
    "/mirascopello/270-4cb8a5d0.jpg": "Piscina villa MiraScopello",
    "/mirascopello/270-4d2ae703.jpg": "Laghetto villa MiraScopello",
    "/mirascopello/270-72cd0fc8.jpg": "Esterno della villa MiraScopello",
    "/mirascopello/270-abe264d9.jpg": "Piscina di notte villa MiraScopello",
    "/mirascopello/270-b85646c1.jpg": "Piscina di notte villa MiraScopello",
    "/mirascopello/270-bfade3e8.jpg": "Piscina di notte villa MiraScopello",
    "/mirascopello/270-c769cca0.jpg": "Barbecue di notte villa MiraScopello",
    "/mirascopello/270-d0a5a231.jpg": "Doccia esterna villa MiraScopello",
    "/mirascopello/2b77029a.webp": "Terrazza villa MiraScopello",
    "/mirascopello/3a5ac408.jpg": "Esterno villa MiraScopello",
    "/mirascopello/43027eb4.jpg": "Bagno villa MiraScopello",
    "/mirascopello/44720ed9.jpg": "Esterno di notte villa MiraScopello",
    "/mirascopello/4fb71491.jpg": "Camera da letto villa MiraScopello",
    "/mirascopello/55f7f55e.jpg": "Esterno villa MiraScopello",
    "/mirascopello/6ca5d3e3.jpg": "Piscina villa MiraScopello",
    "/mirascopello/6f63e8e1.jpg": "Piscina villa MiraScopello",
    "/mirascopello/749507fb.jpg": "Esterno di notte villa MiraScopello",
    "/mirascopello/763795c4.webp": "Camera da letto villa MiraScopello",
    "/mirascopello/7d7548df.webp": "Bagno villa MiraScopello",
    "/mirascopello/842a7dc8.jpg": "Bagno villa MiraScopello",
    "/mirascopello/947ffb36.jpg": "Esterno di notte villa MiraScopello",
    "/mirascopello/983d560d.jpg": "Bagno villa MiraScopello",
    "/mirascopello/ad4b7e8f.jpg": "Camera da letto villa MiraScopello",
    "/mirascopello/b27144ad.jpg": "Esterno di notte villa MiraScopello",
    "/mirascopello/b51e6dd5.webp": "Interno della villa MiraScopello",
    "/mirascopello/bd9400bc.jpg": "Esterno di notte villa MiraScopello",
    "/mirascopello/c2655129.webp": "Bagno villa MiraScopello",
    "/mirascopello/d5dd1e25.jpg": "Piscina villa MiraScopello",
    "/mirascopello/d8b6a457.jpg": "Esterno villa MiraScopello",
    "/mirascopello/db83f3b5.jpg": "Esterno villa MiraScopello",
    "/mirascopello/dbea7607.jpg": "Esterno villa MiraScopello",
    "/mirascopello/dcdb1ce2.jpg": "Esterno di notte villa MiraScopello",
    "/mirascopello/f55c026c.webp": "Bagno villa MiraScopello"
  }

  const allGalleryImages = [
    "/mirascopello/1.jpg",
    "/mirascopello/2.jpg",
    "/mirascopello/3.jpg",
    "/mirascopello/4.jpg",
    "/mirascopello/5.jpg",
    "/mirascopello/06aff529.jpg",
    "/mirascopello/4ee47fdf.jpg",
    "/mirascopello/760b8e4b.jpg",
    "/mirascopello/646caed6.jpg",
    "/mirascopello/0c99b82f.jpg",
    "/mirascopello/20e5e2d7.jpg",
    "/mirascopello/220f10e0.jpg",
    "/mirascopello/22867ccb.jpg",
    "/mirascopello/25c1039b.jpg",
    "/mirascopello/270-0125a0b0.jpg",
    "/mirascopello/270-0c850c83.jpg",
    "/mirascopello/270-1403057f.jpg",
    "/mirascopello/270-1e6763fa.jpg",
    "/mirascopello/270-34271ed2.jpg",
    "/mirascopello/270-43df74a9.jpg",
    "/mirascopello/270-4cb8a5d0.jpg",
    "/mirascopello/270-4d2ae703.jpg",
    "/mirascopello/270-72cd0fc8.jpg",
    "/mirascopello/270-abe264d9.jpg",
    "/mirascopello/270-b85646c1.jpg",
    "/mirascopello/270-bfade3e8.jpg",
    "/mirascopello/270-c769cca0.jpg",
    "/mirascopello/270-d0a5a231.jpg",
    "/mirascopello/2b77029a.webp",
    "/mirascopello/3a5ac408.jpg",
    "/mirascopello/43027eb4.jpg",
    "/mirascopello/44720ed9.jpg",
    "/mirascopello/4fb71491.jpg",
    "/mirascopello/55f7f55e.jpg",
    "/mirascopello/6ca5d3e3.jpg",
    "/mirascopello/6f63e8e1.jpg",
    "/mirascopello/749507fb.jpg",
    "/mirascopello/763795c4.webp",
    "/mirascopello/7d7548df.webp",
    "/mirascopello/842a7dc8.jpg",
    "/mirascopello/947ffb36.jpg",
    "/mirascopello/983d560d.jpg",
    "/mirascopello/ad4b7e8f.jpg",
    "/mirascopello/b27144ad.jpg",
    "/mirascopello/b51e6dd5.webp",
    "/mirascopello/bd9400bc.jpg",
    "/mirascopello/c2655129.webp",
    "/mirascopello/d5dd1e25.jpg",
    "/mirascopello/d8b6a457.jpg",
    "/mirascopello/db83f3b5.jpg",
    "/mirascopello/dbea7607.jpg",
    "/mirascopello/dcdb1ce2.jpg",
    "/mirascopello/f55c026c.webp"
  ]

  const galleryImages = showAllPhotos ? allGalleryImages : initialGalleryImages

  const openLightbox = (index) => {
    setSelectedImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % allGalleryImages.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + allGalleryImages.length) % allGalleryImages.length)
  }

  const reviews = [
    {
      author: "Famiglia",
      role: "Famiglia",
      logo: "/Resources/booking.png",
      text: "La cornice perfetta per festeggiare con tutta la famiglia il nostro 50° ANNIVERSARIO DI MATRIMONIO ! Villa molto bella con una posizione panoramica unica , piscina a sfioro con idromassaggio splendida . Le parti esterne molto spaziose e fornite di arredamento comodissimo ( un apprezzamento particolare per la zona GRILL !! ) . Camere molto accoglienti ognuna con servizio igienico annesso. Grande cortesia e disponibilità dei proprietari ."
    },
    {
      author: "Famiglia",
      role: "Famiglia",
      logo: "/Resources/airbnb.png",
      text: "Questa villa che si affaccia sulla baia di Scopello è stata una magica e fantastica prima settimana del nostro viaggio nella bellissima Sicilia. Abbiamo incontrato i nostri cugini di Palermo e abbiamo trascorso una settimana insieme (in totale 11 persone) in questa villa. Ognuno aveva la propria camera da letto e il proprio bagno. I letti erano molto confortevoli e l'intero alloggio sembrava casa. Il soggiorno è dotato di un caminetto per le visite invernali. Ciò che ci ha attratto di più è stata la splendida vista sulla baia di Scopello, i due grandi tavoli, uno sotto il patio coperto e l'altro all'interno nella zona pranzo, che consente a un grande gruppo di riunirsi per i pasti. L'altra è la bellissima piscina a sfioro riscaldata con sezione idromassaggio, che è assolutamente il fulcro del \"divertimento al sole\" per grandi e piccini. Ultimo ma non meno importante, i nostri meravigliosi padroni di casa Ugo e sua moglie. Ci hanno aspettato a causa di ritardi con il nostro noleggio auto e sono stati estremamente gentili a mostrarci personalmente la casa."
    },
    {
      author: "Turista",
      role: "Turista",
      logo: "/Resources/vrbo.png",
      text: "Che dire! Tutto perfetto, a partire dal gentilissimo proprietario! Le foto non rendono giustizia alla bellezza della villa! Ogni camera ha il suo bagno interno, la casa è pulitissima e arredata con un buon gusto. La cosa più bella è sicuramente l''enorme veranda che guarda sul panorama dei faraglioni della Riserva dello Zingaro! Speriamo proprio di ritornare in questo paradiso!"
    },
    {
      author: "Tourist",
      role: "Tourist",
      logo: "/Resources/booking.png",
      text: "Fantastic!!! The villa,location and the view is fantastic! Short distance to everything and the owners are very friendly and helpful! We spent a lovely week there. Highly recommended!"
    },
    {
      author: "Traveler",
      role: "Traveler",
      logo: "/Resources/airbnb.png",
      text: "The photos don't do this place justice. Breathtaking panoramic views of the Med Sea, open air living spaces, balconies off several bedrooms, washer, koi pond, viewing ledge near the infinity pool - I could go on and on. The location was perfect, just outside of Castellemarre so we didn't have to deal with every day traffic, but very close to town, restaurants and all amenities. Ugo was incredibly gracious, responsive and friendly. We would stay here again."
    },
    {
      author: "Family",
      role: "Family",
      logo: "/Resources/vrbo.png",
      text: "This villa offers a spectacular view of mountains and sea and is breathtaking at any time of the day. The villa is very spacious and catered for all my families needs. There is an amazing BBQ area and plenty of room to lie in the sun. There is also a lovely shaded area with lots of seating. The swimming pool is fabulous with the added bonus of a spa and we spent hours cooling down in the water. There are steps down into the pool which was great for anyone with mobility issues. The aircon in the bedrooms is also a bonus after a hot day in the sun. Ugo and Deborah are lovely hosts and kept in touch throughout our stay to make sure we had the best holiday. The villa is well equipped with cutlery, plates, cups, glasses and pots and pans. Beds were comfy and it was great to have so many bedrooms with en suite facilities. We would most certainly stay here again."
    }
  ]

  const currentReviews = reviews

  const getInitials = (name) => {
    // Rimuove i punti e divide per spazi
    const cleanName = name.replace(/\./g, '')
    const parts = cleanName.split(' ').filter(part => part.length > 0 && part !== 'e')
    
    if (parts.length >= 2) {
      // Prende la prima lettera della prima parola e l'ultima lettera dell'ultima parola significativa
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

  // Gestione chiusura con ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox()
      }
    }

    if (lightboxOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [lightboxOpen])

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

    // Seleziona tutti gli elementi testo, button e immagini nella pagina principale
    const mainContainer = document.querySelector('.min-h-screen')
    if (!mainContainer) return

    // Identifica la hero section una volta fuori dal loop
    const navElement = mainContainer.querySelector('nav')
    let heroSection = null
    if (navElement && navElement.nextElementSibling) {
      const nextSibling = navElement.nextElementSibling
      // Verifica se è la hero section (contiene h1 e ha classe relative)
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
      // Escludi navbar, footer, hero section e lightbox
      const isInNav = el.closest('nav')
      const isInFooter = el.closest('footer')
      const isInLightbox = el.closest('[class*="lightbox"]') || el.closest('[role="dialog"]')
      const isInHero = heroSection && heroSection.contains(el)
      
      // Skip elementi già animati o in componenti specifici
      if (
        !isInNav &&
        !isInFooter &&
        !isInLightbox &&
        !isInHero &&
        el.offsetParent !== null &&
        !el.classList.contains('fade-in')
      ) {
        el.classList.add('fade-in-hidden')
        // Aggiungi un piccolo delay per creare un effetto a cascata
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
          src="/mirascopello/760b8e4b.jpg"
          alt="Esterno della villa MiraScopello"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white text-center px-4 fade-in-hero-hidden">
            Villa Mirascopello
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
              onClick={() => scrollToSection('da-sapere')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              {t.daSapere}
            </button>
            <button
              onClick={() => scrollToSection('servizi')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              {t.servizi}
            </button>
            <button
              onClick={() => scrollToSection('foto')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              {t.foto}
            </button>
            <button
              onClick={() => scrollToSection('prezzi')}
              className="text-white hover:text-white font-questrial transition-all pb-1 border-b border-transparent hover:border-white"
            >
              {t.prezzi}
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
            {t.descrizione}
          </h2>
          <div className="space-y-4 text-base font-questrial text-gray-700 text-justify">
            <p>
              {t.descrizioneText1}
            </p>
            
            <p>
              {t.descrizioneText2}
            </p>
            <p>
              {t.descrizioneText3}
            </p>
            <p>
              {t.descrizioneText4}
            </p>
            <p>
              {t.descrizioneText5}
            </p>
          </div>
        </div>

        {/* Specchietto Dati */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <Bed className="text-accent mx-auto mb-2" size={32} />
              <div className="text-2xl font-playfair font-bold text-primary mb-1">6</div>
              <div className="text-sm font-questrial text-gray-600">{t.camere}</div>
            </div>
            <div className="text-center">
              <Bath className="text-accent mx-auto mb-2" size={32} />
              <div className="text-2xl font-playfair font-bold text-primary mb-1">7</div>
              <div className="text-sm font-questrial text-gray-600">{t.bagni}</div>
            </div>
            <div className="text-center">
              <Users className="text-accent mx-auto mb-2" size={32} />
              <div className="text-2xl font-playfair font-bold text-primary mb-1">12</div>
              <div className="text-sm font-questrial text-gray-600">{t.ospiti}</div>
            </div>
            <div className="text-center">
              <Waves className="text-accent mx-auto mb-2" size={32} />
              <div className="text-lg font-playfair font-bold text-primary mb-1">{t.piscina}</div>
              <div className="text-sm font-questrial text-gray-600">{t.piscinaDesc}</div>
            </div>
            <div className="text-center">
              <Square className="text-accent mx-auto mb-2" size={32} />
              <div className="text-2xl font-playfair font-bold text-primary mb-1">320mq</div>
              <div className="text-sm font-questrial text-gray-600">{t.dimensioni}</div>
            </div>
            
            
          </div>
        </div>


        {/* Sezione Da Sapere */}
        <section id="da-sapere" className="scroll-mt-20">
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
              <li className="flex items-start">
                <ArrowRight className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{t.daSapere5}</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{t.daSapere6}</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="text-accent mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{t.daSapere7}</span>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Sezione Servizi */}
      <section id="servizi" className="scroll-mt-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-white mb-10 text-center">
            {t.servizi}
          </h2>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Colonna 1: Spazi esterni & comfort */}
            <div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Waves className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.vistaMare}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HomeIcon className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.terrazza}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HomeIcon className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.veranda}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.arrediEsterno}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sun className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.solarium}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Beef className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.barbecue}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bath className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.docciaEsterna}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.parcheggio}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DoorOpen className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.cancello}</span>
                </div>
              </div>
            </div>

            {/* Colonna 2: Comfort interni & tecnologia */}
            <div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Wind className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.ariaCondizionata}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Tv className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.tvSat}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.wifi}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Droplets className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.lavatrice}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shirt className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.lavastoviglie}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wind className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.asciugacapelli}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.ferroStiro}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.asseStiro}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Layers2 className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.asciugamaniPiscina}</span>
                </div>
              </div>
            </div>

            {/* Colonna 3: Cucina & servizi per famiglie */}
            <div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <ChefHat className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.fornoElettrico}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChefHat className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.fornoMicroonde}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Utensils className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.tostapane}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.macchinaCapsule}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.macchinaAmericano}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.moka}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.bollitore}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Baby className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.culla}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Baby className="text-accent" size={20} />
                  <span className="font-questrial text-white">{t.seggiolone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">

        {/* Sezione Foto */}
        <section id="foto" className="mb-16 scroll-mt-20">
          <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-8 text-center">
            {t.foto}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {initialGalleryImages.map((imageSrc, index) => (
              <img
                key={index}
                src={imageSrc}
                alt={imageAltTexts[imageSrc] || `Villa Mirascopello - Foto ${index + 1}`}
                onClick={() => {
                  setSelectedImage(index)
                  setLightboxOpen(true)
                  document.body.style.overflow = 'hidden'
                }}
                className="w-full h-64 object-cover rounded-lg hover:scale-95 transition-transform duration-300 cursor-pointer"
              />
            ))}
            
            {!showAllPhotos && (
              <div className="md:col-start-2 flex items-center justify-center">
                <button
                  onClick={() => setShowAllPhotos(true)}
                  className="text-primary font-questrial transition-all duration-300 pb-1 border-b border-transparent hover:border-primary"
                >
                  {t.mostraTutte}
                </button>
              </div>
            )}
            
            {showAllPhotos && allGalleryImages.slice(initialGalleryImages.length).map((imageSrc, index) => {
              const actualIndex = initialGalleryImages.length + index
              return (
                <img
                  key={actualIndex}
                  src={imageSrc}
                  alt={imageAltTexts[imageSrc] || `Villa Mirascopello - Foto ${actualIndex + 1}`}
                  onClick={() => {
                    setSelectedImage(actualIndex)
                    setLightboxOpen(true)
                    document.body.style.overflow = 'hidden'
                  }}
                  className="w-full h-64 object-cover rounded-lg hover:scale-95 transition-transform duration-300 cursor-pointer"
                />
              )
            })}
          </div>
        </section>

        {/* Sezione Prezzi */}
        <section id="prezzi" className="mb-16 scroll-mt-20">
          <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary mb-8 text-center">
            {t.prezzi}
          </h2>
          <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-left font-playfair font-semibold text-primary text-xs md:text-base">{t.dal}</th>
                  <th className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-left font-playfair font-semibold text-primary text-xs md:text-base">{t.al}</th>
                  <th className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-left font-playfair font-semibold text-primary text-xs md:text-base">{t.prezzoSettimanale}</th>
                </tr>
              </thead>
              <tbody className="font-questrial">
                <tr>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">28/03/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">26/06/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 font-semibold text-xs md:text-base">€ 3.100</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">27/06/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">24/07/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 font-semibold text-xs md:text-base">€ 4.300</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">25/07/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">07/08/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 font-semibold text-xs md:text-base">€ 5.000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">08/08/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">21/08/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 font-semibold text-xs md:text-base">€ 5.700</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">22/08/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">04/09/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 font-semibold text-xs md:text-base">€ 5.000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">05/09/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">25/09/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 font-semibold text-xs md:text-base">€ 4.300</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">26/09/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 text-xs md:text-base">06/11/2026</td>
                  <td className="border border-gray-300 px-2 py-2 md:px-6 md:py-4 font-semibold text-xs md:text-base">€ 3.300</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-amber-50 p-6 rounded-lg">
            <h3 className="text-xl font-playfair font-bold text-primary mb-4">
              {t.nonIncluso}
            </h3>
            <ul className="space-y-2 text-base font-questrial text-gray-700">
              <li className="flex items-start">
                <X className="text-red-500 mr-2 mt-1" size={18} />
                <span>{t.deposito}</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mr-2 mt-1" size={18} />
                <span>{t.tassaSoggiorno}</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mr-2 mt-1" size={18} />
                <span>{t.pulizia}</span>
              </li>
              <li className="flex items-start">
                <X className="text-red-500 mr-2 mt-1" size={18} />
                <span>{t.riscaldamento}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sezione Recensioni */}
        <section id="recensioni" className="mb-16 scroll-mt-20">
          <div className="relative mb-12">
            <h2 className="text-[1.875rem] md:text-[2.5rem] font-playfair font-bold text-primary text-center">
              {t.recensioni}
            </h2>
            {/* Navigation Buttons - Top Right */}
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
                    {/* <p className="text-sm font-questrial text-gray-500 mb-3">
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
                    {/* <p className="text-sm md:text-base font-questrial text-gray-500 mb-4">
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
                    {/* <p className="text-sm font-questrial text-gray-500 mb-3">
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

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[9998] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Chiudi"
            >
              <X size={32} />
            </button>

            {/* Image Container */}
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={allGalleryImages[selectedImage]}
                alt={imageAltTexts[allGalleryImages[selectedImage]] || `Villa Mirascopello - Immagine ${selectedImage + 1}`}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Immagine precedente"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Immagine successiva"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white text-sm font-questrial">
              {selectedImage + 1} / {allGalleryImages.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default VillaMirascopello
