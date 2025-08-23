import Navbar from "./components/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import {Canvas} from "@react-three/fiber"
import ShowcaseSection from "./sections/ShowcaseSection.jsx";

import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";
import TechStack from "./sections/TechStack.jsx";
import EducationTimeline from "./sections/EducationTimeline.jsx";
import StarfieldCanvas from "./components/StarfieldCanvas.jsx";

const App=()=>{

  return(
    
      
      <main className="relative z-0">
      {/* Fullscreen animated background */}
      <StarfieldCanvas numStars={350} speed={2} />
        
        
      
        <Navbar/>
        <Hero/>
        <EducationTimeline/>
        <ShowcaseSection/>
        <TechStack />
        <Contact />
        <Footer />
      
    </main>
  );
}
export default App;