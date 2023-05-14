import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Hero'
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Development from "./components/Development";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
           <Route index element={<Hero />} />
           <Route path="contact" element={<Contact />} />
           <Route path="works" element={<Works />} />
           <Route path="studio" element={<Who />} />
           <Route path="who" element={<Development />} />
           <Route path="*" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

