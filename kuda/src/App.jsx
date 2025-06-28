import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./static/Header";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MobileNav />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
