import styled from 'styled-components';
// import { FaCheck } from 'react-icons/fa';

export const Container = styled.div`
  width: 26em;
  background-color: ${props => props.theme.colors.secondary};

  color: ${props => props.theme.colors.text};
  /* font-size: 2em; */
  padding: 1.2em;
  height: 17em;
  margin: 1.5em;
  @media (max-width: 480px) {
    padding: 1rem;
    margin: 0rem;
    width:17em;
    
    height: 18em;
    }
`;

export const Header = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Subheader = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.button};
  color: ${props => props.theme.colors.buttonText};
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #656769;
  }
`;

export const ListContainer = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

`;

export const Text = styled.span`
  font-size: .6rem;
`;