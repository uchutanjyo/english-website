import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  width: 100vw;
  top:0;
  left: 0;
  position: fixed;

  @media (max-width: 360px) {
    flex-direction: column;
    padding: 0rem;
    max-width: 50px
  }
`;

export const Title = styled.div`


  @media (max-width: 360px) {
display: hidden
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  margin-right: 3rem;

  @media (max-width: 360px) {
    margin-right: 0;
    margin-top: 1rem;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  margin-left: 1rem;

  @media (max-width: 360px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;