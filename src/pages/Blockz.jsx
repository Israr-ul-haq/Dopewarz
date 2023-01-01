import { useEffect, useState } from "react";
import BlockzSvg from "../components/BlockzSvg";
import BlockzSvgMobile from "../components/BlockzSvgMobile";

function Blockz() {
  // useState
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 767px)").matches
  );
  // media query
  useEffect(() => {
    window
      .matchMedia("(min-width: 767px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  useEffect(() => {
    // Bronze block hover start
    document
      .querySelector(".blockzicon__bronze")
      .addEventListener("mouseenter", (e) => {
        document
          .querySelector(".blockzicons__bronze")
          .classList.add("blockzicons__bronze_active");

        document
          .querySelector(".blockzicons__silver")
          .classList.remove("blockzicons__silver_active");
        document
          .querySelector(".blockzicons__gold")
          .classList.remove("blockzicons__gold_active");
        document
          .querySelector(".blockzicons__platinum")
          .classList.remove("blockzicons__platinum_active");
        document
          .querySelector(".bronzedescription")
          .classList.add("bronzedescription-active");
        document
          .querySelector(".silverdescription")
          .classList.remove("silverdescription-active");
        document
          .querySelector(".golddescription")
          .classList.remove("golddescription-active");
        document
          .querySelector(".platinumdescription")
          .classList.remove("platinumdescription-active");
        document
          .querySelector(".bronzetitle")
          .classList.add("bronzetitle-active");
        document
          .querySelector(".silvertitle")
          .classList.remove("silvertitle-active");
        document
          .querySelector(".goldtitle")
          .classList.remove("goldtitle-active");
        document
          .querySelector(".platinumtitle")
          .classList.remove("platinumtitle-active");
        document
          .querySelector(".blockzblockbronze")
          .classList.add("blockzblockbronze-active");
        document
          .querySelector(".blockzblocksilver")
          .classList.remove("blockzblocksilver-active");
        document
          .querySelector(".blockzblockgold")
          .classList.remove("blockzblockgold-active");
        document
          .querySelector(".blockzblockplatinum")
          .classList.remove("blockzblockplatinum-active");
      });
    // Bronze block hover end
    // silver block start
    document
      .querySelector(".blockzicon__silver")
      .addEventListener("mouseenter", (e) => {
        document
          .querySelector(".blockzicons__bronze")
          .classList.remove("blockzicons__bronze_active");
        document
          .querySelector(".blockzicons__silver")
          .classList.add("blockzicons__silver_active");
        document
          .querySelector(".blockzicons__gold")
          .classList.remove("blockzicons__gold_active");
        document
          .querySelector(".blockzicons__platinum")
          .classList.remove("blockzicons__platinum_active");
        document
          .querySelector(".bronzedescription")
          .classList.remove("bronzedescription-active");
        document
          .querySelector(".silverdescription")
          .classList.add("silverdescription-active");
        document
          .querySelector(".golddescription")
          .classList.remove("golddescription-active");
        document
          .querySelector(".platinumdescription")
          .classList.remove("platinumdescription-active");
        document
          .querySelector(".bronzetitle")
          .classList.remove("bronzetitle-active");
        document
          .querySelector(".silvertitle")
          .classList.add("silvertitle-active");
        document
          .querySelector(".goldtitle")
          .classList.remove("goldtitle-active");
        document
          .querySelector(".platinumtitle")
          .classList.remove("platinumtitle-active");
        document
          .querySelector(".blockzblockbronze")
          .classList.remove("blockzblockbronze-active");
        document
          .querySelector(".blockzblocksilver")
          .classList.add("blockzblocksilver-active");
        document
          .querySelector(".blockzblockgold")
          .classList.remove("blockzblockgold-active");
        document
          .querySelector(".blockzblockplatinum")
          .classList.remove("blockzblockplatinum-active");
      });
    // silver block end

    // gold block start
    document
      .querySelector(".blockzicon__gold")
      .addEventListener("mouseenter", (e) => {
        document
          .querySelector(".blockzicons__bronze")
          .classList.remove("blockzicons__bronze_active");
        document
          .querySelector(".blockzicons__silver")
          .classList.remove("blockzicons__silver_active");
        document
          .querySelector(".blockzicons__gold")
          .classList.add("blockzicons__gold_active");
        document
          .querySelector(".blockzicons__platinum")
          .classList.remove("blockzicons__platinum_active");
        document
          .querySelector(".bronzedescription")
          .classList.remove("bronzedescription-active");
        document
          .querySelector(".silverdescription")
          .classList.remove("silverdescription-active");
        document
          .querySelector(".golddescription")
          .classList.add("golddescription-active");
        document
          .querySelector(".platinumdescription")
          .classList.remove("platinumdescription-active");
        document
          .querySelector(".bronzetitle")
          .classList.remove("bronzetitle-active");
        document
          .querySelector(".silvertitle")
          .classList.remove("silvertitle-active");
        document.querySelector(".goldtitle").classList.add("goldtitle-active");
        document
          .querySelector(".platinumtitle")
          .classList.remove("platinumtitle-active");
        document
          .querySelector(".blockzblockbronze")
          .classList.remove("blockzblockbronze-active");
        document
          .querySelector(".blockzblocksilver")
          .classList.remove("blockzblocksilver-active");
        document
          .querySelector(".blockzblockgold")
          .classList.add("blockzblockgold-active");
        document
          .querySelector(".blockzblockplatinum")
          .classList.remove("blockzblockplatinum-active");
      });
    // gold block end

    // platinum start
    document
      .querySelector(".blockzicon__platinum")
      .addEventListener("mouseenter", (e) => {
        document
          .querySelector(".blockzicons__bronze")
          .classList.remove("blockzicons__bronze_active");
        document
          .querySelector(".blockzicons__silver")
          .classList.remove("blockzicons__silver_active");
        document
          .querySelector(".blockzicons__gold")
          .classList.remove("blockzicons__gold_active");
        document
          .querySelector(".blockzicons__platinum")
          .classList.add("blockzicons__platinum_active");
        document
          .querySelector(".bronzedescription")
          .classList.remove("bronzedescription-active");
        document
          .querySelector(".silverdescription")
          .classList.remove("silverdescription-active");
        document
          .querySelector(".golddescription")
          .classList.remove("golddescription-active");
        document
          .querySelector(".platinumdescription")
          .classList.add("platinumdescription-active");
        document
          .querySelector(".bronzetitle")
          .classList.remove("bronzetitle-active");
        document
          .querySelector(".silvertitle")
          .classList.remove("silvertitle-active");
        document
          .querySelector(".goldtitle")
          .classList.remove("goldtitle-active");
        document
          .querySelector(".platinumtitle")
          .classList.add("platinumtitle-active");
        document
          .querySelector(".blockzblockbronze")
          .classList.remove("blockzblockbronze-active");
        document
          .querySelector(".blockzblocksilver")
          .classList.remove("blockzblocksilver-active");
        document
          .querySelector(".blockzblockgold")
          .classList.remove("blockzblockgold-active");
        document
          .querySelector(".blockzblockplatinum")
          .classList.add("blockzblockplatinum-active");
      });
    // platinum END
  });
  return (
    <section className="blockz_background">
      {/* desktop svg */}
      <BlockzSvg />

      {/* mobile svg */}
      {/* {!matches && <BlockzSvgMobile />} */}
    </section>
  );
}

export default Blockz;
