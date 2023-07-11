import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ScrollButton from "./components/ScrollButton";
import ContactPopup from "./components/ContactPopup";


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route element={<Home />} path="/homepage" />
          <Route element={<ScrollButton />} path="/scrollbutton" />
          <Route element={<ContactPopup />} path="/contactpopup" />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
