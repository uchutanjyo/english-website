import { Container, ListContainer, ListItem, Text, Button, Header, Subheader} from "./ReusableCard.styles";


const ReusableCard = ({ header, subheader, buttonText, bulletPoints }) => {
    return (
      <Container>
        <Header>{header}</Header>
        <Subheader>{subheader}</Subheader>
        <Button>{buttonText}</Button>
        <ListContainer>
          {bulletPoints.map((point, index) => (
            <ListItem key={index}>
              {/* <Checkmark /> */}
              <Text>{point}</Text>
            </ListItem>
          ))}
        </ListContainer>
      </Container>
    );
  };
  
  export default ReusableCard;