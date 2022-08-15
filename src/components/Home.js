import "./Home.css";
import { Grid } from "@material-ui/core";

import { useState } from "react";
import JkImage from "./images/JK- sultry.webp";
import JinImage from "./images/Jin-hair-back.jpeg";
import RMImage from "./images/RM-Vegas.webp";
import JHopeImage from "./images/Jhope-cute.jpeg";
import JiminImage from "./images/Jimin-wow.jpeg";
import SugaImage from "./images/suga-profile.jpeg";
import groupPhoto from "./images/Group_3.jpeg";
import VImage from "./images/V- GQ.jpeg";
import { Button } from "@material-ui/core";

const bios = {
  Jk: [
    "Name: Jeon Jung Kook, otherwise known as 'Golden Maknae'. Birthday: September 1, 1997. Vocal line.",
    JkImage,
  ],
  RM: [
    "Name: Kim Nam Joon, otherwise known as RM or Rap Monster. Birthday: September 12, 1994. Rap line.",
    RMImage,
  ],
  Jhope: [
    "Name: Jung Ho Seok, otherwise known as J-Hope. Birthday: February 18, 1994. Rap line.",
    JHopeImage,
  ],
  Jimin: [
    "Name: Park Jimin. Birthday: October 13, 1995. Vocal line.",
    JiminImage,
  ],
  V: [
    "Name: Kim Tae Hyung, otherwise known as V. Birthday: February 18, 1995. Vocal line.",
    VImage,
  ],
  Suga: [
    "Name: Min Yoongi, otherwise known as Suga, otherwise known as Agust D. Birthday: March 9, 1993. Rap line.",
    SugaImage,
  ],
  Jin: [
    "Name: Kim Seok Jin, otherwise known as 'World Wide Handsome'. Birthday: December 4, 1992. Vocal line.",
    JinImage,
  ],
};

const Home = (props) => {
  const [bioState, setBioState] = useState(false);
  const [memberBio, setMemberBio] = useState("");
  const [memberBioPic, setMemberBioPic] = useState("");
  const switchBio = (event) => {
    setBioState(true);

    const member = event.target.className;

    setMemberBio(bios[member][0]);
    setMemberBioPic(bios[member][1]);
  };

  const backToHomePage = () => {
    setBioState(false);
  };
  if (bioState) {
    return (
      <body className="homeBody">
        <div>
          <Grid container justify="center">
            <img className="btsMainPic" src={groupPhoto} alt="group" />
          </Grid>
        </div>
        <div className="memberBioPic">
          <img src={memberBioPic} alt="Image could not display"></img>
        </div>
        <div className="memberBio">
          <Grid container justify="center">
            <p>{memberBio}</p>
          </Grid>
        </div>
        <Grid container justify="center">
          <Button
            className="backtoArtistsButton"
            variant="contained"
            color="primary"
            onClick={backToHomePage}
          >
            BACK TO MEMBERS
          </Button>
        </Grid>
      </body>
    );
  }
  return (
    <body className="homeBody">
      <div>
        <Grid container justify="center">
          <img
            className="btsMainPic"
            src={groupPhoto}
            // src="https://ibighit.com/bts/images/profile/proof/member/bts-pc.jpg"
            alt="group"
          />
        </Grid>
      </div>
      <div className="membersImages">
        <h1>MEMBER</h1>
        <img className="Jin" src={JinImage} alt="Jin" onClick={switchBio} />
        <img className="RM" src={RMImage} alt="RM" onClick={switchBio} />
        <img className="V" src={VImage} alt="V" onClick={switchBio} />
        <img
          className="Jimin"
          src={JiminImage}
          alt="Jimin"
          onClick={switchBio}
        />
        <img className="Jk" src={JkImage} alt="JK" onClick={switchBio} />
        <img className="Suga" src={SugaImage} alt="Suga" onClick={switchBio} />
        <img
          className="Jhope"
          src={JHopeImage}
          alt="JHope"
          onClick={switchBio}
        />
      </div>
    </body>
  );
};

export default Home;
