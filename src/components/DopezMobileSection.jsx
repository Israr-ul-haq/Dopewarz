import React from "react";
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
import Dealers from "../assets/images/dopez/Layer 991.png";
import Brronze from "../assets/images/dopez/BlockZ_BronzeIcon.png";
import Gold from "../assets/images/dopez/BlockZ_GoldIcon.png";
import Platinum from "../assets/images/dopez/BlockZ_PlatinumIcon.png";
import Silver from "../assets/images/dopez/BlockZ_SilverIcon.png";
import PlatBullet from "../assets/images/dopez/DopeZ__0015_KingpinBulletPoint.png";
import GoldBullet from "../assets/images/dopez/DopeZ__0013_OGBulletIcon.png";
import SilverBullet from "../assets/images/dopez/DopeZ__0005_RareBulletPoint.png";
import BrronzeBullet from "../assets/images/dopez/DopeZ__0007_CommonBulletPoint.png";
import PlatGif from "../assets/images/dopez/DopeZ_KingpinImages.gif";
import BrronzeGif from "../assets/images/dopez/DopeZ_CommonImages.gif";
import GoldGif from "../assets/images/dopez/DopeZ_OGImages.gif";
import Specialist from "../assets/images/dopez/DopeZ__0011_Specialist-class-icon.png";
import Enforcer from "../assets/images/dopez/DopeZ__0009_Enforcer-class-icon.png";
import Bodyguard from "../assets/images/dopez/DopeZ__0010_Bodyguard-class-icon.png";
import Dealer from "../assets/images/dopez/DopeZ__0008_Dealer-class-icon.png";
import SilverGif from "../assets/images/dopez/DopeZ_RareImages.gif";
import dopeztext from "../assets/images/dopez/DopeZ_Billboard.gif";
import dopez_image from "../assets/images/dopez/DopeZ__0002_CommonDopeZ.png";
import dopez_image1 from "../assets/images/dopez/DopeZ__0000_OGDopeZ.png";
import goldenbullets from "../assets/images/dopez/DopeZ__0013_OGBulletIcon.png";
import mobileBillboard from "../assets/images/dopez/Mobile-responsive-billboard.png";
import common from "../assets/images/dopez/Common.png";
import kingpin from "../assets/images/dopez/Kingpin.png";
import og from "../assets/images/dopez/OG.png";
import rare from "../assets/images/dopez/Rare.png";

