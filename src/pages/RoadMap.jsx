import RoadMapSvg from "../components/RoadMapSvg";
import RoadMapBackground1 from "../assets/images/roadmap/ezgif.com-gif-maker(1).gif";
import RoadMapBackground2 from "../assets/images/roadmap/ezgif.com-gif-maker(2).gif";
import RoadMapBackground3 from "../assets/images/roadmap/ezgif.com-gif-maker(3).gif";
import RoadMapBackground4 from "../assets/images/roadmap/ezgif.com-gif-maker(4).gif";
import RoadMapBackground5 from "../assets/images/roadmap/ezgif.com-gif-maker(5).gif";
import RoadMapBackground6 from "../assets/images/roadmap/ezgif.com-gif-maker(6).gif";
import VideoRoad from "../assets/images/roadmap/pexels-davis-vidal-8482843.mp4";
import { useEffect } from "react";

function RoadMap() {
  // car image animation
  useEffect(() => {
    document
      .getElementById("radmapslides")
      .classList.add("radmapslides-animation");

    var change = document.getElementById("radmapslides");

    change.addEventListener("animationend", function () {
      document.querySelector("#videoroad").classList.remove("dontshow");
      document
        .getElementById("radmapslides")
        .classList.remove("radmapslides-animation");
      let video = document.querySelector("#videoroad video");
      video.play();
      video.onended = function () {
        document.querySelector("#videoroad ").classList.add("dontshow");
        document
          .getElementById("radmapslides")
          .classList.add("radmapslides-animation");
      };
    });
  });
  return (
    <section id="roadmap" className="roadmap">
      <div id="videoroad" className="dontshow">
        <video muted="true" controls={false} width="100%" height="100%">
          <source src={VideoRoad} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="radmapslides" className="radmapslides">
        <img className="radmapslide1" src={RoadMapBackground2} />
        {/* road map slide  */}
        <img className="radmapslide2" src={RoadMapBackground1} />
        <img className="radmapslide3" src={RoadMapBackground3} />
        <img className="radmapslide4" src={RoadMapBackground4} />
        <img className="radmapslide5" src={RoadMapBackground5} />
        <img className="radmapslide6" src={RoadMapBackground6} />
      </div>
      <RoadMapSvg />
    </section>
  );
}

export default RoadMap;
