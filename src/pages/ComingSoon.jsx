import React, { useEffect } from "react";
import ComingSoonBanner from "../components/ComingSoonBanner";

function ComingSoon() {
  var is_safari = navigator.userAgent.indexOf("Safari") > -1;
  let userAgent = navigator.userAgent;
  useEffect(() => {
    // firefox browser
    if (userAgent.match(/chrome|chromium|crios/i)) {
    } else if (is_safari) {
      document.querySelector("#text_safari").style.display = "block";
      document.querySelector("#nav_bar").style.pointerEvents = "none";
      document.querySelector("#footer_bar").style.pointerEvents = "none";
    }
  });
  return (
    <>
      <ComingSoonBanner />
      <div className="textboxblock text_comingsoon" id="text_safari">
        <p className="textboxblock__text">
          This website is not compatible to this browser for now, please use
          Chrome or Firefox. Safari mobile version getting live soon.
        </p>
      </div>
    </>
  );
}

export default ComingSoon;
