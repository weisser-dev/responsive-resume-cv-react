// src/components/Interests/Interests.styles.tsx
import styled from 'styled-components';

export const InterestsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: var(--mb-2);
`;

export const InterestsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InterestsIcon = styled.i`
    font-size: 1.5rem;
    color: var(--text-color);
    margin-bottom: .25rem;
`;

export const InterestsName = styled.span`
    font-size: var(--normal-font-size);
    color: var(--title-color);
`;