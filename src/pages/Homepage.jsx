import { useEffect, useState } from "react";
import Characters from "../components/Characters";
import Deal2Earn from "../components/Deal2Earn";
import Header from "../components/Header";
import Footer from "../components/shared/Footer";
import Nav from "../components/shared/Nav";
import Video from "../components/Video";
import BlackMarket from "./BlackMarket";
import Blockz from "./Blockz";
import DDZ from "./DDZ";
import Doz from "./Doz";
import RoadMap from "./RoadMap";
import Team from "./Team";
import Towers from "./Towers";

function Homepage() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 767px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 767px)")
      .addEventListener("change", (e) => setMatches(e.matches));

    const rect = document.querySelector(".Dopez_2")?.getBoundingClientRect();
    const char_base = document
      .querySelector(".char_base")
      ?.getBoundingClientRect();

    var d = document.querySelector(".char_section");
    const rect2 = document
      .querySelector(".char_section")
      ?.getBoundingClientRect();
    if (matches) {
      const finaldata = rect2?.height - char_base.height;
      d.style.position = "absolute";
      if (window.matchMedia("(min-width: 1920px)").matches) {
        d.style.top = rect?.top - finaldata - 270 + "px";
      } else if (window.matchMedia("(min-width: 1440px)").matches) {
        d.style.top = rect?.top - finaldata - 230 + "px";
      } else if (window.matchMedia("(min-width: 1366px)").matches) {
        d.style.top = rect?.top - finaldata - 455 + "px";
      } else if (window.matchMedia("(min-width: 1024px)").matches) {
        d.style.top = rect?.top - finaldata - 135 + "px";
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        d.style.top = rect?.top - finaldata - 5 + "px";
      } else {
        d.style.top = rect?.top - finaldata + "px";
        console.log(d);
      }
    }
  }, []);

  return (
    <>
      <>
        {matches && <Characters />}
        <Header />
        <Video />
        <Deal2Earn />
        <Towers />
        <DDZ />
        <Blockz />
        <Doz />
        <BlackMarket />
        <RoadMap />
        <Team />
      </>
    </>
  );
}

export default Homepage;
