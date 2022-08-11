import "./Home.css";
import Proptypes from "prop-types";
import { useState } from "react";
import Quiz from "./Quiz";
import Bio from "./Bio";
import JkImage from "./images/JK- sultry.webp";
import JinImage from "./images/Jin-hair-back.jpeg";
import RMImage from "./images/RM-Vegas.webp";
import JHopeImage from "./images/j-hope.webp";
import JiminImage from "./images/Jimin-wow.jpeg";
import SugaImage from "./images/Suga.jpeg";
import VImage from "./images/V- GQ.jpeg";

const Home = (props) => {
  const [bioState, setBioState] = useState(false);
  const switchBio = (event) => {
    console.log(event.target);
    // console.log("imageclicked");
    setBioState(true);
  };
  if (bioState) {
    <Bio></Bio>;
  }
  return (
    <body className="homeBody">
      <div className="bts">
        <h1> BTS </h1>
      </div>
      <div>
        <img
          className="btsMainPic"
          src="https://ibighit.com/bts/images/profile/proof/member/bts-pc.jpg"
          alt="group"
        />
      </div>
      <div className="MembersImages">
        <img className="JkPic" src={JkImage} alt="JK" onClick={switchBio} />
        <img className="JinPic" src={JinImage} alt="Jin" />
        <img className="RMPic" src={RMImage} alt="RM" />
        <img className="JHopePic" src={JHopeImage} alt="JHope" />
        <img className="JiminPic" src={JiminImage} alt="Jimin" />
        <img className="SugaPic" src={SugaImage} alt="Suga" />
        <img className="VPic" src={VImage} alt="V" />
      </div>
    </body>
  );
};

export default Home;
