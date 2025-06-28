import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/static/Header";
import Home from "./pages/Home";
import Personal from "./pages/Personal";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/personal" element={<Personal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
