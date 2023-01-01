// import Logo from "../../assets/images/nav/Dopewarz-homepage-logo-v1.png";
import Logo from "../../assets/images/header/Dopewarz-homepage-logo2-v1.png";
import Logo1 from "../../assets/images/footer/quinox-logo-footer.png";
import Logo2 from "../../assets/images/footer/redkite-footer-logo.png";
import Logo3 from "../../assets/images/footer/roseon-logo.png";
import Logo4 from "../../assets/images/footer/game-station-logo-footer.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-md-3">
              <img src={Logo} width="100%" />
            </div>
            <div className="col-md-3">
              <div className="footer_linkssection" id="footer_bar">
                <h3 className="footer__title"> MAIN LINKS </h3>
                <div className="footer__links">
                  <HashLink to="/#deal2Earn" className="footer__link">
                    Deal2Earn
                  </HashLink>
                  <HashLink to="/#tokenomics" className="footer__link">
                    Tokenomics
                  </HashLink>
                  <HashLink to="/#dopez" className="footer__link">
                    DopeZ
                  </HashLink>
                  <HashLink to="/#blockz" className="footer__link">
                    BlockZ
                  </HashLink>
                  <HashLink to="/#doz" className="footer__link">
                    {" "}
                    DoZ
                  </HashLink>
                  <HashLink to="/#blackmarket" className="footer__link">
                    Blackmarket
                  </HashLink>
                  <HashLink to="/#roadmap" className="footer__link">
                    Roadmap
                  </HashLink>
                  <HashLink to="/#team" className="footer__link">
                    Team
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-items-center d-flex flex-column">
              <h3 className="footer__title"> PARTNERS </h3>
              <div className="footer__toplogosection">
                <img src={Logo1} />
                <img src={Logo2} />
              </div>
              <div className="footer__bottomlogosection">
                <img src={Logo3} />
                <img src={Logo4} />
              </div>
              <p className="footer__copyright">@2020 Dopewarz Deal 2 Earn</p>
            </div>
          </div>
          <p className="footer__copyright dMobile">
            @2020 Dopewarz Deal 2 Earn
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
