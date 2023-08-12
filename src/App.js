import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import ScrollButton from "./components/ScrollButton";
import Random from "./screens/Random";
import ContactPage from "./components/ContactPage";


function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ScrollButton />} path="/scrollbutton" />
          {/* <Route element={<ContactPage />} path="/contactpopup" /> */}
          <Route element={<Random />} path="/random" />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
