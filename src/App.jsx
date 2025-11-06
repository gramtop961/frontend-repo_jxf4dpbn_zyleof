import { useState } from "react";
import Header from "./components/Header";
import ParallaxHero from "./components/ParallaxHero";
import Numbers from "./components/Numbers";
import Amenities from "./components/Amenities";
import Pricing from "./components/Pricing";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import MembershipModal from "./components/MembershipModal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header onJoin={() => setOpen(true)} />
      <main>
        <ParallaxHero onJoin={() => setOpen(true)} />
        <Numbers />
        <Amenities />
        <Pricing />
        <Locations />
      </main>
      <Footer />
      <MembershipModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default App;
