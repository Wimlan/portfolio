import "./assets/intropage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import logo from "./assets/img/wilmaportfolio-logo02.png";

function Intro() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div className="intro-page">
        <div data-aos="fade-right" className="intro-left">
          <img
            width="250px"
            src={logo}
            alt="logo"
          />
          <h2>WILMA YASUDA</h2>
          <h3>
            <span className="coding-color">Web Development </span>
            UX/UI
          </h3>
        </div>
        <div data-aos="fade-left">
          <h1 className="desktop">
            Port <br />
            folio <br />
            Present <br />
            ation
          </h1>
          <h1 className="mobile">
            Portfolio <br />
            Presentation
          </h1>
        </div>
      </div>
    </>
  );
}

export default Intro;
