import styled from "styled-components";
import Brand from "../styles/ui/Brand";
import NavMenu from "../styles/ui/NavMenu";
import Button from "../styles/ui/Button";

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  background-color: var(--color-white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 8rem;
  height: 8rem;
  border-bottom: 1px solid var(--color-grey-light);
`;

function Navbar() {
  return (
    <StyledNav>
      <Brand />
      <NavMenu />
      <Button>Contact us</Button>
    </StyledNav>
  )
}

export default Navbar