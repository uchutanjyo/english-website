import { SectionContainer, ImageContainer, Image, ListItem, TextContainer, Container, Button, Header, ListContainer, Text} from "./ImageLeftTextRight.styles";


const ImageLeftTextRight = ({header, buttonText, bulletPoints, image, alt}) => {
  return (
    
    <SectionContainer>
      <ImageContainer>
        <Image src={image} alt={alt} />
      </ImageContainer>
      <TextContainer>
      <Container>
        <Header>{header}</Header>
        <ListContainer>
          {bulletPoints.map((point, index) => (
            <ListItem key={index}>
              {/* <Checkmark /> */}
              <Text>{point}</Text>
            </ListItem>
          ))}
        </ListContainer>
        <Button>{buttonText}</Button>
      </Container>
      </TextContainer>
    </SectionContainer>
  );
};

export default ImageLeftTextRight;