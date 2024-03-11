import styled from 'styled-components';
// import { FaCheck } from 'react-icons/fa';

export const Container = styled.div`
  width: 25em;
  background-color: whitesmoke;
  color: black;
  /* font-size: 2em; */
  padding: 1em;
  height: 17em
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
  background-color: #007bff;
  color: black;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
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

// export const Checkmark = styled(FaCheck)`
//   color: #007bff;
//   margin-right: 0.5rem;
// `;

export const Text = styled.span`
  font-size: .6rem;
`;