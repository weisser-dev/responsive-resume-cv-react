import React from 'react';
import {HeaderContainer, Nav, NavItem, NavLink, NavList, NavLogo, NavToggle} from './Header.styles';
import {LocaleData} from "../../models/LocaleData";
import {CVData} from "../../models/CVData";

interface HeaderProps {
  localeData: LocaleData;
  cvData: CVData;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({localeData, isMenuOpen, toggleMenu, cvData}) => {
  return (
    <HeaderContainer>
      <Nav>
        <NavLogo href="#">{cvData.name}</NavLogo>
        <NavToggle onClick={toggleMenu}>
          <i className='bx bx-grid-alt'></i>
        </NavToggle>
        <NavList className={`${isMenuOpen ? 'show-menu' : ''}`}>
          <NavItem>
            <NavLink href="#home">
              <i className='bx bx-home nav_icon'></i>Home
            </NavLink>
          </NavItem>
          {cvData?.socialLinks.length > 0 && <NavItem>
            <NavLink href="#social">
              <i className='bx bx-link-alt nav_icon'></i>{localeData.social}
            </NavLink>
          </NavItem>}
          {cvData?.profile && <NavItem>
            <NavLink href="#profile">
              <i className='bx bx-user nav_icon'></i>{localeData.profile}
            </NavLink>
          </NavItem>}
          {cvData?.education.length > 0 && <NavItem>
            <NavLink href="#education">
              <i className='bx bx-book nav_icon'></i>{localeData.education}
            </NavLink>
          </NavItem>}
          {cvData?.languages &&
            <NavItem>
              <NavLink href="#languages">
                <i className='bx bxs-plane-land nav_icon'></i>{localeData.languages}
              </NavLink>
            </NavItem>}
          {cvData?.experience.length > 0 &&
            <NavItem>
              <NavLink href="#experience">
                <i className='bx bx-briefcase-alt nav_icon'></i>{localeData.experience}
              </NavLink>
            </NavItem>}
          {cvData?.certificates.length > 0 && <NavItem>
            <NavLink href="#certificate">
              <i className='bx bx-award nav_icon'></i>{localeData.certificates}
            </NavLink>
          </NavItem>}
          {cvData?.references.length > 0 &&
            <NavItem>
              <NavLink href="#references">
                <i className='bx bxs-contact nav_icon'></i>{localeData.references}
              </NavLink>
            </NavItem>}
          {cvData?.skills.length > 0 &&
            <NavItem>
              <NavLink href="#skills">
                <i className='bx bx-line-chart nav_icon'></i>{localeData.references}
              </NavLink>
            </NavItem>}
          {cvData?.interests && <NavItem>
            <NavLink href="#interests">
              <i className='bx bx-code nav_icon'></i>{localeData.interests}
            </NavLink>
          </NavItem>}
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
