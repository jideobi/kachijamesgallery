
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/NavBar'
import Footer from './component/Footer'
import SearchResults from './pages/SearchPage'
import About from './pages/About'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import Exhibition from './pages/Exhibition'
import Gallery from './pages/Gallery'
import GalleryDetailPage from './pages/GalleryDetailPage'
import ExhibitionDetailPage from './pages/ExhibitionDetailPage'
import PartnersSection from './component/PartnersSection'
import PlanYourVisit from './pages/PlanYourVisit'


function App() {


  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/exhibitions" element={<Exhibition />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/planyourvisit" element={<PlanYourVisit />} />
        <Route path="/artworks/:id" element={<GalleryDetailPage />} />
        <Route path="/exhibitions/:id" element={<ExhibitionDetailPage />} />
      </Routes>
      <PartnersSection />
      <Footer />
    </>
  )
}

export default App
