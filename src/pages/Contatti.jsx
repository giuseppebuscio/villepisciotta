import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../contexts/LanguageContext'

const Contatti = () => {
  const { language } = useLanguage()

  const translations = {
    it: {
      title: 'Contatti - Ville Pisciotta | Prenota la Tua Vacanza in Sicilia',
      pageTitle: 'Contatti',
      contactInfo: 'Informazioni di Contatto',
      email: 'Email',
      phone: 'Telefono',
      sendMessage: 'Invia un Messaggio',
      name: 'Nome',
      message: 'Messaggio',
      sending: 'Invio in corso...',
      send: 'Invia Messaggio',
      success: '✓ Messaggio inviato con successo! Ti risponderemo al più presto.',
      error: '✗ Errore nell\'invio del messaggio. Riprova più tardi o contattaci direttamente via email/telefono.',
      whatsappUgo: 'Contatta Ugo su WhatsApp',
      whatsappVincenzo: 'Contatta Vincenzo su WhatsApp',
      whatsappDeborah: 'Contatta Deborah su WhatsApp',
      roleMainManager: 'Gestore principale',
      roleEnglishContact: 'Referente inglese',
      roleItalianContact: 'Referente italiano',
      italianLanguage: 'Italiano',
      englishLanguage: 'Inglese'
    },
    en: {
      title: 'Contact - Ville Pisciotta | Book Your Vacation in Sicily',
      pageTitle: 'Contact',
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      sendMessage: 'Send a Message',
      name: 'Name',
      message: 'Message',
      sending: 'Sending...',
      send: 'Send Message',
      success: '✓ Message sent successfully! We will reply as soon as possible.',
      error: '✗ Error sending message. Please try again later or contact us directly by email/phone.',
      whatsappUgo: 'Contact Ugo on WhatsApp',
      whatsappVincenzo: 'Contact Vincenzo on WhatsApp',
      whatsappDeborah: 'Contact Deborah on WhatsApp',
      roleMainManager: 'Main manager',
      roleEnglishContact: 'English contact',
      roleItalianContact: 'Italian contact',
      italianLanguage: 'Italian',
      englishLanguage: 'English'
    }
  }

  const t = translations[language]

  // Imposta il titolo della pagina
  useEffect(() => {
    document.title = t.title
  }, [language, t.title])

  // Configurazione EmailJS
  const EMAILJS_PUBLIC_KEY = 'BavXkDkgbZrizWYmm'
  const EMAILJS_SERVICE_ID = 'service_aruba_VP'
  const EMAILJS_TEMPLATE_ID = 'template_m68tdem'

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Reset status quando l'utente modifica il form
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Inizializza EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY)

      // Prepara i parametri per il template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        // Per inviare a due caselle email, nel template EmailJS usa:
        // To Email: info@villepisciotta.com,seconda@email.com
        // Oppure configura due servizi separati e invia due email
      }

      // Invia l'email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      // OPZIONE: Se vuoi inviare a due caselle email separate, decommenta questo codice:
      // await emailjs.send(
      //   EMAILJS_SERVICE_ID_2, // Secondo Service ID
      //   EMAILJS_TEMPLATE_ID,
      //   templateParams
      // )

      // Successo
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset del messaggio di successo dopo 5 secondi
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error('Errore invio email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-[50vh] w-full">
        <img
          src="/mirascopello/3.jpg"
          alt="Salotto della villa MiraScopello"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white text-center px-4">
            {t.pageTitle}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-6 text-primary">
                {t.contactInfo}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start bg-white/70 border border-gray-200 rounded-none p-4 shadow-sm">
                  <Mail className="text-accent mt-1 mr-4" size={24} />
                  <div>
                    <h3 className="font-playfair font-semibold mb-1">{t.email}</h3>
                    <a href="mailto:info@villepisciotta.it" className="font-questrial text-gray-700 hover:text-accent transition-colors duration-300">
                      info@villepisciotta.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start justify-between bg-white/70 border border-gray-200 rounded-none p-4 shadow-sm">
                  <div className="flex items-start flex-1">
                    <Phone className="text-accent mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-playfair font-semibold mb-1">{t.phone}</h3>
                      <a href="tel:+393384394380" className="font-questrial text-gray-700 hover:text-accent transition-colors duration-300">
                        +39 338 439 4380 - Ugo
                      </a>
                      <p className="font-questrial text-sm text-gray-500 mt-1 flex items-center gap-2">
                        <span>{t.roleMainManager}</span>
                        <span className="inline-flex items-center gap-1">
                          <img
                            src="https://flagcdn.com/w20/it.png"
                            alt={t.italianLanguage}
                            className="inline-block w-5 h-3 object-cover"
                          />
                          <img
                            src="https://flagcdn.com/w20/gb.png"
                            alt={t.englishLanguage}
                            className="inline-block w-5 h-3 object-cover"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/393384394380"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20BA5A] rounded-full p-2 transition-colors duration-300 flex-shrink-0 ml-4"
                    aria-label={t.whatsappUgo}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
                <div className="flex items-start justify-between bg-white/70 border border-gray-200 rounded-none p-4 shadow-sm">
                  <div className="flex items-start flex-1">
                    <Phone className="text-accent mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-playfair font-semibold mb-1">{t.phone}</h3>
                      <a href="tel:+393388840856" className="font-questrial text-gray-700 hover:text-accent transition-colors duration-300">
                        +39 338 884 0856 - Deborah
                      </a>
                      <p className="font-questrial text-sm text-gray-500 mt-1 flex items-center gap-2">
                        <span>{t.roleEnglishContact}</span>
                        <span className="inline-flex items-center gap-1">
                          <img
                            src="https://flagcdn.com/w20/it.png"
                            alt={t.italianLanguage}
                            className="inline-block w-5 h-3 object-cover"
                          />
                          <img
                            src="https://flagcdn.com/w20/gb.png"
                            alt={t.englishLanguage}
                            className="inline-block w-5 h-3 object-cover"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/393388840856"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20BA5A] rounded-full p-2 transition-colors duration-300 flex-shrink-0 ml-4"
                    aria-label={t.whatsappDeborah}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
                <div className="flex items-start justify-between bg-white/70 border border-gray-200 rounded-none p-4 shadow-sm">
                  <div className="flex items-start flex-1">
                    <Phone className="text-accent mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-playfair font-semibold mb-1">{t.phone}</h3>
                      <a href="tel:+393314706835" className="font-questrial text-gray-700 hover:text-accent transition-colors duration-300">
                        +39 331 470 6835 - Vincenzo
                      </a>
                      <p className="font-questrial text-sm text-gray-500 mt-1 flex items-center gap-2">
                        <span>{t.roleItalianContact}</span>
                        <span className="inline-flex items-center gap-1">
                          <img
                            src="https://flagcdn.com/w20/it.png"
                            alt={t.italianLanguage}
                            className="inline-block w-5 h-3 object-cover"
                          />
                        </span>
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/393314706835"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20BA5A] rounded-full p-2 transition-colors duration-300 flex-shrink-0 ml-4"
                    aria-label={t.whatsappVincenzo}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair font-semibold mb-6 text-primary">
                {t.sendMessage}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-questrial text-gray-700 mb-2">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent font-questrial"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-questrial text-gray-700 mb-2">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent font-questrial"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-questrial text-gray-700 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-accent font-questrial"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                {/* Messaggi di stato */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-none font-questrial">
                    {t.success}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-none font-questrial">
                    {t.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-[rgb(170,120,40)] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-none font-questrial font-semibold transition-all duration-300"
                >
                  {isSubmitting ? t.sending : t.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Contatti

