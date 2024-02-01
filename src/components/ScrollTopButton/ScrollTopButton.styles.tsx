import styled from 'styled-components';

interface ScrollTopButtonProps {
  show: boolean;
}

export const ScrollTopButton = styled.a<ScrollTopButtonProps>`
    position: fixed;
    text-decoration: none;
    right: 1rem;
    bottom: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;
    background-color: var(--container-color-alt);
    border-radius: 0.4rem;
    z-index: var(--z-tooltip);
    transition: 0.4s;
    visibility: ${({show}) => (show ? 'visible' : 'hidden')};
    bottom: ${({show}) => (show ? '5rem' : '-3rem')};

    @media (min-width: 968px) {
        display: none;
    }
`;

export const ScrollTopIcon = styled.i`
    font-size: 1.2rem;
    color: var(--text-color);
`;
