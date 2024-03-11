import  { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero.jsx";
import ThreeImagesDiv from "../../components/ThreeImagesDiv/ThreeImagesDiv.jsx";
import ImageLeftTextRight from "../../components/ImageLeftTextRight/ImageLeftTextRight.jsx";
import PriceDiv from "../../components/PriceDiv/PriceDiv.jsx";
import ThreeCardsDiv from "../../components/ThreeCardsDiv/ThreeCardsDiv.jsx";
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
      <ImageLeftTextRight />
      <ImageLeftTextRight />
      <PriceDiv/>
      <ThreeCardsDiv />
      </HomeWrapper>

);

};

export default Home;
