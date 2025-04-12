import { createContext, ReactNode, useContext, useState } from "react";
import styled from "styled-components";
import { IoChevronDown } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";


const StyledDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledToggle = styled.li<{ type: "nav" | "hamburger" }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color:var(--color-grey);
  font-weight:500;

  ${({ type }) =>
    type === "hamburger"
      ? `padding: 1rem 1.5rem;`
      : `padding: 1.5rem;`}

  border: none;
  cursor: pointer;

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

const StyledList = styled(motion.ul) <{ type: "nav" | "hamburger" }>`
  list-style: none;
  background-color: var(--color-white);
  min-width:160px;
  max-width: 200px;
  ${({ type }) =>
    type === "hamburger"
      ? `padding: 0rem 2rem;`
      : ` border: 1px solid var(--color-grey-light);
          padding: 1rem 2rem; 
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 10;
         `}
`;

const StyledItem = styled.li`
  position: relative;
  padding:  0.8rem 1rem; /* leave space for the line */
  cursor: pointer;
  font-weight: 400;
  word-break: keep-all;
white-space: normal;
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


const DropdownContext = createContext<{ type: "nav" | "hamburger", isOpen: boolean; setIsOpen: (val: boolean) => void } | undefined>(undefined);

interface DropdownProps {
  children: ReactNode;
  type: "nav" | "hamburger";
}

function Dropdown({ type = "nav", children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ type, isOpen, setIsOpen }}>
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
  const type = context?.type

  return <StyledToggle type={type || "nav"}>
    {children}
    <span className={`dropdown-icon ${isOpen ? "open" : ""}`}>
      {isOpen ? <IoChevronDown /> : <IoChevronDown />}
    </span>
  </StyledToggle>;
}

function NavLink({ children }: { children: ReactNode }) {
  const context = useContext(DropdownContext)
  const type = context?.type

  return <StyledToggle type={type || "nav"}>
    {children}
  </StyledToggle>;
}



function List({ children }: { children: ReactNode }) {
  const context = useContext(DropdownContext);
  if (!context) throw new Error("Dropdown.List must be used inside Dropdown");

  const { isOpen, type } = context;

  const isHamburger = type === "hamburger";

  return (
    <AnimatePresence>
      {isOpen && (
        <StyledList
          type={type}
          initial={isHamburger ? { height: 0, opacity: 0 } : { opacity: 0, y: -10 }}
          animate={isHamburger ? { height: "auto", opacity: 1 } : { opacity: 1, y: 0 }}
          exit={isHamburger ? { height: 0, opacity: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {children}
        </StyledList>
      )}
    </AnimatePresence>
  );
}

function Item({ children }: { children: ReactNode }) {
  return <StyledItem>{children}</StyledItem>;
}

// Attach sub-components
Dropdown.Toggle = Toggle;
Dropdown.List = List;
Dropdown.NavLink = NavLink;
Dropdown.Item = Item;

export default Dropdown;
