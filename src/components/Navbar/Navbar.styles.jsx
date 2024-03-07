import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  background-color: #333;
  color: white;
  width: 100vw;
  top:0;
  left: 0;
  position: fixed;
`;

export const NavbarLinks = styled.div`
  display: flex;
  margin-right: 3rem
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  margin-left: 1rem;
`;