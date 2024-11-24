import Page1 from "./pages/page1";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Header from "./components/Header";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Footer from "./pages/Footer";
import Page8 from "./pages/Page8";
import Cursor from "./pages/Cursor";
import { useEffect, useState } from "react";
import Social from "./components/Social";

function App() {
  useEffect(() => {
    console.log("WELCOME TO My 'PORTFOLIO'.");
  }, []);

  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
  const handleMouseMove = (e) => {
    setXVal(e.screenX);
    setYVal(e.screenY);
  };
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div
      onMouseMove={(e) => handleMouseMove(e)}
      id="main"
      className="relative overflow-x-hidden"
    >
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 />
      <Page8 />
      <Footer />
      <Cursor xVal={xVal} yVal={yVal} />
      <Social />
    </div>
  );
}

export default App;
