import React from "react";
//svg imports
import DozSvgComponent from "../components/shared/DozSvgComponent";
// image imports
import doz_image from "../assets/images/ddz/DoZ_Rooms-animation.gif";
import doz_side_image from "../assets/images/ddz/sideImage.png";
function Doz() {
  return (
    <section id="doz" className="doz_section">
      <div id="doz_svg">
        {/* background gif  */}
        <img src={doz_image} className="Doz_image_gif" />
        <div
          className="dozsvg"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <img src={doz_side_image} className="board_side" />
          <DozSvgComponent />
        </div>
      </div>
    </section>
  );
}

export default Doz;
