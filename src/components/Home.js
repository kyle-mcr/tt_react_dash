import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import "./Home.css";
import img from './ttlogo.png';
import wood from './wood.jpg';
import recycle from './recycle.jpg';

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div id="loading">
        <img class="image3" src={recycle} alt="TT"/>
        <div id="message">
        <img class="image4" src={img} alt="TT"/>
        </div>

    </div>;
  }

  return (
    <Fragment>
     <div class="parent">
      <img class="image1" src={wood} alt="TT"/>
      <img class="image2" src={img} alt="TT"/>
      </div>
    </Fragment>
  );
};

export default Home;