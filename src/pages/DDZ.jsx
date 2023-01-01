import { useEffect, useState } from "react";
import DDZSvg from "../components/DDZSvg";
import DopezMobileSvg from "../components/DopezMobileSvg";
import AOS from "aos";
import "aos/dist/aos.css";
import Characters from "../components/Characters";
import HoverAnimation from "../components/shared/HoverAnimation";
import DopezMobileSection from "../components/DopezMobileSection";

function DDZ() {
  AOS.init();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 767px)").matches
  );
  let userAgent = navigator.userAgent;

  const [count, setCount] = useState(true);

  useEffect(() => {
    window
      .matchMedia("(min-width: 767px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    if (matches) {
      let videoWrapper = document.querySelector("#trailer_video");
      let wrapper = document.querySelector("#mysvg");
      let wrapper1 = document.querySelector("#blockzz");
      let wrapper2 = document.querySelector(".doz_section");
      let wrapper3 = document.querySelector("#team");
      let wrapper4 = document.querySelector("#blackmarket");
      window.onscroll = function (event) {
        let final = wrapper?.getBoundingClientRect()?.top;
        let final1 = wrapper1?.getBoundingClientRect()?.top;
        let final2 = wrapper2?.getBoundingClientRect()?.top;
        let final3 = wrapper3?.getBoundingClientRect()?.top;
        let final4 = wrapper4?.getBoundingClientRect()?.top;
        let videoFinal = videoWrapper?.getBoundingClientRect()?.top;

        if (final < -320 && final > -970) {
          document.querySelector("#anim4").classList.add("fadeIn");
          document.querySelector("#anim4").style.opacity = "1";
          document.querySelector("#anim5").classList.add("fadeRight");
          document.querySelector("#anim5").style.opacity = "1";
          document.querySelector("#anim6").classList.add("fadeIn");
          document.querySelector("#anim6").style.opacity = "1";
          document.querySelector("#anim7").classList.add("fadeRight");
          document.querySelector("#anim7").style.opacity = "1";
        }
        // if (final < 400 || final === 0) {
        //   document.querySelector("#Group_24").classList.add("Group_24-active");
        //   if (userAgent.match(/chrome|chromium|crios/i)) {
        //     document
        //       .querySelector("#Layer_990-2")
        //       .classList.add("Layer_990-2-active");
        //     document
        //       .querySelector(".dopezhoversection1")
        //       .classList.add("dopezhoversection1-active");
        //   } else if (userAgent.match(/firefox|fxios/i)) {
        //     document
        //       .querySelector("#Layer_990-2")
        //       .classList.add("Layer_991-active_firfox");
        //     document
        //       .querySelector("#overflow_firefoxId3")
        //       .classList.add("firfox_overflow");
        //     document
        //       .querySelector(".dopezhoversection1")
        //       .classList.add("dopezhoversection1-active");
        //   }

        //   document.querySelector("#anim3").classList.add("fadeRight");
        //   document.querySelector("#anim3").style.opacity = "1";
        //   document.querySelector("#anim").classList.add("fadeIn");
        //   document.querySelector("#anim").style.opacity = "1";
        //   document.querySelector("#anim1").classList.add("fadeIn");
        //   document.querySelector("#anim1").style.opacity = "1";
        //   document.querySelector("#anim2").classList.add("fadeRight");
        //   document.querySelector("#anim2").style.opacity = "1";
        // }

        if (final1 < 400 || final1 === 0) {
          document.querySelector("#anim8").classList.add("fadeIn");
          document.querySelector("#anim8").style.opacity = "1";
          document.querySelector("#anim9").classList.add("fadeInUp");
          document.querySelector("#anim9").style.opacity = "1";
          document.querySelector("#anim10").classList.add("fadeInUp");
          document.querySelector("#anim10").style.opacity = "1";
          document.querySelector("#anim11").classList.add("fadeRight");
          document.querySelector("#anim11").style.opacity = "1";
          document
            .querySelector("#animlamp")
            .classList.add("blockzblocklightcontainer");
        }

        if (final3 < 400 || final3 === 400) {
          document.querySelector("#anim14").classList.add("fadeIn");
          document.querySelector("#anim14").style.opacity = "1";
          document.querySelector("#anim13").classList.add("fadeRight");
          document.querySelector("#anim13").style.opacity = "1";
          document.querySelector("#anim15").classList.add("fadeInUp");
          document.querySelector("#anim15").style.opacity = "1";
        }

        if (final4 < 400 || final4 < 300) {
          document.querySelector("#anim16").classList.add("fadeIn");
          document.querySelector("#anim16").style.opacity = "1";
          document.querySelector("#anim17").classList.add("fadeRight");
          document.querySelector("#anim17").style.opacity = "1";
        }

        // if (videoFinal > 0 && videoFinal < 38 && count === true) {
        //   debugger;
        //   let video = document.querySelector("#play_video");
        //   video.src += "?autoplay=1";
        //   console.log(video.src);

        //   console.log(videoFinal);
        //   setCount(false);
        // }
      };
    } else {
      document.querySelector("#anim16").classList.add("fadeIn");
      document.querySelector("#anim16").style.opacity = "1";
      document.querySelector("#anim17").classList.add("fadeRight");
      document.querySelector("#anim17").style.opacity = "1";
      document.querySelector("#anim14").classList.add("fadeIn");
      document.querySelector("#anim14").style.opacity = "1";
      document.querySelector("#anim13").classList.add("fadeRight");
      document.querySelector("#anim13").style.opacity = "1";
      document.querySelector("#anim15").classList.add("fadeInUp");
      document.querySelector("#anim15").style.opacity = "1";
    }
  }, []);
  // onscroll animation fo characters end

  return (
    <section id="dopez" className="ddz">
      {/* desktop svg  */};{matches && <DDZSvg />}
      {/* mobile svg */}
      {!matches && <DopezMobileSection />}
      <HoverAnimation />
    </section>
  );
}

export default DDZ;
