// images imports
import RightTower from "../assets/images/towers/token_building_light1.webp";
import leftTower from "../assets/images/towers/Left-building.png";
// svg imports
import Staking from "./shared/Staking";
import White from "../assets/images/header/WhiteButton.png";
import BuildingLeft from "./shared/BuildingLeft.jsx";
import Drug from "./shared/Drug";
import DDG from "./DDG";
import svgTest from "./shared/svgTest";
import SVG from "react-inlinesvg";

function Tower() {
  return (
    <section id="tokenomics" className="towers">
      <div className="towers__content">
        <div className="towers__left">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            {/* staking svg */}
            {/* {svgTest.map((item) => {
              return (
                <div className="team__textbox">
                  <SVG src={item.svg} className="team__svg" />;
                </div>
              );
            })} */}
            <Staking />
          </div>
          {/* Background buiilding image */}
          <BuildingLeft />
        </div>
        <div className="towers__right">
          {/* <video
            className="towers__video"
            autoPlay={true}
            loop={true}
            muted="muted"
          >
            <source src={RightTower} type="video/webp" />
            Your browser does not support the video tag. I suggest you upgrade
            your browser.
          </video> */}

          {/* right tower */}
          <img src={RightTower} className="towers__video" />

          <div
            className="towers__twintowers"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            {/* svg component imports */}

            <Drug />
            <DDG />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tower;
