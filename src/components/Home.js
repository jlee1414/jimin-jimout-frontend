import "./Home.css";
import Proptypes from "prop-types";
import { useState } from "react";
import JkImage from "./images/Group_2.png";

const Home = (props) => {
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
        <img className="JkPic" src={JkImage} alt="JK" />
      </div>
    </body>
  );
};

export default Home;
