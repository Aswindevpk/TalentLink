import styled from "styled-components";
import Dropdown from "./Dropdown";

const StyledNavMenu = styled.ul<{ 
    direction: "row" | "column";
    gap:string;
 }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({gap})=> gap};
`;


type NavMenuProps = {
    gap?: string;
    type: "nav" | "hamburger"
} & React.HTMLAttributes<HTMLUListElement>;


function NavMenu({ gap = "2rem", type, ...props }: NavMenuProps) {

    const direction = type === "nav" ? "row" : "column";

    return (
        <StyledNavMenu direction={direction} gap={gap} {...props}>
            <Dropdown type={type}>
                <Dropdown.Toggle>Demos</Dropdown.Toggle>
                <Dropdown.List>
                    <Dropdown.Item>Home 1</Dropdown.Item>
                    <Dropdown.Item>Home 2</Dropdown.Item>
                    <Dropdown.Item>Home 3</Dropdown.Item>
                </Dropdown.List>
            </Dropdown>
            <Dropdown type={type}>
                <Dropdown.Toggle>Company</Dropdown.Toggle>
                <Dropdown.List>
                    <Dropdown.Item>About us</Dropdown.Item>
                    <Dropdown.Item>Our team</Dropdown.Item>
                    <Dropdown.Item>Pricing</Dropdown.Item>
                    <Dropdown.Item>Why choose us</Dropdown.Item>
                    <Dropdown.Item>Awards</Dropdown.Item>
                    <Dropdown.Item>Testimonials</Dropdown.Item>
                    <Dropdown.Item>FAQ</Dropdown.Item>
                </Dropdown.List>
            </Dropdown>
            <Dropdown type={type}>
                <Dropdown.NavLink>Services</Dropdown.NavLink>
            </Dropdown>
            <Dropdown type={type}>
                <Dropdown.NavLink>Blog</Dropdown.NavLink>
            </Dropdown>
            <Dropdown type={type}>
                <Dropdown.Toggle>All Pages</Dropdown.Toggle>
                <Dropdown.List>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.List>
            </Dropdown>
        </StyledNavMenu>
    )
}

export default NavMenu