import React from "react";
import SectionLayout from "./SectionLayout";
import { prizeConfig } from "../config/prize";
import Lottie from "react-lottie-player";

const PrizeCard = ({ pid, lotty, data, pname }) => {
  return (
    <div id={pid} className={`prize-card`}>
      <Lottie play loop animationData={pname} className={`${data}`} speed={1} />
      <h1>{lotty}</h1>
    </div>
  );
};

const Prize = () => {
  return (
    <>
    <div class="glitch-wrapper ">
   <h1 class="glitch" data-text="Prizes">Prizes</h1>
</div> 
<SectionLayout id="prize"  Classname={"prize-section"}>
      <div className="prize-container">
        {prizeConfig.map((track) => (
          <PrizeCard {...track} key={track.pid} />
        ))}
      </div>
    </SectionLayout>
    </>
  );
};

export default Prize;
