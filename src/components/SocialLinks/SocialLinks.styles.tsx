import styled from 'styled-components';

export const SocialContainer = styled.div`
    display: grid;
    gap: 1.5rem;
`;

export const SocialLink = styled.a`
    display: flex;
    text-decoration: none;
    color: var(--text-color);
    font-size: var(--normal-font-size);

    &:hover {
        color: var(--title-color);
    }
`;