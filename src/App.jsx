import { Route, Router, Routes } from "react-router-dom"
import Home from "./routes/Home"

function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meniu" element={<Meniu />} />
      <Route path="/galerie" element={<Galerie />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </>
}

export default App
