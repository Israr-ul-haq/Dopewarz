//Images and Icon Imports
import LeftPiller from "../assets/images/header/Dopewarz-homepage-sidebar1-v1.png";
import RightPiller from "../assets/images/header/Dopewarz-homepage-sidebar2-v1.png";
import Logo from "../assets/images/header/Dopewarz-homepage-logo2-v1.png";
import TextBackground from "../assets/images/header/header_text_background.gif";
import WhiteButton from "../assets/images/header/WhiteButton.png";
import Stand from "../assets/images/header/Dopewarz-homepage-brideg-v1.png";
import Characters from "../assets/images/header/DopeWarsSmoke_Gif.gif";
import SplashBuilding from "../assets/images/header/splash_building_lights_gif.gif";
import GirlCharacter from "../assets/images/header/girlResponsiveChar.gif";
import BoyCharacter from "../assets/images/header/stickmanResponsiveChar.png";
// react Imports
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// animation imports
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
  //state
  AOS.init({
    once: true,
  });
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 767px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 767px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  var is_safari = navigator.userAgent.indexOf("Safari") > -1;
  let userAgent = navigator.userAgent;

  return (
    <section className="header">
      <div className="header__piller header__piller--left">
        {/* left pillar Image */}
        <img src={LeftPiller} />
      </div>
      <div className="header__videocontainer">
        {/* background building video  */}
        {/* <video autoPlay={true} loop={true} muted="muted">
          <source id="webm" src={SplashBuilding} type="video/webm" />
          Your browser does not support the video tag. I suggest you upgrade
          your browser.
        </video> */}
        <img src={SplashBuilding} id="webm" />
      </div>
      <div className="container h-100">
        <div className="header__content h-100">
          <div
            className="header__logocontainer"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            once="true"
          >
            <a className="header_logo_anchor">
              {/* header main logo */}
              <img src={Logo} className="header_logo_contains" />
            </a>
          </div>

          <div
            className="header__innercontent"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <h2 className="header__title">
              RISE AMONG THE RANKS IN THE FIRST EVER CRYPTO DRUG DEALING GAME ON
              THE BSC!
            </h2>
            <p className="header__subtitle">
              The DopeWarZ metaverse allows players to buy and sell DrugZ to
              earn real-world tradable digital assets and tokens.
            </p>
            <img src={TextBackground} className={"header__textbackground"} />
          </div>
          <div
            className="header__links"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            once="true"
          >
            {/* buttons links */}
            <a
              className="header__link"
              target="_blank"
              href="https://docs.google.com/document/d/13jJdkDMUbYcG0KBbKOgC4zxBCXMj5HYq/edit?usp=sharing&ouid=116960824385692779087&rtpof=true&sd=true"
            >
              <span className="header__linktext">Whitepaper</span>
              <img className="header__whitebutton" src={WhiteButton} />
            </a>
            <Link to="/comingsoon" className="header__link" target="_blank">
              <span className="header__linktext">Play Game</span>
              <img className="header__whitebutton" src={WhiteButton} />
            </Link>
            <a
              className="header__link"
              href="https://dopewarz.io/blackmarket/"
              target="_blank"
            >
              <span className="header__linktext">Blackmarket</span>
              <img className="header__whitebutton" src={WhiteButton} />
            </a>
          </div>
        </div>
      </div>

      {/* chracters */}

      <div
        className="header__chracters"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-easing="ease-in-sine"
        once="true"
      >
        <img src={Characters} />
      </div>

      <div className="header__stand ">
        <img src={Stand} />
      </div>
      <div className="header__piller header__piller--right">
        {/* right pillar  */}
        <img src={RightPiller} />
      </div>
      {/* girl character */}
      <img
        className="girlResponsive responsiveCharcters"
        src={GirlCharacter}
        alt=""
      />
      {/* boy character */}
      <img className="stickman" src={BoyCharacter} alt="" />
    </section>
  );
}

export default Header;
