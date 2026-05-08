import {BrowserRouter, Routes, Route} from "react-router"

import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

import GlobalProvider from "./state/globalProvider";

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
  <GlobalProvider>
    <BrowserRouter>
      <NavBar/>

      <main className="px-4 bg-body-tertiary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      
      </main>
        

      <Footer/>
    </BrowserRouter>
  </GlobalProvider>

  );
}

export default App
