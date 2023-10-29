import { HashRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Contacto } from "./routes/Contacto";
import { Footer } from "./components/Footer";
import { AdminArea } from "./routes/AdminArea";
import { ItemsContainer } from "./routes/ItemsContainer";
import { Home } from "./routes/Home";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/productos" element={<ItemsContainer />} />
          <Route exact path="/adminArea" element={<AdminArea />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
