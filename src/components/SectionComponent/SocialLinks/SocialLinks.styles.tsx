import styled from 'styled-components';

export const SocialContainer = styled.div`
    display: grid;
    gap: var(--mb-1);
    @media print {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }



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