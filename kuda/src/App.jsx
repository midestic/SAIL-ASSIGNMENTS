import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/static/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
