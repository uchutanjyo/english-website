import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  /* height: 100vh; */
  /* width: 75vw; */
  /* padding: 2rem 2rem; */
  flex-direction: column;
  align-items: right;
  background-color: ${props => props.theme.colors.secondary};
  width: 75%;
  @media (max-width: 480px) {
    width: 100%;
    }
`;

export const Input = styled.input`
background-color: ${props => props.theme.colors.secondary};
margin-bottom: 1em;
`;

export const TextArea = styled.textarea`
background-color: ${props => props.theme.colors.secondary};
margin-bottom: 1em;

`;


export const Button = styled.button`
  background-color: ${props => props.theme.colors.button};
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  width: 7em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #656769;
  }
`;
