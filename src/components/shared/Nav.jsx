import Logo from "../../assets/images/nav/Dopewarz-homepage-logo-v1.png";
import RedUnderline from "../../assets/images/nav/Dopewarz-homepage-Deal2Earnhighlight-v1.png";
import Tokenomics from "../../assets/images/nav/Tokenomics_active_tab_bar.webp";
import Dopez from "../../assets/images/nav/Dopewarz-homepage-Dopez-v1.png";
import BLOCKZ from "../../assets/images/nav/Dopewarz-homepage-blockZ-v1.png";
import DOZ from "../../assets/images/nav/Dopewarz-homepage-doZ-v1.png";
import BlackMarket from "../../assets/images/nav/blackmarkets_active_tab_bar.webp";
import Roadmap from "../../assets/images/nav/Dopewarz-homepage-roadmap-v1.png";
import PlayGame from "../../assets/images/nav/Dopewarz-homepage-playgame-v1.png";
import Twitter from "../../assets/images/nav/Twitter.png";
import Instagram from "../../assets/images/nav/instagram.png";
import Discord from "../../assets/images/nav/Discord.png";
import Telegram from "../../assets/images/nav/Telegram.png";
import TwitterRed from "../../assets/images/nav/Header_TwitterIcon_Hover.png";
import InstagramRed from "../../assets/images/nav/instagram-1.png";
import DiscordRed from "../../assets/images/nav/Header_DiscordIcon_Hover.png";
import TelegramRed from "../../assets/images/nav/Header_TelegramIcon_Hover.png";
import MobileMenu from "../../assets/images/nav/more.png";
import line from "../../assets/images/nav/Dopewarz-header2.png";
import Close from "../../assets/images/nav/close.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink } from "react-router-hash-link";

