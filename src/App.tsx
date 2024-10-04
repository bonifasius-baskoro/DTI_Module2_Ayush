import {
  Route,
  Routes
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ContactPage from "./pages/ContactPage";
import InternalPage from "./pages/Internal"
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/table" element={<InternalPage />} />
    </Routes>
  )
}
  
export default App
