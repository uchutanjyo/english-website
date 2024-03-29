import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* height: 100vh; */
  width: 75vw;
  padding: 2rem 2rem;
  @media (max-width: 480px) {
    padding: 0rem;
    flex-direction: column;
    }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  font-size: 3em;
  @media (max-width: 480px) {
    padding: 0rem;
    flex-direction: column;
    }
`;

export const RightSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  
`;

export const HorizontalSection = styled.div`
    display: flex;
    @media (max-width: 480px) {
    padding: 0rem;
    flex-direction: column;
    }

`
export const Subsection = styled.div`
  flex: 1;
  padding: 20px;
  /* display: flex;
  flex-direction: column; */
`;



export const Paragraph = styled.p`
  margin-bottom: 5px;
`;

export const SmallText = styled.div`
  font-size: 12px;
  margin-bottom: 1em
`;
