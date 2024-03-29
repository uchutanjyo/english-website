import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  /* justify-content: space-around; */
  padding: 4rem 8rem;
  width: 80vw;
  @media (max-width: 480px) {
    padding: 0rem;
    flex-direction: column;
    margin-top: 2rem;
    align-items: center;
    margin-bottom: 2rem

  }
`;

export const SectionItem = styled.div`
  flex: 1;
  text-align: center;
  /* width: 20em; */
`;

export const Image = styled.img`
  width: 27em;
  height: 22em;
  


  /* border-radius: 50%; */
  margin-bottom: 1rem;
  margin-right: 3em;
  @media (max-width: 480px) {
    max-width: 18em;
    max-height: 15em;
    min-width: 19em;
    margin-right: 0em
  }
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};

`;

export const  SubText = styled.p`
  font-size: 0.7rem;
  color: ${props => props.theme.colors.text};

`;


