import "./App.css";

import Copyright from "./components/copyright/Copyright";
import Footer from "./components/footer/Footer";
import Hero from "./components/heroSection/Hero";
import Navbar from "./components/navbar/Navbar";
import SectionEight from "./components/sectionEight/SectionEight";
import SectionFive from "./components/sectionFive/SectionFive";
import SectionFour from "./components/sectionFour/SectionFour";
import SectionSeven from "./components/sectionSeven/SectionSeven";
import SectionSix from "./components/sectionSix/SectionSix";
import SectionThree from "./components/sectionThree/SectionThree";

function App() {
  return (
    <div>
      <Navbar />

      <div className="screen">
        <Hero />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <Footer />
        <Copyright />
      </div>
    </div>
  );
}

export default App;
