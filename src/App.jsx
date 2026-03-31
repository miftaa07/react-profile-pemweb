import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Mifta from "./pages/mifta";
import Oribel from "./pages/oribel";
import Retno from "./pages/retno";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mifta" element={<Mifta />} />
        <Route path="/oribel" element={<Oribel />} />
        <Route path="/retno" element={<Retno />} />
      </Routes>
    </Router>
  );
}

export default App;