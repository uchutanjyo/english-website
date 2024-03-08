import  { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero.jsx";
import ThreeImagesDiv from "../../components/ThreeImagesDiv/ThreeImagesDiv.jsx";
import ImageLeftTextRight from "../../components/ImageLeftTextRight/ImageLeftTextRight.jsx";

import {
HomeWrapper,

} from "./Home.styles.jsx";

const Home = () => {

  useEffect(() => {

  }, []);

  return (
    <HomeWrapper>
      <Hero/>
      <ThreeImagesDiv />
      <ImageLeftTextRight />
      </HomeWrapper>

);

};

export default Home;
