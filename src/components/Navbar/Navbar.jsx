import { NavLink, NavbarContainer, NavbarLinks, Title } from "./Navbar.styles";

const Navbar = () => {
    return (
      <NavbarContainer>
        <Title>English Elevation School</Title>
        <NavbarLinks>
          <NavLink href="#">About</NavLink>
          <NavLink href="#">Course & Price</NavLink>
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#">Learn Japanese</NavLink>
        </NavbarLinks>
      </NavbarContainer>
    );
  };
  
  export default Navbar;
  