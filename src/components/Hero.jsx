import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Waves, Bed, Sun } from 'lucide-react'

const Hero = () => {
  const images = [
    '/mirascopello/1.jpg',
    '/mirascopello/2.jpg',
    '/mirascopello/3.jpg',
    '/mirascopello/4.jpg',
    '/mirascopello/5.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Images */}
      <div className="relative h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={
                image === '/mirascopello/1.jpg' ? 'Interno della villa MiraScopello' :
                image === '/mirascopello/2.jpg' ? 'Esterno della villa MiraScopello' :
                image === '/mirascopello/3.jpg' ? 'Salotto della villa MiraScopello' :
                image === '/mirascopello/4.jpg' ? 'Vetrata che mostra piscina della villa MiraScopello' :
                image === '/mirascopello/5.jpg' ? 'Solarium della villa MiraScopello' :
                `Ville Pisciotta - Vista panoramica sulla Sicilia ${index + 1}`
              }
              className="w-full h-full object-cover transform transition-transform duration-[3000ms] ease-in-out"
              style={{
                transform: index === currentIndex ? 'scale(1.1)' : 'scale(1)',
              }}
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="mb-4">
            <div className="text-2xl md:text-2xl font-questrial font-normal mb-2 uppercase">
              Benvenuti a
            </div>
            <div className="text-5xl md:text-8xl font-playfair font-bold">
              Ville Pisciotta
            </div>
          </h1>
          <p className="text-xl md:text-xl font-questrial mb-6 max-w-2xl mx-auto">
            La tua vacanza in ville uniche, immerse nella tranquillità
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Waves size={20} className="text-white" strokeWidth={2} />
              <span className="text-lg md:text-xl font-questrial text-white">Relax</span>
            </div>
            <div className="flex items-center gap-2">
              <Bed size={20} className="text-white" strokeWidth={2} />
              <span className="text-lg md:text-xl font-questrial text-white">Comfort</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun size={20} className="text-white" strokeWidth={2} />
              <span className="text-lg md:text-xl font-questrial text-white">Tranquillità</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="#villas"
              className="inline-block border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-none font-questrial transition-all duration-300"
            >
              Esplora
            </a>
            <a
              href="tel:+393384394380"
              className="inline-block bg-accent/80 border border-accent hover:bg-[rgb(170,120,40)]/80 text-white px-8 py-3 rounded-none font-questrial transition-all duration-300"
            >
              Prenota ora
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {/*
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>
      */}

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
