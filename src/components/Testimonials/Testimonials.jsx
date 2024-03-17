
import { Container, LeftSection, RightSection, Subsection,HorizontalSection, Paragraph, SmallText} from "./Testimonials.styles";


const Testimonials = () => {
    return (
      <Container>
        <LeftSection>
        お客様の声
        </LeftSection>
        <RightSection>
        <HorizontalSection>
          <Subsection>

            <Paragraph>目標点数を達成することができました！勉強の仕方を教えてくれ、マンツーマンの添削があったからです。</Paragraph>
            <SmallText>K.Kさん</SmallText>
            <SmallText>Canada</SmallText>
          </Subsection>
          <Subsection>
           
            <Paragraph>ネイティブの先生から学べたことで、自分の英語に自信を持つことができるようになりました。本場の英語を学べてよかったです。</Paragraph>
            <SmallText>M.Oさん</SmallText>
            
            <SmallText>Miyagi</SmallText>
          </Subsection>
          </HorizontalSection>
          <HorizontalSection>
          <Subsection>
           
            <Paragraph>高校以来まともに勉強をしておらず、勉強の仕方も分からなくなってたところで、基礎から丁寧に教えてもらえました。</Paragraph>
            <SmallText>SY.Sさん</SmallText>
            
            <SmallText>Tokyo</SmallText>
          </Subsection>
          <Subsection>
           
            <Paragraph>大学進学のためのIELTSスコアが必要で、急いでいました。計画的なスケジュールを立ててもらえ、無事目標に届かせることができました！</Paragraph>
            <SmallText>Tom</SmallText>
            
            <SmallText>U.S.</SmallText>
          </Subsection>
          </HorizontalSection>
        </RightSection>
      </Container>
    );
  };
  
  export default Testimonials;