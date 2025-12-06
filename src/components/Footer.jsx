import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail, Phone } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { language } = useLanguage()

  const translations = {
    it: {
      description: 'Ville e appartamenti in Sicilia per esperienze indimenticabili',
      navigation: 'Navigazione',
      home: 'Home',
      contact: 'Contatti',
      villaMirascopello: 'Villa Mirascopello',
      villaGelvi: 'Villa Gelvi',
      usefulLinks: 'Link Utili',
      terms: 'Termini e Condizioni',
      privacy: 'Privacy Policy',
      cookie: 'Cookie Policy',
      sitemap: 'Mappa del sito',
      contacts: 'Contatti',
      copyright: `© ${new Date().getFullYear()} Ville Pisciotta. Tutti i diritti riservati.`
    },
    en: {
      description: 'Villas and apartments in Sicily for unforgettable experiences',
      navigation: 'Navigation',
      home: 'Home',
      contact: 'Contact',
      villaMirascopello: 'Villa Mirascopello',
      villaGelvi: 'Villa Gelvi',
      usefulLinks: 'Useful Links',
      terms: 'Terms and Conditions',
      privacy: 'Privacy Policy',
      cookie: 'Cookie Policy',
      sitemap: 'Sitemap',
      contacts: 'Contact',
      copyright: `© ${new Date().getFullYear()} Ville Pisciotta. All rights reserved.`
    }
  }

  const t = translations[language]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-bold text-white mb-4">
              Ville Pisciotta
            </h3>
            <p className="font-questrial text-sm mb-4">
              {t.description}
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Navigation Menu */}
          <div>
            <h4 className="text-white font-playfair font-semibold mb-4">{t.navigation}</h4>
            <ul className="space-y-2 font-questrial">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  {t.home}
                </Link>
              </li>
              <li>
                <Link to="/contatti" className="hover:text-accent transition-colors">
                  {t.contact}
                </Link>
              </li>
              <li>
                <Link to="/villa-mirascopello" className="hover:text-accent transition-colors">
                  {t.villaMirascopello}
                </Link>
              </li>
              <li>
                <Link to="/villa-gelvi" className="hover:text-accent transition-colors">
                  {t.villaGelvi}
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-playfair font-semibold mb-4">{t.usefulLinks}</h4>
            <ul className="space-y-2 font-questrial">
              <li>
                <Link to="/terms" className="hover:text-accent transition-colors">
                  {t.terms}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-accent transition-colors">
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link to="/cookie" className="hover:text-accent transition-colors">
                  {t.cookie}
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-accent transition-colors">
                  {t.sitemap}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-playfair font-semibold mb-4">{t.contacts}</h4>
            <ul className="space-y-3 font-questrial text-sm">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-accent" />
                <a href="mailto:info@villepisciotta.com" className="hover:text-accent transition-colors">
                  info@villepisciotta.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-accent" />
                <a href="tel:+393384394380" className="hover:text-accent transition-colors">
                +39 338 439 4380
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="font-questrial text-sm text-gray-400">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
