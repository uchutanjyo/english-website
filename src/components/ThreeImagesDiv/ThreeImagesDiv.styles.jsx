import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  /* justify-content: space-around; */
  padding: 4rem 8rem;
`;

export const SectionItem = styled.div`
  flex: 1;
  text-align: center;
`;

export const Image = styled.img`
  width: 15em;
  /* max-width: 200px; */
  height: 15em;
  /* border-radius: 50%; */
  margin-bottom: 1rem;
  margin-right: 3em
`;

export const Text = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};

`;