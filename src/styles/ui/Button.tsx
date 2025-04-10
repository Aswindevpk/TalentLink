import { ReactNode } from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  font-size: 1.6rem;
  font-weight: 400;
  align-items: center;
  gap: 0.5rem;
  padding: 1.2rem 2.4rem;
  background-color: var(--color-brand);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;

 .button-icon {
   font-size: 1.2rem;
   color:var(--color-brand-light)
  }
 &:hover {
  color:var(--color-brand-light)
 }
`;



function Button({ children }: { children: ReactNode }) {
    return (
        <StyledButton >
            {children}
        </StyledButton>
    );
}

export default Button;
