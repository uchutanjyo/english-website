import { SectionContainer, BulletList, BulletListItem, Button, Header, Subheader} from "./PriceDiv.styles";


const PriceDiv = () => {
    return (
      <SectionContainer>
        <Header>Main Header</Header>
        <Subheader>Sub Header</Subheader>
        <BulletList>
          <BulletListItem>Bullet Point 1</BulletListItem>
          <BulletListItem>Bullet Point 2</BulletListItem>
          <BulletListItem>Bullet Point 3</BulletListItem>
        </BulletList>
        <Button>Click Me</Button>
      </SectionContainer>
    );
  };
  
  export default PriceDiv;