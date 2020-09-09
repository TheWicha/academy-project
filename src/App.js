import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Cards from "./components/Cards/Cards";
import Playstore from "./components/Playstore/Playstore";
import Testimonials from "./components/Testimonials/Testimonials";
import Clients from "./components/Clients/Clients";
import ClientsMobile from "./components/Clients/ClientsMobile";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 600 ? setIsMobile(true) : setIsMobile(false);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Container lg="12">
        <Header />
        <Main />
        <Cards />
        <Playstore />
        <Testimonials />
        {isMobile ? <ClientsMobile /> : <Clients />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
