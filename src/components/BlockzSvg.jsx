import React from "react";
import BrronzeBlock from "../assets/images/blockz/BlockZ_BronzeBlock.png";
import screen from "../assets/images/blockz/screen.png";
import cup from "../assets/images/blockz/BlockZ_CupSteamDesk.gif";
import GoldBlock from "../assets/images/blockz/BlockZ_GoldBlock.png";
import PlatinumBlock from "../assets/images/blockz/BlockZ_PlatinumBlock.png";
import WhiteButton from "../assets/images/header/WhiteButton.png";
import SilverBlock from "../assets/images/blockz/BlockZ_SilverBlock.png";
import zTable from "../assets/images/blockz/z_table.png";
import Brronze from "../assets/images/dopez/BlockZ_BronzeIcon.png";
import Gold from "../assets/images/dopez/BlockZ_GoldIcon.png";
import Platinum from "../assets/images/dopez/BlockZ_PlatinumIcon.png";
import Silver from "../assets/images/dopez/BlockZ_SilverIcon.png";
import Selected from "../assets/images/blockz/BlockZ_SelectedIcon-1.png";
import BlockzLight from "../assets/images/blockz/BlockZ_lIGHT.png";
import transportaion from "../assets/images/blockz/transportaion.png";
import Economy from "../assets/images/blockz/Economy.png";
import heat from "../assets/images/blockz/heat.png";
import population from "../assets/images/blockz/population.png";
import z_pad from "../assets/images/blockz/z_pad.png";

