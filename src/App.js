import APIsMain from "./components/APIs/APIsMain";
import Header from "./components/Layout/Header";

import Footer from "./components/Layout/Footer";

import "./App.css";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Header />

      <APIsMain />

      <Footer />
    </div>
  );
}

export default App;
