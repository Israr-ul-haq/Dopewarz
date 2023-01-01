// images imports
import DealIconBlock from "./shared/DealIconBlock";
import Produce from "../assets/images/deal2earn/ProduceorBuy-icone-v1.gif";
import Sell from "../assets/images/deal2earn/Sellthemtoearn$DDZ-icon-v1.gif";
import Upgrade from "../assets/images/deal2earn/Upgrade&Customize-icon-v1.gif";
import BlueShadow from "../assets/images/deal2earn/shadow .png";
import GreenShadow from "../assets/images/deal2earn/shadow2.png";
import RedShadow from "../assets/images/deal2earn/shadow3.png";
// gloabal component of text
import TextBoxBlock from "./shared/TextBoxBlock";

function Deal2Earn() {
  return (
    <div id="deal2Earn" className="deal2earn">
      <div className="container h-100">
        <div className="deal2earn__content">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <h2 className="deal2earn__title">
              Deal<span className="deal2earn__title_span">2</span>earn
            </h2>
            {/* bullets section*/}
            <TextBoxBlock
              text={
                "Use your NFT Operational Hub (DOZ) to build and expand your drug empire. "
              }
            />
            <TextBoxBlock
              text={
                "Recruit in-game NFTs (DopeZ) to buy, sell, trade and loot DRUGZ across BLOCKZ. "
              }
            />
            <TextBoxBlock
              text={
                "Be careful trading though, as the law enforcement is constantly on your tail."
              }
            />
            <TextBoxBlock
              text={
                " The goal? To earn the most amount of dirty dollarz $DDZ. "
              }
            />
            <TextBoxBlock
              text={"Use $DDZ to upgrade your DopeZ, DOZ, and much more."}
            />
            <TextBoxBlock
              text={
                " Convert $DDZ to $DRUG through the in-game laundering system period."
              }
            />
          </div>
          {/* icon sections */}
          <div
            className="deal2earn__dealiconblock"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            <DealIconBlock
              img={Produce}
              img1={RedShadow}
              text="Produce or Buy DrugZ"
            />
            <DealIconBlock
              img={Sell}
              img1={GreenShadow}
              text="Sell them to earn $DDZ"
            />
            <DealIconBlock
              img={Upgrade}
              img1={BlueShadow}
              text="Upgrade & Customize your NFTs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deal2Earn;
