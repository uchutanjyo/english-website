import { SectionContainer, SectionItem, CardHolder, Text} from "./ThreeCardsDiv.styles";
import ReusableCard from "../ReusableCard/ReusableCard";

const ThreeCardsDiv = () => {
    return (
      <SectionContainer>
        <SectionItem>
          <CardHolder>
            <ReusableCard header={'英会話コース'} subheader={'3000円/60分'} buttonText={'始めてみよう'} 
            bulletPoints={['✓ 自然な英語が学べる', '✓ ネイティブかバイリンガル講師が担当', '✓ 発音矯正', '✓ すぐに使える表現']}/>
          </CardHolder>
        </SectionItem>
        <SectionItem>
        <CardHolder>
        <ReusableCard header={'TOEICコース'} subheader={'4000円/60分'} buttonText={'始めてみよう'} 
        bulletPoints={['✓ 高得点を狙える', '✓ TOEICの攻略法', '✓ 効率よく高得点']}/>
          </CardHolder>
          </SectionItem>
        <SectionItem>
        <CardHolder>
        <ReusableCard header={'IELTSコース'} subheader={'5000円/60分'} buttonText={'始めてみよう'} 
        bulletPoints={['✓ スピーキングとライティングの個別添削', '✓ 高得点を狙える', '✓ IELTSの攻略法', '✓ 効率よく高得点']}/>
          </CardHolder>
        </SectionItem>
      </SectionContainer>
    );
  };
  
  export default ThreeCardsDiv;