import { SectionContainer, ImageContainer, Image, TextContainer, Button, Header, Text} from "./ImageLeftTextRight.styles";
import image1 from './../../assets/fart1.jpg'


const ImageLeftTextRight = () => {
  return (
    <SectionContainer>
      <ImageContainer>
        <Image src={image1} alt="Image" />
      </ImageContainer>
      <TextContainer>
        <Header>Header Text</Header>
        <Text>Text 1</Text>
        <Text>Text 2</Text>
        <Text>Text 3</Text>
        <Text>Text 4</Text>
        <Text>Text 5</Text>
        <Button>Button</Button>
      </TextContainer>
    </SectionContainer>
  );
};

export default ImageLeftTextRight;