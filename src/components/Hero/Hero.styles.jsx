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
  height: 60vh;
  top: 0;
  background-image: url(${students});
  background-size: cover;

`;


export const Header = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const Blurb = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const HeroButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;