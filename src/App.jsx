import { HashRouter, Route, Routes } from "react-router-dom";
import { ItemList } from "./components/ItemList";
import { Navbar } from "./components/Navbar";
import { Contacto } from "./routes/Contacto";
import { Footer } from "./components/Footer";

function App() {
  
  return (
    <>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>

    </HashRouter>
      <h1>Items</h1>
      <ItemList />
      <Footer />
    </>
  );
}

export default App;
