import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Link className="beers" to="/beers">
        <h2>All beers</h2>
        <p>ALLLLLLL BEEEEEEERRRRRSSSSS!!!!!! MUAHAHAHAHAHAA</p>
      </Link>
    </div>
  );
};

export default Home;
