import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: var(--body-color);
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
    transition: 0.3s;

    @media screen and (min-width: 968px) {
        display: none;
    }

    a {
        text-decoration: none;
    }

    @media print {
        display: none;
    }
`;

export const Nav = styled.nav`
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 968px;
    width: calc(100% - 3rem);
    margin-left: var(--mb-3);
    margin-right: var(--mb-3);
    @media print {
        display: none;
    }
`;

export const NavList = styled.ul`
    display: none;
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    padding: 2rem 1.5rem;
    background-color: var(--body-color);
    box-shadow: 0 1px 4px rgba(0, 0, 0, .1);
    border-radius: 1rem 1rem 0 0;
    z-index: 100;
    transition: 0.3s;

    &.show-menu {
        bottom: var(--header-height);
    }

    @media screen and (max-width: 968px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    @media print {
        display: none;
    }
`;

export const NavItem = styled.li`
    text-align: center;
`;

export const NavLink = styled.a`
    display: flex;
    flex-direction: column;
    font-size: var(--smaller-font-size);
    color: var(--text-color);
    font-weight: var(--font-medium);

    &:hover {
        color: var(--title-color);
    }

    @media print {
        display: none;
    }
`;

export const NavLogo = styled.a`
    color: var(--title-color);
    font-weight: var(--font-medium);
    @media print {
        display: none;
    }
`;

export const NavToggle = styled.div`
    font-size: 1.2rem;
    cursor: pointer;

    @media screen and (min-width: 968px) {
        display: none;
    }
    @media print {
        display: none;
    }
`;
