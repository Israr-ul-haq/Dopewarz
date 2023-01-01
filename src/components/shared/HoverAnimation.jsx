import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function HoverAnimation() {
  AOS.init();
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 767px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 767px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  useEffect(() => {
    // Enforcerz character  mouse enter

    document.querySelector("#enforcerz").addEventListener("mouseover", (e) => {
      document.querySelector(".enforcerz_char").classList.add("char_active");
      document
        .querySelector(".enforcerz_tagImg")
        .classList.add("enforcerz_tagImg-active");
      document
        .querySelector(".enforcerz_card")
        .classList.add("enforcerz_card-active");
    });

    // Enforcerz character  mouse out
    document.querySelector("#enforcerz").addEventListener("mouseout", (e) => {
      document.querySelector(".enforcerz_char").classList.remove("char_active");
      document
        .querySelector(".enforcerz_tagImg")
        .classList.remove("enforcerz_tagImg-active");
      document
        .querySelector(".enforcerz_card")
        .classList.remove("enforcerz_card-active");
    });

    // speciallist character mouse enter
    document.querySelector("#specialist").addEventListener("mouseover", (e) => {
      document.querySelector(".special_tag").classList.add("char_active");
      document
        .querySelector(".specialist_tagImg")
        .classList.add("enforcerz_tagImg-active");
      document
        .querySelector(".specialist_card")
        .classList.add("enforcerz_card-active");
    });

    // speciallist character mouse leave
    document.querySelector("#specialist").addEventListener("mouseout", (e) => {
      document.querySelector(".special_tag").classList.remove("char_active");
      document
        .querySelector(".specialist_tagImg")
        .classList.remove("enforcerz_tagImg-active");
      document
        .querySelector(".specialist_card")
        .classList.remove("enforcerz_card-active");
    });

    // dealerz character mouse enter
    document.querySelector("#dealerz").addEventListener("mouseover", (e) => {
      document.querySelector(".dealerz_char").classList.add("char_active");
      document
        .querySelector("#dealerz_tagImg")
        .classList.add("enforcerz_tagImg-active");
      document
        .querySelector(".dealerz_card")
        .classList.add("enforcerz_card-active");
    });
    // dealerz character mouse leave

    document.querySelector("#dealerz").addEventListener("mouseout", (e) => {
      document.querySelector(".dealerz_char").classList.remove("char_active");
      document
        .querySelector("#dealerz_tagImg")
        .classList.remove("enforcerz_tagImg-active");
      document
        .querySelector(".dealerz_card")
        .classList.remove("enforcerz_card-active");
    });

    // bodyguard character mouse enter
    document.querySelector("#bodyguard").addEventListener("mouseover", (e) => {
      document.querySelector(".body_guard_char").classList.add("char_active");
      document
        .querySelector(".bodyguard_tagImg")
        .classList.add("enforcerz_tagImg-active");
      document
        .querySelector(".bodyguard_card")
        .classList.add("enforcerz_card-active");
    });
    // bodyguard character mouse leave

    document.querySelector("#bodyguard").addEventListener("mouseout", (e) => {
      document
        .querySelector(".body_guard_char")
        .classList.remove("char_active");
      document
        .querySelector(".bodyguard_tagImg")
        .classList.remove("enforcerz_tagImg-active");
      document
        .querySelector(".bodyguard_card")
        .classList.remove("enforcerz_card-active");
    });

    // light hover effect start

    document
      .querySelector("#KingpinDopeZ")
      .addEventListener("mouseenter", (e) => {
        if (matches) {
          document
            .querySelector(".kingpinlight")
            .classList.add("kingpinlight-active");
          document
            .querySelector(".rarelight")
            .classList.remove("rarelight-active");
          document.querySelector(".oglight").classList.remove("oglight-active");
          document
            .querySelector(".commonlight")
            .classList.remove("commonlight-active");
        }

        document
          .querySelector(".kingpinclassblock")
          .classList.add("kingpinclassblock-active");
        document
          .querySelector(".ogclassblock")
          .classList.remove("ogclassblock-active");
        document
          .querySelector(".rareclassblock")
          .classList.remove("rareclassblock-active");
        document
          .querySelector(".commonclassblock")
          .classList.remove("commonclassblock-active");

        if (!matches) {
          debugger;
          document
            .querySelector(".kingpinclassblock")
            .classList.add("kingpinclassblock-active");
          document
            .querySelector(".ogclassblock")
            .classList.remove("ogclassblock-active");
          document
            .querySelector(".rareclassblock")
            .classList.remove("rareclassblock-active");
          document
            .querySelector(".commonclassblock")
            .classList.remove("commonclassblock-active");
        }
      });
    document.querySelector("#OGDopeZ").addEventListener("mouseenter", (e) => {
      if (matches) {
        document
          .querySelector(".kingpinlight")
          .classList.remove("kingpinlight-active");
        document
          .querySelector(".rarelight")
          .classList.remove("rarelight-active");
        document.querySelector(".oglight").classList.add("oglight-active");
        document
          .querySelector(".commonlight")
          .classList.remove("commonlight-active");
      }
      document
        .querySelector(".kingpinclassblock")
        .classList.remove("kingpinclassblock-active");
      document
        .querySelector(".rareclassblock")
        .classList.remove("rareclassblock-active");
      document
        .querySelector(".ogclassblock")
        .classList.add("ogclassblock-active");
      document
        .querySelector(".commonclassblock")
        .classList.remove("commonclassblock-active");

      if (!matches) {
        //   document.querySelector(".kingpinclassblock").parentElement.style.display =
        //     "none";
        //   document.querySelector(".ogclassblock").parentElement.style.display =
        //     "block";
        //   document.querySelector(".rareclassblock").parentElement.style.display =
        //     "none";
        //   document.querySelector(".commonclassblock").parentElement.style.display =
        //     "none";
        debugger;
        document
          .querySelector(".kingpinclassblock")
          .classList.remove("kingpinclassblock-active");
        document
          .querySelector(".rareclassblock")
          .classList.remove("rareclassblock-active");
        document
          .querySelector(".ogclassblock")
          .classList.add("ogclassblock-active");
        document
          .querySelector(".commonclassblock")
          .classList.remove("commonclassblock-active");
      }
    });
    document.querySelector("#RareDopeZ").addEventListener("mouseenter", (e) => {
      if (matches) {
        document
          .querySelector(".kingpinlight")
          .classList.remove("kingpinlight-active");
        document.querySelector(".oglight").classList.remove("oglight-active");
        document.querySelector(".rarelight").classList.add("rarelight-active");
        document
          .querySelector(".commonlight")
          .classList.remove("commonlight-active");
      }
      document
        .querySelector(".kingpinclassblock")
        .classList.remove("kingpinclassblock-active");
      document
        .querySelector(".rareclassblock")
        .classList.add("rareclassblock-active");
      document
        .querySelector(".ogclassblock")
        .classList.remove("ogclassblock-active");
      document
        .querySelector(".commonclassblock")
        .classList.remove("commonclassblock-active");

      if (!matches) {
        //         document.querySelector(
        //           ".kingpinclassblock"
        //         ).parentElement.style.display = "none";
        //         document.querySelector(
        //           ".ogclassblock"
        //         ).parentElement.style.display = "none";
        //         document.querySelector(
        //           ".rareclassblock"
        //         ).parentElement.style.display = "block";
        //         document.querySelector(
        //           ".commonclassblock"
        //         ).parentElement.style.display = "none";
        debugger;
        document
          .querySelector(".kingpinclassblock")
          .classList.remove("kingpinclassblock-active");
        document
          .querySelector(".rareclassblock")
          .classList.add("rareclassblock-active");
        document
          .querySelector(".ogclassblock")
          .classList.remove("ogclassblock-active");
        document
          .querySelector(".commonclassblock")
          .classList.remove("commonclassblock-active");
      }
    });
    document
      .querySelector("#CommonDopeZ")
      .addEventListener("mouseover", (e) => {
        if (matches) {
          document
            .querySelector(".kingpinlight")
            .classList.remove("kingpinlight-active");
          document.querySelector(".oglight").classList.remove("oglight-active");
          document
            .querySelector(".rarelight")
            .classList.remove("rarelight-active");
          document
            .querySelector(".commonlight")
            .classList.add("commonlight-active");
        }
        document
          .querySelector(".kingpinclassblock")
          .classList.remove("kingpinclassblock-active");
        document
          .querySelector(".rareclassblock")
          .classList.remove("rareclassblock-active");
        document
          .querySelector(".ogclassblock")
          .classList.remove("ogclassblock-active");
        document
          .querySelector(".commonclassblock")
          .classList.add("commonclassblock-active");
        if (!matches) {
          //         document.querySelector(
          //           ".kingpinclassblock"
          //         ).parentElement.style.display = "none";
          //         document.querySelector(
          //           ".ogclassblock"
          //         ).parentElement.style.display = "none";
          //         document.querySelector(
          //           ".rareclassblock"
          //         ).parentElement.style.display = "none";
          //         document.querySelector(
          //           ".commonclassblock"
          //         ).parentElement.style.display = "block";
          document
            .querySelector(".kingpinclassblock")
            .classList.remove("kingpinclassblock-active");
          document
            .querySelector(".rareclassblock")
            .classList.remove("rareclassblock-active");
          document
            .querySelector(".ogclassblock")
            .classList.remove("ogclassblock-active");
          document
            .querySelector(".commonclassblock")
            .classList.add("commonclassblock-active");
        }
      });
  });
}

export default HoverAnimation;
