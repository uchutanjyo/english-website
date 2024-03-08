import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
`;

export const ImageContainer = styled.div`
  flex: 1;
  margin-right: 5rem;
`;

export const Image = styled.img`
  width: 100%;
  /* max-width: 400px; */
  height: auto;
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const Header = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
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