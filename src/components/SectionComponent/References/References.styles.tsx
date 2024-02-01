import styled from 'styled-components';


export const ReferenceContainer = styled.div`
    display: grid;
    gap: 1.5rem;
    @media screen and (min-width: 968px) {
        grid-template-columns: repeat(2, 1fr);
    }

`;

export const ReferenceContent = styled.div`
    display: grid;
    gap: .25rem;
`;

export const ReferenceSubtitle = styled.span`
    color: var(--text-color-light);
    font-size: var(--smaller-font-size);
`;

export const ReferenceTitle = styled.h3`
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-1);
    color: var(--title-color);
`;

export const ReferenceContact = styled.ul`
    list-style: none;
    padding: 0;
    font-size: var(--smaller-font-size);

    a {
        text-decoration: none;
    }
`;
