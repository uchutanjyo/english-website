import { HeroContainer, Header, Blurb, HeroButton } from "./Hero.styles";

const Hero = () => {
    return (
       
      <HeroContainer>
        <Header>Welcome to Our Website</Header>
        <Blurb>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium lectus id purus pulvinar.</Blurb>
        <HeroButton>Learn More</HeroButton>
      </HeroContainer>
      
    );
  };
  
  export default Hero;