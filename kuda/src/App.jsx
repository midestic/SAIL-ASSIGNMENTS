import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/static/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
