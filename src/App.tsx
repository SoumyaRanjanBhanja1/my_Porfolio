import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import LoginWithOTP from "./components/LoginWithOtp";
import AdminDashboard from "./components/AdminDashboard";


const App = () => {
 
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Timeline />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/LoginWithOtp" element={<LoginWithOTP/>}/>
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
