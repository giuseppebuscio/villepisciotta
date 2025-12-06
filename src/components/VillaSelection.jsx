import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const VillaSelection = () => {
  return (
    <section id="villas" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Scegli la tua villa
          </h2>
          <p className="text-lg text-gray-600 font-questrial max-w-2xl mx-auto">
            Due esperienze uniche per vivere la Sicilia nel lusso e nel comfort
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Villa Mirascopello */}
          <Link
            to="/villa-mirascopello"
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/mirascopello/2.jpg"
                alt="Esterno della villa MiraScopello"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-3xl font-playfair font-bold mb-2">
                Villa Mirascopello
              </h3>
              <p className="font-questrial mb-4 opacity-90">
                Un'oasi di eleganza con vista panoramica sul mare
              </p>
              <div className="flex items-center text-accent group-hover:text-[rgb(170,120,40)] transition-colors">
                <span className="font-questrial mr-2">Scopri di più</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Villa Gelvi */}
          <Link
            to="/villa-gelvi"
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/gelvi/C segesta/2.jpg"
                alt="Interno appartamento Segesta Villa Gelvi"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-3xl font-playfair font-bold mb-2">
                Villa Gelvi
              </h3>
              <p className="font-questrial mb-4 opacity-90">
                Raffinatezza e comfort in un ambiente esclusivo
              </p>
              <div className="flex items-center text-accent group-hover:text-[rgb(170,120,40)] transition-colors">
                <span className="font-questrial mr-2">Scopri di più</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default VillaSelection
