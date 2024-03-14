import { SectionContainer, SectionItem, Image, Text, SubText } from "./ThreeImagesDiv.styles";
import study1 from './../../assets/study1.jpeg'
import study2 from './../../assets/study2.jpeg'
import study3 from './../../assets/study3.jpeg'

const Section = () => {
    return (
      <SectionContainer>
        <SectionItem>
          <Image src={study1} alt="Image 1" />
          <Text>英会話コースなら1時間あたり3000円！</Text>
          <SubText>続けやすい価格</SubText>
        </SectionItem>
        <SectionItem>
          <Image src={study2} alt="Image 2" />
          <Text>完全オンライン</Text>
          <SubText>オンラインだからどこにいても受けられる！</SubText>
        </SectionItem>
        <SectionItem>
          <Image src={study3} alt="Image 3" />
          <Text>Tネイティブ講師からの英語</Text>
          <SubText>英語を第一言語としているネイティブ講師の英語を学べる！（バイリンガルの講師も在籍。あなたのレベル、好みにあった講師が選べます）</SubText>
        </SectionItem>
      </SectionContainer>
    );
  };
  
  export default Section;