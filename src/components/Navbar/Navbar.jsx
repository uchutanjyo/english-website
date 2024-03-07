import { NavLink, NavbarContainer, NavbarLinks } from "./Navbar.styles";

const Navbar = () => {
    return (
      <NavbarContainer>
        <div>English Elevation School</div>
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
  