import styled from "styled-components";
import { IoInfinite } from "react-icons/io5";

const StyledBrand = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex-direction: row;

  .brand-icon {
   color: var(--color-brand);
}
`;

const StyledBrandName = styled.h1`
  font-size: 2.4rem;
`;

function Brand() {
  return (
    <StyledBrand>
        <IoInfinite size={42}  className="brand-icon"/>
        <StyledBrandName>Pixalytica</StyledBrandName>
    </StyledBrand>
  )
}

export default Brand