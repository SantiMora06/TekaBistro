import { Route, Routes } from "react-router-dom"
import Home from "./routes/HomePage"
import Footer from "./components/Footer"
import Galerie from "./routes/Galerie"
import Meniu from "./routes/Meniu"
import Contact from "./routes/Contact"
import DespreNoi from "./routes/DespreNoi"

function App() {
  return <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meniu" element={<Meniu />} />
      <Route path="/galerie" element={<Galerie />} />
      <Route path="/despre-noi" element={<DespreNoi />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </>
}

export default App
