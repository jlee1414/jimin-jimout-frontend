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
import { Button } from "@material-ui/core";

const bios = {
  Jk: "Golden magnae",
  RM: "RM bio",
  Jhope: "Jhope bio",
  Jimin: "Jimin bio",
  V: "V bio",
  Suga: "Suga bio",
  Jin: "Jin bio",
};

const Home = (props) => {
  const [bioState, setBioState] = useState(false);
  const [memberBio, setMemberBio] = useState("");
  const switchBio = (event) => {
    setBioState(true);
    // console.log(event.target.className);
    const memeber = event.target.className;
    // console.log("imageclicked");
    setMemberBio(bios[memeber]);
    // console.log(memeberBio);
  };

  const backToHomePage = () => {
    setBioState(false);
  };
  if (bioState) {
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
        <div>
          <p>{memberBio}</p>
        </div>
        <Button variant="contained" color= "primary" onClick={backToHomePage}>Back</Button>
      </body>
    );
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
      <div className="m embersImages">
        <img className="Jk" 
          src={JkImage} 
          alt="JK" 
          onClick={switchBio} />
        <img 
          className="Jin" 
          src={JinImage} 
          alt="Jin" 
          onClick={switchBio} 
          />
        <img 
          className="RM" 
          src={RMImage} 
          alt="RM" 
          onClick={switchBio} 
          />
        <img
          className="JHope"
          src={JHopeImage}
          alt="JHope"
          onClick={switchBio}
        />
        <img
          className="Jimin"
          src={JiminImage}
          alt="Jimin"
          onClick={switchBio}
        />
        <img 
          className="Suga" 
          src={SugaImage} 
          alt="Suga" 
          onClick={switchBio} />
        <img 
          className="V" 
          src={VImage} 
          alt="V" 
          onClick={switchBio} />
      </div>
    </body>
  );
};

export default Home;
