import styled from "styled-components";
import Hamburger from "./Hamburger";
import { RiMenu3Fill } from "react-icons/ri";
import Button from "../ui/Button";
import NavMenu from "../ui/NavMenu";

const StyledNavHamburger = styled.div`
  cursor: pointer;
  display: none;
`;


function NavHamburger({ ...props }) {
  return (
    <StyledNavHamburger {...props}>
      <Hamburger>
        <Hamburger.Toggle>
          <button>
          <RiMenu3Fill size={26} />
          </button>
        </Hamburger.Toggle>
        <Hamburger.Menu >
          <>
            <NavMenu gap="0.5rem" type="hamburger"/>
            <Button>Contact us</Button>
          </>
        </Hamburger.Menu>
      </Hamburger>
    </StyledNavHamburger>
  )
}

export default NavHamburger

