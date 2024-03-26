import styled from "styled-components";

export const HomeWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  width: 98%;
  /* top: 0; */
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.background};
    /* @media (max-width: 1000px) {
      display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.0em;
    width: 100%;

  } */
  @media (max-width: 480px) {
  width: 100%;
  }
`;
