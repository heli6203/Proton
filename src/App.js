import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Aboutus from "./About";
import Services from "./Service"
import ContactUs from "./Contact";
import './App.css';
import Navbar from "./Navbar";
import Footer from "./Foo";
import LetMeet from "./Letmeets";
function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
     
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/service" element={<Services />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/letmeet" element={< LetMeet /> }/>
     </Routes>
     <Footer />
     </Router>
     
     
    </div>
  );
}

export default App;
