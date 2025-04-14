import styled from "styled-components";
import Brand from "../ui/Brand";
import NavMenu from "../ui/NavMenu";
import Button from "../ui/Button";
import { Container } from "../ui/Container";
import NavHamburger from "./NavHamburger";


const StyledContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid var(--color-grey-light);
  background-color: var(--color-white);
`;

const StyledNav = styled(Container)`
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  padding: 0rem 2rem;

  @media (max-width: 990px) {
    height: 6.5rem;
    .hide-on-mobile{
      display: none;
    }
    .show-on-mobile{
      display: block;
    }
  }

`;


function Navbar() {
  return (
    <StyledContainer>
      <StyledNav>
        <Brand />
        <NavMenu type="nav" className="hide-on-mobile" />
        <Button className="hide-on-mobile">Contact us</Button>
        <NavHamburger className="show-on-mobile" />
      </StyledNav>
    </StyledContainer>
  )
}

export default Navbar