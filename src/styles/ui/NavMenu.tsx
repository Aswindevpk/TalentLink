import styled from "styled-components";
import Dropdown from "./Dropdown";

const StyledNavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;



function NavMenu() {
    return (
        <StyledNavMenu>
            <Dropdown>
                <Dropdown.Toggle>Home</Dropdown.Toggle>
                <Dropdown.List>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.List>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle>Company</Dropdown.Toggle>
                <Dropdown.List>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.List>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle>Services</Dropdown.Toggle>
                <Dropdown.List>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Logout</Dropdown.Item>
                </Dropdown.List>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle>Blog</Dropdown.Toggle>
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