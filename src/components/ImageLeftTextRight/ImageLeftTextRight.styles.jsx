import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  /* background-color: red; */
  margin-top:1em;
  margin-bottom:1em;

`;

export const ImageContainer = styled.div`
  flex: 1;
  margin-right: 5rem;
`;

export const Image = styled.img`
  width: 39em;
  /* max-width: 400px; */
  height: 40em;
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: top;
`;

export const Header = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
`;

export const Button = styled.button`
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

export const ListContainer = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  /* margin-bottom: 0.1rem; */

`;

export const Container = styled.div`
  width: 25em;
  /* background-color: whitesmoke; */
  color: whitesmoke;
  /* font-size: 2em; */
  padding: 1em;
  /* height: 17em */
`;

