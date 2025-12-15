import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const { language, changeLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [languageMenuTimeout, setLanguageMenuTimeout] = useState(null)

  const translations = {
    it: {
      home: 'Home',
      contatti: 'Contatti',
      villaMirascopello: 'Villa MiraScopello',
      villaGelvi: 'Villa Gelvi'
    },
    en: {
      home: 'Home',
      contatti: 'Contact',
      villaMirascopello: 'Villa MiraScopello',
      villaGelvi: 'Villa Gelvi'
    }
  }

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      // Pulisci il timeout quando il componente viene smontato
      if (languageMenuTimeout) {
        clearTimeout(languageMenuTimeout)
      }
    }
  }, [languageMenuTimeout])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-white/50' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-accent transition-colors font-questrial`}>
              {t.home}
            </Link>
            <Link to="/contatti" className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-accent transition-colors font-questrial`}>
              {t.contatti}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo - Centered */}
          <div className="flex-1 flex justify-center lg:flex-none lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <Link to="/" className="flex items-center">
              <img 
                src={isScrolled ? "/Logo/Giallo.png" : "/Logo/Bianco.png"} 
                alt="Ville Pisciotta" 
                className="h-12 md:h-16 w-auto hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Right Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/villa-mirascopello" 
              className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-accent transition-colors font-questrial`}
            >
              {t.villaMirascopello}
            </Link>
            <Link 
              to="/villa-gelvi" 
              className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-accent transition-colors font-questrial`}
            >
              {t.villaGelvi}
            </Link>
            
            {/* Language Selector */}
            <div 
              className="relative"
              onMouseEnter={() => {
                // Cancella qualsiasi timeout in corso
                if (languageMenuTimeout) {
                  clearTimeout(languageMenuTimeout)
                  setLanguageMenuTimeout(null)
                }
                setIsLanguageMenuOpen(true)
              }}
              onMouseLeave={() => {
                // Aggiungi un delay prima di chiudere il menu
                const timeout = setTimeout(() => {
                  setIsLanguageMenuOpen(false)
                }, 200) // 200ms di delay
                setLanguageMenuTimeout(timeout)
              }}
            >
              <button className={`flex items-center space-x-1 ${isScrolled ? 'text-black' : 'text-white'} hover:text-accent transition-colors`}>
                <span className={`fi ${language === 'it' ? 'fi-it' : 'fi-gb'}`} style={{ fontSize: '1.25rem' }}></span>
              </button>
              
              {isLanguageMenuOpen && (
                <div 
                  className="absolute right-0 pt-2 w-48 bg-transparent z-50"
                  onMouseEnter={() => {
                    // Quando il mouse entra nel menu, cancella il timeout
                    if (languageMenuTimeout) {
                      clearTimeout(languageMenuTimeout)
                      setLanguageMenuTimeout(null)
                    }
                  }}
                  onMouseLeave={() => {
                    // Quando il mouse esce dal menu, chiudi dopo un delay
                    const timeout = setTimeout(() => {
                      setIsLanguageMenuOpen(false)
                    }, 200)
                    setLanguageMenuTimeout(timeout)
                  }}
                >
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                    <button
                      onClick={() => {
                        changeLanguage('it')
                        setIsLanguageMenuOpen(false)
                        if (languageMenuTimeout) {
                          clearTimeout(languageMenuTimeout)
                          setLanguageMenuTimeout(null)
                        }
                      }}
                      className={`w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-100 transition-colors ${
                        language === 'it' ? 'bg-accent/10' : ''
                      }`}
                    >
                      <span className="fi fi-it" style={{ fontSize: '1.25rem' }}></span>
                      <span className="font-questrial text-gray-700">Italiano</span>
                      {language === 'it' && <span className="ml-auto text-accent">✓</span>}
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage('en')
                        setIsLanguageMenuOpen(false)
                        if (languageMenuTimeout) {
                          clearTimeout(languageMenuTimeout)
                          setLanguageMenuTimeout(null)
                        }
                      }}
                      className={`w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-100 transition-colors ${
                        language === 'en' ? 'bg-accent/10' : ''
                      }`}
                    >
                      <span className="fi fi-gb" style={{ fontSize: '1.25rem' }}></span>
                      <span className="font-questrial text-gray-700">English</span>
                      {language === 'en' && <span className="ml-auto text-accent">✓</span>}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Placeholder for mobile to balance layout */}
          <div className="lg:hidden w-6"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`lg:hidden ${isScrolled ? 'bg-white/50 backdrop-blur-md border-t border-black/20' : 'bg-black/80 backdrop-blur-sm border-t border-white/20'}`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link 
              to="/" 
              className={`block py-2 ${isScrolled ? 'text-black' : 'text-white'} hover:text-amber-300 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.home}
            </Link>
            
            <Link 
              to="/contatti" 
              className={`block py-2 ${isScrolled ? 'text-black' : 'text-white'} hover:text-amber-300 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contatti}
            </Link>
            <Link 
              to="/villa-mirascopello" 
              className={`block py-2 ${isScrolled ? 'text-black' : 'text-white'} hover:text-amber-300 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.villaMirascopello}
            </Link>
            <Link 
              to="/villa-gelvi" 
              className={`block py-2 ${isScrolled ? 'text-black' : 'text-white'} hover:text-amber-300 transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.villaGelvi}
            </Link>
            
            {/* Mobile Language Selector */}
            <div className={`pt-4 ${isScrolled ? 'border-t border-black/20' : 'border-t border-white/20'} mt-2`}>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    changeLanguage('it')
                    setIsMenuOpen(false)
                  }}
                  className={`flex items-center space-x-2 py-2 px-3 rounded ${
                    language === 'it' ? 'bg-accent/20 text-accent' : (isScrolled ? 'text-black' : 'text-white')
                  }`}
                >
                  <span className="fi fi-it" style={{ fontSize: '1.25rem' }}></span>
                  <span className="font-questrial">Italiano</span>
                </button>
                <button
                  onClick={() => {
                    changeLanguage('en')
                    setIsMenuOpen(false)
                  }}
                  className={`flex items-center space-x-2 py-2 px-3 rounded ${
                    language === 'en' ? 'bg-accent/20 text-accent' : (isScrolled ? 'text-black' : 'text-white')
                  }`}
                >
                  <span className="fi fi-gb" style={{ fontSize: '1.25rem' }}></span>
                  <span className="font-questrial">English</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
