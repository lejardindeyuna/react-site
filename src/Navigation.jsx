// src/components/Navigation.jsx
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color:  #657054ff;
  // outline-width: thin;
  padding: 0.5rem 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 1.8em;
  text-decoration: none;
  padding: 0.5rem;
  display: block;

  &:hover {
    // background-color: #cadc43ff;
    outline: 1px solid red;
    // outline-bottom: 3px solid green;
    
  }
`;

const DropdownMenu = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  width:160px;
  background-color: #657054ff;
  padding: 0;
  margin: 0;

  max-height: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;

  transition: max-height 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;

  ${NavItem}:hover & {
    max-height: 500px;
    opacity: 1;
     outline: 1px solid red;
    visibility: visible;
  }
`;

const DropdownItem = styled.li``;

const DropdownLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;

  &:hover {
    background-color: #555;
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/hook">hook</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/miniblog">mini blog</NavLink>
          {/* <DropdownMenu>
            <DropdownItem>
              <DropdownLink to="/miniblog/post-write">쓰기</DropdownLink>
            </DropdownItem>
            <DropdownItem>
              <DropdownLink to="/miniblog/post/:postId">보기</DropdownLink>
            </DropdownItem>
          </DropdownMenu> */}
        </NavItem>
        <NavItem>
          <NavLink to="/contact">Contact Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/react_w3">React_w3</NavLink>
        </NavItem>

      </NavList>
    </Nav>
  );
}

export default Navigation;
