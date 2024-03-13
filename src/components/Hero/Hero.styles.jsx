import styled from 'styled-components';
import students from './../../assets/students1.jpg'


export const HeroContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  background-color: #f0f0f0;
  padding: 4rem 2rem;
  text-align: center;
  width: 100vw;
  /* top: 0; */
  background-image:linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${students});
  background-size: cover;
  height: 65vh;
  color: ${props => props.theme.colors.text};

`;


export const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const Blurb = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const HeroButton = styled.button`
  background-color: ${props => props.theme.colors.button};
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #656769;
  }
`;