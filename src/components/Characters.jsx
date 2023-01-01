import React, { useEffect } from "react";
import Dealers from "../assets/images/dopez/Layer 991.png";
import HoverAnimation from "../components/shared/HoverAnimation";
import Enforcesrs from "../assets/images/dopez/men.png";
import special from "../assets/images/dopez/Layer 990.png";
import DopezBlockImage from "../assets/images/dopez/DopeZ__0013_OGBulletIcon.png";
import CunningImage from "../assets/images/dopez/DopeZ_CunningIcon.png";
import PowerImage from "../assets/images/dopez/DopeZ_PowerIcon.png";
import RespectImage from "../assets/images/dopez/DopeZ_RespectIcon.png";
import SkillImage from "../assets/images/dopez/DopeZ_SkillIcon.png";
import bodyguard from "../assets/images/dopez/Layer 993.png";
import enforcerz_tag from "../assets/images/dopez/enforcerz_tag.png";
import specialist_tag from "../assets/images/dopez/specialist_tag.png";
import bodyguard_tag from "../assets/images/dopez/bodyguard_tag.png";
import dealerz_tag from "../assets/images/dopez/Dealerz_tag.png";
import Enforcerz_card from "../assets/images/dopez/Enforcerz_card.png";
import specialist_card from "../assets/images/dopez/specialist_card.png";
import bodyguard_card from "../assets/images/dopez/bodyguard_card.png";
import dealerz_card from "../assets/images/dopez/dealerz_card.png";

function Characters() {
  return (
    <div className="container-fluid char_section" id="char_contains">
      <div className="row">
        <div className="col-md-4 char_flex pt200">
          <div id="enforcerz">
            <img
              src={Enforcesrs}
              className="enforcerz_char"
              style={{ width: "93px", height: "200px" }}
              id="enforcerz"
            />

            <img src={enforcerz_tag} className="enforcerz_tagImg" />
          </div>

          <img src={Enforcerz_card} className="enforcerz_card" />
          <div id="specialist">
            <img src={specialist_tag} className="specialist_tagImg" />
            <img
              className="special_tag"
              src={special}
              style={{ width: "70px", height: "204px" }}
            />
          </div>
          <img src={specialist_card} className="specialist_card" />
        </div>
        <div className="col-md-4 dopez_backgrounds">
          <div className="dopeztopcontainer__top">
            <div className="dopeztopcontainer__textblock">
              <img src={DopezBlockImage} />
              <h3 className="dopeztopcontainer__textblocktext">
                In-game digital assets that players can “buy” or “breed” by
                spending $DRUG & $DDZ
              </h3>
            </div>
            <div className="dopeztopcontainer__textblock">
              <img src={DopezBlockImage} />
              <h3 className="dopeztopcontainer__textblocktext">
                Use them to run and expand your DrugZ operations.
              </h3>
            </div>
            <div className="dopeztopcontainer__textblock">
              <img src={DopezBlockImage} />
              <h3 className="dopeztopcontainer__textblocktext">
                Mint and breed new DopeZ
              </h3>
            </div>
            <div className="dopeztopcontainer__textblock">
              <img src={DopezBlockImage} />
              <h3 className="dopeztopcontainer__textblocktext">
                Customize your own DopeZ via our in-game generator
              </h3>
            </div>
            <div className="dopeztopcontainer__textblock">
              <img src={DopezBlockImage} />
              <h3 className="dopeztopcontainer__textblocktext">
                Equip your DopeZ with stat upgrades to make them even better.
              </h3>
            </div>
            <div className="dopeztopcontainer__textblock">
              <img src={DopezBlockImage} />
              <h3 className="dopeztopcontainer__textblocktext">
                Level-up your DopeZ over time, the more you play, the more
                valuable they become.
              </h3>
            </div>
          </div>
          <div className="dopeztopcontainer__bottom">
            <div className="dopeztopcontainer__skillblock">
              <img src={SkillImage} />
              <div>
                <h3 className="dopeztopcontainer__skillblocktitle">Skill</h3>
                <h3 className="dopeztopcontainer__skillblocksubtitle">
                  Defines the ability to make the best DrugZ and gather the most
                  profit!
                </h3>
              </div>
            </div>
            <div className="dopeztopcontainer__skillblock">
              <img src={CunningImage} />
              <div>
                <h3 className="dopeztopcontainer__skillblocktitle">Cunning</h3>
                <h3 className="dopeztopcontainer__skillblocksubtitle">
                  Aka streetsmartness. The ability to evade dangerous
                  situations.
                </h3>
              </div>
            </div>
            <div className="dopeztopcontainer__skillblock">
              <img src={PowerImage} />
              <div>
                <h3 className="dopeztopcontainer__skillblocktitle">Power</h3>
                <h3 className="dopeztopcontainer__skillblocksubtitle">
                  The more DrugZ a DopeZ can carry and more power = more money.
                </h3>
              </div>
            </div>
            <div className="dopeztopcontainer__skillblock">
              <img src={RespectImage} />
              <div>
                <h3 className="dopeztopcontainer__skillblocktitle">Respect</h3>
                <h3 className="dopeztopcontainer__skillblocksubtitle">
                  Your chances of beating law enforcement and conducting
                  successful raids.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 char_flex pt260">
          <div id="dealerz">
            <img
              src={Dealers}
              className="dealerz_char"
              style={{ width: "80px", height: "185px" }}
            />
            <img
              src={dealerz_tag}
              className="dealerz_tagImg"
              id="dealerz_tagImg"
            />
          </div>
          <img src={dealerz_card} className="dealerz_card" />

          <div id="bodyguard">
            <img src={bodyguard_tag} className="bodyguard_tagImg" />
            <img
              className="body_guard_char"
              src={bodyguard}
              style={{ width: "150px", height: "170px" }}
            />
          </div>
          <img src={bodyguard_card} className="bodyguard_card" />
        </div>
      </div>
    </div>
  );
}

export default Characters;
