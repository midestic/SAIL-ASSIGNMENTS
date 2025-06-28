import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./static/Header";
import Home from "./pages/Home";
import Save from "./pages/Save";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <MobileNav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
