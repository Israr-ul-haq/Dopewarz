// images imports
import LeftPiller from "../assets/images/video/Left-sidebar-v1.jpg";
import RightPiller from "../assets/images/video/Right-sidebar-v1.jpg";
import TrailerBillboard from "../assets/images/video/Trailer_billboard.webp";
import lights from "../assets/images/video/lights.png";

function Video() {
  return (
    <section className="video" id="trailer_video">
      {/* left pillar */}
      <div className="video__piller video__piller--left">
        <img src={LeftPiller} />
      </div>
      <div className="container margin_video">
        <div className="video__content h-100">
          <div className="background_image_gif">
            {/* youtube video iframe */}
            <iframe
              className="video__videoframe"
              id="play_video"
              src="https://www.youtube.com/embed/QPgamAHXSjs"
              frameborder="0"
              allowfullscreen
            ></iframe>
            {/* backgroud image */}
            <img className="video__billboard" src={TrailerBillboard} />
            {/* videoboard lights */}
            <img className="video_lights" src={lights} />
          </div>
        </div>
      </div>
      {/* right pillar */}
      <div className="video__piller video__piller--right">
        <img src={RightPiller} />
      </div>
    </section>
  );
}

export default Video;