function Nav() {
  // state
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1028px)").matches
  );

  useEffect(() => {
    // media query
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
    // mobile hamburger menu start
    if (!matches) {
      document
        .querySelector(".navbarfirstsection__mobilehambutgercontainer")
        .addEventListener("click", function activateMobileMenu() {
          document
            .querySelector(".mobilemenucontainer")
            .classList.add("mobilemenucontainer-active");
        });
      document
        .querySelector(".mobileclosecontainer")
        .addEventListener("click", function removeMobileMenu() {
          debugger;
          document
            .querySelector(".mobilemenucontainer")
            .classList.remove("mobilemenucontainer-active");
        });

      document.querySelectorAll(".navbarfirstsection__link").forEach((item) => {
        item.addEventListener("click", function removeMobileMenu() {
          document
            .querySelector(".mobilemenucontainer")
            .classList.remove("mobilemenucontainer-active");
        });
      });
    }
    // mobile hamburger menu end
  }, []);
  return (
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container">
        <div className="row w-100">
          <div className={matches ? "col-9" : "col-12"}>
            <div className="navbarfirstsection" id="nav_bar">
              <img src={line} className="navimagefirst" />
              <div className="navbarfirstsection__logocontainer">
                <Link to="/">
                  <img src={Logo} />
                </Link>
              </div>
              {/* hamburger menu container  */}
              {!matches && (
                <div className="navbarfirstsection__mobilehambutgercontainer">
                  <img
                    src={MobileMenu}
                    className="navbarfirstsection__mobilehambutger"
                  />
                </div>
              )}

              {/* media links  start*/}
              {!matches && (
                <div className="navbarsecondsection">
                  <a
                    className="navbarsecondsection__link"
                    href="https://twitter.com/DopeWarz_ofcl"
                  >
                    <img className="navbarsecondsection__image" src={Twitter} />
                    <img
                      className="navbarsecondsection__image navbarsecondsection__image-hover"
                      src={TwitterRed}
                    />
                  </a>
                  <a
                    className="navbarsecondsection__link"
                    href="https://www.instagram.com/dopewarz/?hl=en"
                  >
                    <img
                      className="navbarsecondsection__image"
                      src={Instagram}
                    />
                    <img
                      className="navbarsecondsection__image navbarsecondsection__image-hover"
                      src={InstagramRed}
                    />
                  </a>
                  <a
                    className="navbarsecondsection__link"
                    href="https://discord.com/invite/dopewarz"
                  >
                    <img className="navbarsecondsection__image" src={Discord} />
                    <img
                      className="navbarsecondsection__image navbarsecondsection__image-hover"
                      src={DiscordRed}
                    />
                  </a>
                  <a
                    className="navbarsecondsection__link"
                    href="https://t.me/dopewarzann"
                  >
                    <img
                      className="navbarsecondsection__image"
                      src={Telegram}
                    />
                    <img
                      className="navbarsecondsection__image navbarsecondsection__image-hover"
                      src={TelegramRed}
                    />
                  </a>
                </div>
              )}
              {/* media links end*/}

              {/* internal page section links start */}
              {matches && (
                <div className="navbarfirstsection__links">
                  <HashLink
                    to="/#deal2Earn"
                    className="navbarfirstsection__link"
                  >
                    <span className="navbarfirstsection__linktext">
                      DEAL2EARN
                    </span>
                    <img
                      className="navbarfirstsection__underline"
                      src={RedUnderline}
                    />
                  </HashLink>
                  <HashLink
                    to="/#tokenomics"
                    className="navbarfirstsection__link"
                  >
                    <span className="navbarfirstsection__linktext">
                      Tokenomics
                    </span>
                    <img
                      className="navbarfirstsection__underline"
                      src={Tokenomics}
                    />
                  </HashLink>
                  <HashLink to="/#dopez" className="navbarfirstsection__link">
                    <span className="navbarfirstsection__linktext">Dopez</span>
                    <img
                      className="navbarfirstsection__underline"
                      src={Dopez}
                    />
                  </HashLink>
                  <HashLink to="/#blockz" className="navbarfirstsection__link">
                    <span className="navbarfirstsection__linktext">BLOCKZ</span>
                    <img
                      className="navbarfirstsection__underline"
                      src={BLOCKZ}
                    />
                  </HashLink>
                  <HashLink to="/#doz" className="navbarfirstsection__link">
                    <span className="navbarfirstsection__linktext">DOZ</span>
                    <img className="navbarfirstsection__underline" src={DOZ} />
                  </HashLink>
                  <HashLink
                    to="/#blackmarket"
                    className="navbarfirstsection__link"
                  >
                    <span className="navbarfirstsection__linktext">
                      BlackMarket
                    </span>
                    <img
                      className="navbarfirstsection__underline"
                      src={BlackMarket}
                    />
                  </HashLink>

                  <HashLink to="/#roadmap" className="navbarfirstsection__link">
                    <span className="navbarfirstsection__linktext">
                      Roadmap
                    </span>
                    <img
                      className="navbarfirstsection__underline"
                      src={Roadmap}
                    />
                  </HashLink>
                  <Link
                    to="/comingsoon"
                    className="navbarfirstsection__link"
                    target="_blank"
                  >
                    <span className="navbarfirstsection__linktext navbarfirstsection__linktext--playgame">
                      Play Game
                    </span>
                    <img
                      className="navbarfirstsection__playgame"
                      src={PlayGame}
                    />
                  </Link>
                </div>
              )}
              {/* internal page section links end */}
            </div>
          </div>
          {matches && <div className="col-md-1"></div>}

          {/* mobile media link start */}
          {matches && (
            <div className="col-md-2">
              <div className="navbarsecondsection">
                <a
                  className="navbarsecondsection__link"
                  href="https://twitter.com/DopeWarz_ofcl"
                  target="_blank"
                >
                  <img className="navbarsecondsection__image" src={Twitter} />
                  <img
                    className="navbarsecondsection__image navbarsecondsection__image-hover"
                    src={TwitterRed}
                  />
                </a>
                <a
                  className="navbarsecondsection__link"
                  href="https://www.instagram.com/dopewarz/?hl=en"
                  target="_blank"
                >
                  <img className="navbarsecondsection__image" src={Instagram} />
                  <img
                    className="navbarsecondsection__image navbarsecondsection__image-hover"
                    src={InstagramRed}
                  />
                </a>
                <a
                  className="navbarsecondsection__link"
                  href="https://discord.com/invite/dopewarz"
                  target="_blank"
                >
                  <img className="navbarsecondsection__image" src={Discord} />
                  <img
                    className="navbarsecondsection__image navbarsecondsection__image-hover"
                    src={DiscordRed}
                  />
                </a>
                <a
                  className="navbarsecondsection__link"
                  href="https://t.me/dopewarzann"
                  target="_blank"
                >
                  <img className="navbarsecondsection__image" src={Telegram} />
                  <img
                    className="navbarsecondsection__image navbarsecondsection__image-hover"
                    src={TelegramRed}
                  />
                </a>
              </div>
            </div>
          )}
          {/* mobile media link end */}
          {/* hamburger mobile media links start */}
          {!matches && (
            <div className="mobilemenucontainer">
              <div className="mobileclosecontainer">
                <img src={Close} />
              </div>
              <div className="navbarfirstsection__links" id="nav_bar">
                <HashLink to="/#deal2Earn" className="navbarfirstsection__link">
                  <span className="navbarfirstsection__linktext">
                    DEAL2EARN
                  </span>
                  <img
                    className="navbarfirstsection__underline"
                    src={RedUnderline}
                  />
                </HashLink>
                <HashLink
                  to="/#tokenomics"
                  className="navbarfirstsection__link"
                >
                  <span className="navbarfirstsection__linktext">
                    Tokenomics
                  </span>
                  <img
                    className="navbarfirstsection__underline"
                    src={Tokenomics}
                  />
                </HashLink>
                <HashLink to="/#dopez" className="navbarfirstsection__link">
                  <span className="navbarfirstsection__linktext">Dopez</span>
                  <img className="navbarfirstsection__underline" src={Dopez} />
                </HashLink>
                <HashLink to="/#blockz" className="navbarfirstsection__link">
                  <span className="navbarfirstsection__linktext">BLOCKZ</span>
                  <img className="navbarfirstsection__underline" src={BLOCKZ} />
                </HashLink>
                <HashLink to="/#doz" className="navbarfirstsection__link">
                  <span className="navbarfirstsection__linktext">DOZ</span>
                  <img className="navbarfirstsection__underline" src={DOZ} />
                </HashLink>
                <HashLink
                  to="/#blackmarket"
                  className="navbarfirstsection__link"
                >
                  <span className="navbarfirstsection__linktext">
                    BlackMarket
                  </span>
                  <img
                    className="navbarfirstsection__underline"
                    src={BlackMarket}
                  />
                </HashLink>

                <HashLink to="/#roadmap" className="navbarfirstsection__link">
                  <span className="navbarfirstsection__linktext">Roadmap</span>
                  <img
                    className="navbarfirstsection__underline"
                    src={Roadmap}
                  />
                </HashLink>
                <Link
                  to="/comingsoon"
                  target="_blank"
                  className="navbarfirstsection__link"
                >
                  <span className="navbarfirstsection__linktext navbarfirstsection__linktext--playgame">
                    Play Game
                  </span>
                  <img
                    className="navbarfirstsection__playgame"
                    src={PlayGame}
                  />
                </Link>
              </div>
            </div>
          )}
          {/* hamburger mobile media links end */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
