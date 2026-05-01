import {BrowserRouter, Routes, Route} from "react-router"

import About from "./pages/About";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <BrowserRouter>
      <NavBar/>

      <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      
      </main>
        

      <Footer/>
    </BrowserRouter>

  );
}

export default App