function DopezMobileSection() {
  return (
    <div className="dopez_mobileBackground">
      <div className="container-fluid char_section">
        <div className="row mobile_dopez_parent">
          <div
            className="col-md-4 dopez_backgrounds"
            style={{ marginTop: "-160px" }}
          >
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
            <div
              className="dopeztopcontainer__bottom"
              style={{ paddingLeft: "8px" }}
            >
              <div className="dopeztopcontainer__skillblock">
                <img src={SkillImage} />
                <div>
                  <h3 className="dopeztopcontainer__skillblocktitle">Skill</h3>
                  <h3 className="dopeztopcontainer__skillblocksubtitle">
                    Defines the ability to make the best DrugZ and gather the
                    most profit!
                  </h3>
                </div>
              </div>
              <div className="dopeztopcontainer__skillblock">
                <img src={CunningImage} />
                <div>
                  <h3 className="dopeztopcontainer__skillblocktitle">
                    Cunning
                  </h3>
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
                    The more DrugZ a DopeZ can carry and more power = more
                    money.
                  </h3>
                </div>
              </div>
              <div className="dopeztopcontainer__skillblock">
                <img src={RespectImage} />
                <div>
                  <h3 className="dopeztopcontainer__skillblocktitle">
                    Respect
                  </h3>
                  <h3 className="dopeztopcontainer__skillblocksubtitle">
                    Your chances of beating law enforcement and conducting
                    successful raids.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 char_flex char_flex_mobile">
            <div id="enforcerz" className="enforce_mobile">
              <img
                src={Enforcesrs}
                className="enforcerz_char enforcerz_char_mobile"
                style={{ width: "70px", height: "150px" }}
              />

              <img
                src={enforcerz_tag}
                className="enforcerz_tagImg enforcerz_tagImg_mobile"
              />
            </div>

            <img src={Enforcerz_card} className="enforcerz_card" />
            <div id="specialist" className="specail_force_mobile">
              <img
                src={specialist_tag}
                className="specialist_tagImg specialist_tagImg_mobile"
              />
              <img
                className="special_tag special_tag_mobile"
                src={special}
                style={{ width: "60px", height: "150px" }}
              />
            </div>
            <img
              src={specialist_card}
              className="specialist_card specialist_card_mobile"
            />
          </div>

          <div className="col-md-4 char_flex pt234">
            <div id="dealerz" className="character_mobile">
              <img
                src={Dealers}
                className="dealerz_char dealerz_char_mobile"
                style={{ width: "60px", height: "140px" }}
              />
              <img
                src={dealerz_tag}
                className="dealerz_tagImg dealerz_tagImg_mobile"
                id="dealerz_tagImg"
              />
            </div>
            <img
              src={dealerz_card}
              className="dealerz_card dealerz_cardMobile"
            />

            <div id="bodyguard" className="bodyguard_mobile">
              <img
                src={bodyguard_tag}
                className="bodyguard_tagImg bodyguard_tagImg_mobile"
              />
              <img
                className="body_guard_char body_guard_char_mobile"
                src={bodyguard}
                style={{ width: "150px", height: "170px" }}
              />
            </div>
            <img
              src={bodyguard_card}
              className="bodyguard_card bodyguard_card_mobile"
            />
          </div>
        </div>
      </div>
      <div className="mobile_billboard_image">
        <img className="w-100 mobilebillboardimage" src={mobileBillboard} />
        <div className="kingpinclassblock class_block_gif">
          <div className="dopezclass dopezclassMobile">
            <div className="dopezclasstop">
              <img
                className="dopezclasstop__image dopezclasstop__image_mobile"
                src={Platinum}
              />
              <h3 className="dopezclasstop__text _dopezclasstop__textMobile">
                KINGPIN
              </h3>
            </div>
            <div className="dopezclass__content dopezclass__content_mobile">
              <div className="dopexclass__left">
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={PlatBullet} className="plat_bullet_class" />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    The best of the best.
                  </h3>
                </div>
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={PlatBullet} className="plat_bullet_class" />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    Based on real life celebrities, fictional characters and
                    mafia bosses.
                  </h3>
                </div>
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={PlatBullet} className="plat_bullet_class" />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    Using these characters gives extra bonuses in-game and make
                    your operations safer and faster.
                  </h3>
                </div>
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={PlatBullet} className="plat_bullet_class " />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    Top Skill stats.
                  </h3>
                </div>
              </div>
              <div className="dopezclass__right">
                <img src={PlatGif} />
              </div>
            </div>
          </div>
        </div>
        <div className="ogclassblock class_block_gif">
          <div className="dopezclass dopezclassMobile">
            <div className="dopezclasstop">
              <img
                className="dopezclasstop__image dopezclasstop__image_mobile"
                src={Gold}
              />
              <h3 className="dopezclasstop__text1 _dopezclasstop__textMobile">
                OG
              </h3>
            </div>
            <div className="dopezclass__content dopezclass__content_mobile ">
              <div className="dopexclass__left">
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={GoldBullet} />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    Based on real life celebrities and fictional characters and
                    mafia bosses.
                  </h3>
                </div>
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={GoldBullet} />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    Statistically 25% better than Rare DopeZ
                  </h3>
                </div>
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={GoldBullet} />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    Boost DrugZ production and trade efficiency.
                  </h3>
                </div>
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={GoldBullet} />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    OG SpecialistZ produce purer DrugZ.
                  </h3>
                </div>
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={GoldBullet} />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    High skill stats
                  </h3>
                </div>
              </div>
              <div className="dopezclass__right">
                <img src={GoldGif} />
              </div>
            </div>
          </div>
        </div>
        <div className="rareclassblock rareclassblock-active class_block_gif">
          <div className="dopezclass dopezclassMobile">
            <div className="dopezclasstop ">
              <img
                className="dopezclasstop__image dopezclasstop__image_mobile "
                src={Silver}
              />
              <h3 className="dopezclasstop__text2  _dopezclasstop__textMobile">
                RARE
              </h3>
            </div>
            <div className="dopezclass__content dopezclass__content_mobile">
              <div className="dopexclass__left">
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={SilverBullet} />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    Statiscally 25% better than common DopeZ.
                  </h3>
                </div>
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={SilverBullet} />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    Come with Bling and street fashion
                  </h3>
                </div>
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={SilverBullet} />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    Upgrade and customize them with accessories
                  </h3>
                </div>
              </div>
              <div className="dopezclass__right">
                <img src={SilverGif} />
              </div>
            </div>
          </div>
        </div>
        <div className="commonclassblock  class_block_gif">
          <div className="dopezclass dopezclassMobile">
            <div className="dopezclasstop">
              <img
                className="dopezclasstop__image dopezclasstop__image_mobile"
                src={Brronze}
              />
              <h3 className="dopezclasstop__text2 _dopezclasstop__textMobile">
                COMMON
              </h3>
            </div>
            <div className="dopezclass__content dopezclass__content_mobile">
              <div className="dopexclass__left">
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={BrronzeBullet} />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    Base level stats
                  </h3>
                </div>
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={BrronzeBullet} />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    Can be customized and made via in game generato
                  </h3>
                </div>
                <div className="dopeztextblock dopeztextblock_mobile">
                  <img src={BrronzeBullet} />
                  <h3 className="dopeztextblock__text dopeztextblock__text_mobile">
                    Available in all 4 types of DopeZ
                  </h3>
                </div>
                <div className="dopezclassessection ">
                  <div className="dopezclassessection__block dopeztextblock_mobile">
                    <img src={Dealer} />
                    <h3 className="dopezclassessection__text dopeztextblock__text_mobile">
                      DealerZ
                    </h3>
                  </div>
                  <div className="dopezclassessection__block dopeztextblock_mobile">
                    <img src={Enforcer} />
                    <h3 className="dopezclassessection__text dopeztextblock__text_mobile">
                      EnforcerZ
                    </h3>
                  </div>
                  <div className="dopezclassessection__block dopeztextblock_mobile">
                    <img src={Bodyguard} />
                    <h3 className="dopezclassessection__text dopeztextblock__text_mobile">
                      BodyGuardZ
                    </h3>
                  </div>
                  <div className="dopezclassessection__block dopeztextblock_mobile">
                    <img src={Specialist} />
                    <h3 className="dopezclassessection__text dopeztextblock__text_mobile">
                      {" "}
                      SpecialistZ
                    </h3>
                  </div>
                </div>
              </div>
              <div className="dopezclass__right">
                <img src={BrronzeGif} />
              </div>
            </div>
          </div>
        </div>
        <div className="dopez_gif_contains">
          <div id="CommonDopeZ">
            <img src={common} className="dopez_characterGif" />
          </div>
          <div id="KingpinDopeZ">
            <img
              src={kingpin}
              className="dopez_characterGif"
              //   id="KingpinDopeZ"
            />
          </div>
          <img src={og} className="dopez_characterGif" id="OGDopeZ" />
          <img src={rare} className="dopez_characterGif" id="RareDopeZ" />
        </div>
      </div>
    </div>
  );
}

export default DopezMobileSection;
