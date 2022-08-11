import "./Home.css";
import Proptypes from "prop-types";
import { useState } from "react";
import btspic from "src/images/Group_2.png";
// /Users/fenadang/ada/Capstone/jimin-jimout-frontend/src/images/Group_2.jpeg
const Home = (props) => {
  return (
    <body className="homeBody">
      <div className="bts">
        <h1> BTS </h1>
      </div>
      <div>
        <img
          className="btsPic"
          src="https://ibighit.com/bts/images/profile/proof/member/bts-pc.jpg"
          alt="group"
        />
      </div>
    </body>
  );
};

export default Home;
