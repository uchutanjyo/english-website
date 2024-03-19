
import { Container, LeftSection, RightSection, Subsection,HorizontalSection, Paragraph, SmallText} from "./FormSection.styles";
import ContactForm from "./ContactForm";

const FormSection = () => {
    return (
      <Container>
        <LeftSection>
        <Subsection>
お問い合わせ

<SmallText>(416) xxx-xxxx</SmallText>
<SmallText>hi@mygroovydomain.com</SmallText>
<SmallText>Toronto, ON Canada</SmallText>
</Subsection>
        </LeftSection>
        <RightSection>
        <HorizontalSection>
<ContactForm></ContactForm>
            
          </HorizontalSection>
        </RightSection>
      </Container>
    );
  };
  
  export default FormSection;