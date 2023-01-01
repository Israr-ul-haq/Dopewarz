import TeamPortait from "../assets/images/team/Team_Portrait.png";
import SVG from "react-inlinesvg";
import { useState } from "react";
// team images
import teamData from "../static/TeamData";
function Team() {
  const [active, setActive] = useState(0);

  return (
    <section className="team">
      <div className="container-fluid h-100">
        <div className="team__content h-100" id="team">
          <div className="team__left" id="anim14">
            {teamData.map((item) => {
              return item.id === active ? <img src={item.person} /> : "";
            })}
          </div>
          <div className="team__right">
            <h3 className="team__title">Team</h3>
            <div className="team__frames" id="anim13">
              {teamData.map((item) => {
                return (
                  <div
                    className="team__frame"
                    onMouseEnter={() => setActive(item.id)}
                  >
                    <div className="team__innerframe">
                      <img src={TeamPortait} className="team__framepic" />
                      <img
                        src={item.portrait}
                        className="team__framepersonpic"
                      />
                      {item.id === active ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          className="team__frameactive team__frameactive-active"
                        >
                          <rect
                            width="100%"
                            height="100%"
                            fill="none"
                            stroke={item.color}
                          />
                        </svg>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="team__textboxes" id="anim15">
              {/* character images */}
              {teamData.map((item) => {
                return (
                  <div className="team__textbox">
                    {item.id === active ? (
                      <SVG className="team__svg" src={item.svg} />
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
}

export default Team;
