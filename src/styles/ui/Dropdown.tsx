import { createContext, ReactNode, useContext, useState } from "react";
import styled from "styled-components";
import { IoChevronDown } from "react-icons/io5";

const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledToggle = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color:var(--color-grey);
  font-weight:500;
  padding: 1.5rem;
  border: none;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  &:hover{
    color:var(--color-brand);
  }

  .dropdown-icon {
    display: flex;
    color:var(--color-grey);
    font-size: 1.2rem;
    transition: transform 0.6s ease;
  }

  .dropdown-icon.open {
    transform: rotate(180deg);
    color:var(--color-brand);
  }
`;

const StyledList = styled.ul`
  border: 1px solid var(--color-grey-light);
  list-style: none;
  padding: 1rem 2rem;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--color-white);
  min-width: 160px;
  z-index: 10;
`;

const StyledItem = styled.li`
  position: relative;
  padding:  0.8rem 1rem; /* leave space for the line */
  cursor: pointer;
  font-weight: 400;
  color: var(--color-grey);
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-brand);
    padding-left:2rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: scaleX(0);
    width: 1rem;
    height: 2px;
    background-color: var(--color-brand);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;


const DropdownContext = createContext<{ isOpen: boolean; setIsOpen: (val: boolean) => void } | undefined>(undefined);

interface DropdownProps {
    children: ReactNode;
}

function Dropdown({ children }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
            <StyledDropdown
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                {children}
            </StyledDropdown>
        </DropdownContext.Provider>
    );
}

function Toggle({ children }: { children: ReactNode }) {
    const context = useContext(DropdownContext)
    const isOpen = context?.isOpen

    return <StyledToggle>
        {children}
        <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>
            {isOpen ? <IoChevronDown /> : <IoChevronDown />}
        </span>
    </StyledToggle>;
}

function List({ children }: { children: ReactNode }) {
    const context = useContext(DropdownContext);
    if (!context) throw new Error("Dropdown.List must be used inside Dropdown");

    return context.isOpen ? <StyledList>{children}</StyledList> : null;
}

function Item({ children }: { children: ReactNode }) {
    return <StyledItem>{children}</StyledItem>;
}

// Attach sub-components
Dropdown.Toggle = Toggle;
Dropdown.List = List;
Dropdown.Item = Item;

export default Dropdown;
