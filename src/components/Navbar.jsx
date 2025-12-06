import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-accent transition-colors font-questrial">
              Home
            </Link>
            <Link to="/contatti" className="text-white hover:text-accent transition-colors font-questrial">
              Contatti
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo - Centered */}
          <div className="flex-1 flex justify-center lg:flex-none lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <Link to="/" className="flex items-center">
              <img 
                src="/Logo/Bianco.png" 
                alt="Ville Pisciotta" 
                className="h-12 md:h-16 w-auto hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* Right Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/villa-mirascopello" 
              className="text-white hover:text-accent transition-colors font-questrial"
            >
              Villa MiraScopello
            </Link>
            <Link 
              to="/villa-gelvi" 
              className="text-white hover:text-accent transition-colors font-questrial"
            >
              Villa Gelvi
            </Link>
          </div>

          {/* Placeholder for mobile to balance layout */}
          <div className="lg:hidden w-6"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/80 backdrop-blur-sm border-t border-white/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link 
              to="/" 
              className="block py-2 text-white hover:text-amber-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <Link 
              to="/contatti" 
              className="block py-2 text-white hover:text-amber-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contatti
            </Link>
            <Link 
              to="/villa-mirascopello" 
              className="block py-2 text-white hover:text-amber-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Villa Mirascopello
            </Link>
            <Link 
              to="/villa-gelvi" 
              className="block py-2 text-white hover:text-amber-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Villa Gelvi
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
