import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import Navbar from "./components/NavBar.jsx";
import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";
import TechStack from "./sections/TechStack.jsx";
import EducationTimeline from "./sections/EducationTimeline.jsx";
const App=()=>{

  return(
    <main>
      <div>
        <Navbar/>
        <Hero/>
        <EducationTimeline/>
        <ShowcaseSection/>
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
export default App;