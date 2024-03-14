import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  /* justify-content: space-between; */
   /*
  */
  /* background-color: red; */
`;

export const SectionItem = styled.div`
  flex: 1;
  text-align: center;
`;

export const CardHolder = styled.div`

  margin-bottom: 1rem;
  /* margin-right: 3em */
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
`;