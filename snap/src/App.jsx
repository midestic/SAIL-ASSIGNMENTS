import "./App.css";
import Hero from "./components/heroSection/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="app">
      <div className="box">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
