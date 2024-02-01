import React from 'react';
import {HeaderContainer, Nav, NavItem, NavLink, NavList, NavLogo, NavToggle} from './Header.styles';
import {LocaleData} from "../../models/LocaleData";

interface HeaderProps {
  name: string;
  localeData: LocaleData;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({name, localeData, isMenuOpen, toggleMenu}) => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLogo href="#">{name}</NavLogo>
        <NavToggle onClick={toggleMenu}>
          <i className='bx bx-grid-alt'></i>
        </NavToggle>
        <NavList className={`${isMenuOpen ? 'show-menu' : ''}`}>
          <NavItem>
            <NavLink href="#home">
              <i className='bx bx-home nav_icon'></i>Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#profile">
              <i className='bx bx-user nav_icon'></i>{localeData.profile}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#education">
              <i className='bx bx-book nav_icon'></i>{localeData.education}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills">
              <i className='bx bx-receipt nav_icon'></i>{localeData.skills}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#experience">
              <i className='bx bx-briefcase-alt nav_icon'></i>{localeData.experience}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#certificate">
              <i className='bx bx-award nav_icon'></i>{localeData.certificates}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#references">
              <i className='bx bx-link-external nav_icon'></i>{localeData.references}
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;