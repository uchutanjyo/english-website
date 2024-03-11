import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  /* background-color: #f0f0f0; */
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Subheader = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const BulletList = styled.ul`
  list-style-type: none;
  text-align: left;
  margin-bottom: 2rem;
  margin-right: 2em
`;

export const BulletListItem = styled.li`
  margin-bottom: 0.5rem;
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
