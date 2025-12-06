import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contatti from './pages/Contatti'
import VillaMirascopello from './pages/VillaMirascopello'
import VillaGelvi from './pages/VillaGelvi'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import CookiePolicy from './pages/CookiePolicy'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <Router>
      <CustomCursor />
      <ScrollToTop />
      <ScrollToTopButton />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/villa-mirascopello" element={<VillaMirascopello />} />
        <Route path="/villa-gelvi" element={<VillaGelvi />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie" element={<CookiePolicy />} />
      </Routes>
    </Router>
  )
}

export default App
