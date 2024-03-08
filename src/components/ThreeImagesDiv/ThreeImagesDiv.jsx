import { SectionContainer, SectionItem, Image, Text} from "./ThreeImagesDiv.styles";
import image1 from './../../assets/fart1.jpg'
import image2 from './../../assets/fart2.jpg'
import image3 from './../../assets/fart3.jpg'


const Section = () => {
    return (
      <SectionContainer>
        <SectionItem>
          <Image src={image1} alt="Image 1" />
          <Text>続けやすい価格</Text>
        </SectionItem>
        <SectionItem>
          <Image src={image2} alt="Image 2" />
          <Text>完全オンライン</Text>
        </SectionItem>
        <SectionItem>
          <Image src={image3} alt="Image 3" />
          <Text>Tネイティブ講師からの英語</Text>
        </SectionItem>
      </SectionContainer>
    );
  };
  
  export default Section;