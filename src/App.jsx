import Header from "./components/Header";
import Hero from "./components/Hero";
import Numbers from "./components/Numbers";
import Amenities from "./components/Amenities";
import Pricing from "./components/Pricing";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Numbers />
        <Amenities />
        <Pricing />
        <Locations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
