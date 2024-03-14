import { SectionContainer, BulletList, BulletListItem, Button, Header, Subheader} from "./PriceDiv.styles";


const PriceDiv = () => {
    return (
      <SectionContainer>
        <Header>初回30分レッスン</Header>
        <Subheader>０円</Subheader>
        <BulletList>
          <BulletListItem>・無料カウンセリング</BulletListItem>
          <BulletListItem>・無料レッスン</BulletListItem>
          <BulletListItem>・無料で英語力診断</BulletListItem>
        </BulletList>
        <Button>始めてみる</Button>
      </SectionContainer>
    );
  };
  
  export default PriceDiv;