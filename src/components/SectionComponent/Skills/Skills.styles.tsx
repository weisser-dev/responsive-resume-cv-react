// src/components/Skills/Skills.styles.tsx
import styled from 'styled-components';

export const SkillsContainer = styled.div`
    display: grid;
    gap: var(--mb-1);
`;

export const SkillItem = styled.div`
    display: flex;
    align-items: center;
`;

export const SkillName = styled.span`
    font-size: var(--normal-font-size);
    color: var(--title-color);
    margin-right: var(--mb-2);
`;

export const ProficiencyContainer = styled.div`
    display: flex;
`;

export const ProficiencyDot = styled.span<{ filled: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.filled ? 'var(--text-color-light)' : 'var(--container-color)'};
    margin-right: 4px;
`;
