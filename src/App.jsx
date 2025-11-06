import Header from './components/Header'
import Hero from './components/Hero'
import Numbers from './components/Numbers'
import Amenities from './components/Amenities'
import Pricing from './components/Pricing'
import Locations from './components/Locations'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-inter text-slate-800 bg-white">
      <Header />
      <Hero />
      <Numbers />
      <Amenities />
      <Pricing />
      <Locations />
      <Footer />
    </div>
  )
}

export default App