function BlockzSvg() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 pt150">
          <div className="row">
            <div className="col-md-2 col-2 cup_contains">
              <img src={cup} className="cup_gif" />
            </div>
            <div className="col-md-8 col-8 res_zpadding">
              <div className="background_screenimage">
                <div className="block_divtext ">
                  <div className=" bronzetitle bronzetitle-active">
                    <h3 className="blockztitle">BRONZE BLOCKZ</h3>
                  </div>
                  <div className="platinumtitle">
                    <h3 className="blockztitle1">PLATINUM BLOCKZ</h3>
                  </div>
                  <div className=" goldtitle">
                    <h3 className="blockztitle2">GOLD BLOCKZ</h3>
                  </div>
                  <div className="silvertitle">
                    <h3 className="blockztitle3">SILVER BLOCKZ</h3>
                  </div>
                </div>

                <img
                  src={BrronzeBlock}
                  className="z_screen_block blockzblockbronze blockzblockbronze-active"
                />
                <img
                  src={SilverBlock}
                  className="z_screen_block  blockzblocksilver"
                />
                <img
                  src={GoldBlock}
                  className="z_screen_block  blockzblockgold"
                />
                <img
                  src={PlatinumBlock}
                  className="z_screen_block  blockzblockplatinum"
                />
              </div>
            </div>
            <div className="col-md-2 col-2">
              <div
                className="blockzicons"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                <div className="blockzicons__container">
                  <img
                    src={Brronze}
                    className="blockzicon blockzicon__bronze"
                  />
                  <img
                    src={Selected}
                    className="blockzicons__bronze blockzicons__bronze_active blockzicons__selected block_anim"
                  />
                </div>
                <div className="blockzicons__container">
                  <img src={Silver} className="blockzicon blockzicon__silver" />
                  <img
                    src={Selected}
                    className="blockzicons__silver  blockzicons__selected block_anim"
                  />
                </div>
                <div className="blockzicons__container">
                  <img src={Gold} className="blockzicon  blockzicon__gold" />
                  <img
                    src={Selected}
                    className="blockzicons__gold  blockzicons__selected block_anim"
                  />
                </div>
                <div className="blockzicons__container">
                  <img
                    src={Platinum}
                    className="blockzicon blockzicon__platinum"
                  />
                  <img
                    src={Selected}
                    className=" blockzicons__platinum  blockzicons__selected block_anim"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" style={{ position: "relative" }}>
              {" "}
              <img src={zTable} />
              <div className="z_pad_description">
                <div className="platinumdescription platinumdescription-active">
                  <p className="blockzdescription">
                    - The best BlockZ on the market <br />
                    - Iconic real-world landmarks, such as Times Square <br />
                    - Highest demand of the most premium DrugZ <br />- Little to
                    no Law Enforcement presence
                  </p>
                </div>
                <div className="golddescription">
                  <p className="blockzdescription ">
                    - Famous NYC localities such as Mafia Hangout Spots <br />
                    - High DrugZ demand <br />
                    - Posh demographic which consumes expensive DrugZ <br />-
                    Little threat of getting caught by Law Enforcement
                  </p>
                </div>
                <div className="silverdescription">
                  <p className="blockzdescription ">
                    - Middle class localities, with great value <br />
                    - High demand of class-b DrugZ <br />
                    - Based on real-world streets in NYC <br />- Lesser threat
                    of Law enforcement
                  </p>
                </div>
                <div className="bronzedescription">
                  <p className="blockzdescription ">
                    - The most common with average stats. <br />
                    - High demand of cheaper DrugZ <br />
                    - More law enforcement presence <br />- High density
                    low-income population
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 overflow-hidden">
          <div className="z_baordSection">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-sine"
            >
              <img
                src={BlockzLight}
                className="blockzblocklight w-100 h-100 blockzblocklightcontainer"
              />
            </div>
            <div className="zboard_inner_sec">
              <p className="z_boardDescription">
                In-game tradeable NFT land, that allows investor to reap benefit
                from DopeWarZ player run-economy.
              </p>
              <p className="z_boardDescription">
                Holding BlockZ gives you a tax right on every $DDZ transaction
                happening on your property.
              </p>
              <p className="z_boardDescription">
                BlockZ are unique and like real-world property, the value of
                BLOCKZ depends on a number of factors
              </p>
              <div className="z_iconboardsection">
                <div className="transporation_section">
                  <img src={transportaion} className="" />
                  <div>
                    <p className="z_boardicon_head z_color1">Transportation</p>
                    <p className="z_boardDescription1">
                      Average transaction to deal and trade DrugZ
                    </p>
                  </div>
                </div>
                <div className="transporation_section">
                  <img src={Economy} className="" />
                  <div>
                    <p className="z_boardicon_head z_color2">Economy</p>
                    <p className="z_boardDescription1">
                      Impact the demand of certain type of DrugZ
                    </p>
                  </div>
                </div>
                <div className="transporation_section">
                  <img src={heat} className="" />
                  <div>
                    <p className="z_boardicon_head z_color3">Heat</p>
                    <p className="z_boardDescription1">
                      The risk of getting busted by the cops during a trade
                    </p>
                  </div>
                </div>
                <div className="transporation_section">
                  <img src={population} className="" />
                  <div>
                    <p className="z_boardicon_head z_color4">Population</p>
                    <p className="z_boardDescription1">
                      The risk of getting busted by the cops during a trade
                    </p>
                  </div>
                </div>

                <button
                  className="LEARN-MORE-BT righrbt "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-sine"
                >
                  <a
                    className="LEARN-MORE-T"
                    href="https://docs.google.com/document/d/19FzX1K9Yc9-YDNrUYFmIMkcu2h8eWoc8n3NSC-RwTLo/edit"
                    target="_blank"
                  >
                    LEARN MORE
                  </a>
                </button>
                <button
                  className="LEARN-MORE-BT leftbt"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-sine"
                >
                  <a
                    className="LEARN-MORE-T"
                    href="https://dopewarz.io/citymap/"
                    target="_blank"
                  >
                    CITY MAP
                  </a>
                </button>
              </div>
            </div>
            {
              /* <a
              className="header__link"
              target="_blank"
              href="https://docs.google.com/document/d/13jJdkDMUbYcG0KBbKOgC4zxBCXMj5HYq/edit?usp=sharing&ouid=116960824385692779087&rtpof=true&sd=true"
            >
              <span className="header__linktext">Whitepaper</span>
              <img className="header__whitebutton" src={WhiteButton} />
            </a> */
              //             <button className="LEARN-MORE-BT
              //             ">
              //               <a className="LEARN-MORE-T
              // " href="#">LEARN MORE</a>
              //             </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockzSvg;
