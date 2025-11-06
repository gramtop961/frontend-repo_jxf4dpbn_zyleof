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
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header onJoin={() => setOpen(true)} />
      <main>
        <ParallaxHero onJoin={() => setOpen(true)} />
        {/* Section 1: Numbers - deep slate with subtle grid */}
        <div className="relative isolate">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(900px_circle_at_80%_0%,rgba(168,85,247,0.12),transparent_60%)] pointer-events-none" />
          <Numbers />
        </div>
        {/* Section 2: Amenities - indigo to violet gradient */}
        <div className="bg-gradient-to-b from-indigo-950 via-violet-950 to-slate-950">
          <Amenities />
        </div>
        {/* Section 3: Pricing - charcoal with cyan accents backdrop */}
        <div className="relative isolate">
          <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_40%,rgba(34,211,238,0.12),transparent_60%)] pointer-events-none" />
          <Pricing />
        </div>
        {/* Section 4: Locations - muted purple glaze */}
        <div className="bg-[linear-gradient(180deg,rgba(30,27,75,0.7),rgba(2,6,23,1))]">
          <Locations />
        </div>
      </main>
      <Footer />
      <MembershipModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default App;
