import  { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero.jsx";
import ThreeImagesDiv from "../../components/ThreeImagesDiv/ThreeImagesDiv.jsx";
import ImageLeftTextRight from "../../components/ImageLeftTextRight/ImageLeftTextRight.jsx";
import PriceDiv from "../../components/PriceDiv/PriceDiv.jsx";
import ThreeCardsDiv from "../../components/ThreeCardsDiv/ThreeCardsDiv.jsx";
import books1 from "../../assets/books1.jpeg"
import books2 from "../../assets/books2.jpeg"
import books3 from "../../assets/books3.jpeg"

import {
HomeWrapper,

} from "./Home.styles.jsx";

const Home = ({}) => {

  useEffect(() => {

  }, []);

  return (
    <HomeWrapper>
      <Hero/>
      <ThreeImagesDiv />
      <ImageLeftTextRight header={'英会話コース'} buttonText={'始めてみよう'} 
        bulletPoints={['✓ スピーキングとライティングの個別添削', '✓ 高得点を狙える', '✓ IELTSの攻略法', '✓ 効率よく高得点']}
        image={books1} alt={'Books!'}/>
      <ImageLeftTextRight header={'IELTSコース'} buttonText={'始めてみよう'} 
        bulletPoints={['✓ スピーキングとライティングの個別添削', '✓ 高得点を狙える', '✓ IELTSの攻略法', '✓ 効率よく高得点']}
        image={books2} alt={'Books!'}/>
      <ImageLeftTextRight header={'IELTSコース'} buttonText={'始めてみよう'} 
        bulletPoints={['✓ スピーキングとライティングの個別添削', '✓ 高得点を狙える', '✓ IELTSの攻略法', '✓ 効率よく高得点']}
        image={books3} alt={'Books!'}/>
      <PriceDiv/>
      <ThreeCardsDiv />
      </HomeWrapper>

);

};

export default Home;
