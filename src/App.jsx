import React from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/Navbar";
import Home from "./pages/Home";
import ParticlesBackground from "./components/ParticlesBackground";
function App() {
  return (
    <div className="bg-gradient-custom min-h-screen">
      <ParticlesBackground />
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
