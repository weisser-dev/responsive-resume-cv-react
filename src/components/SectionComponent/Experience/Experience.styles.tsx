// src/components/Experience/Experience.styles.tsx
import styled from 'styled-components';

export const ExperienceContainer = styled.div`
    display: grid;
    gap: 1.5rem;
`;

export const ExperienceContent = styled.div`
    display: flex;
`;

export const ExperienceTime = styled.div`
    padding-right: 1rem;
    /* alternative styling
    padding-right: 0.5rem;
    margin-left: -1.5rem;
    @media screen and (max-width: 967px) {
        display: none;
    }*/
`;

export const ExperienceRounder = styled.span`
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    background-color: var(--text-color-light);
    border-radius: 50%;
    margin-top: 0.25rem;
`;

export const ExperienceLine = styled.span`
    display: block;
    width: 2px;
    height: 110%;
    background-color: var(--text-color-light);
    transform: translate(7px, 0);
`;

export const ExperienceData = styled.div`
    gap: 0.5rem;
`;

export const ExperienceTitle = styled.h3`
    font-size: var(--h3-font-size);
    margin-bottom: 10px;
`;

export const ExperienceCompany = styled.span`
    font-size: var(--small-font-size);
    color: var(--title-color);
`;

export const ExperiencePeriod = styled.span`
    font-size: var(--smaller-font-size);
`;

export const ExperienceDescription = styled.p`
    margin-top: 5px;
`;

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 10px;
`;

export const SkillBubble = styled.span`
    background-color: var(--container-color-alt); // Grey background
    color: var(--text-color); // Text color
    padding: 3px 10px; // Adjust padding as needed
    border-radius: 15px; // Rounded corners
    font-size: var(--smaller-font-size);
    white-space: nowrap; // Prevents the skill text from wrapping
`;