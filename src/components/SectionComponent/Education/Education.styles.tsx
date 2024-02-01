import styled from 'styled-components';

export const EducationContainer = styled.div`
    display: grid;
    gap: 1.5rem;
`;

export const EducationContent = styled.div`
    display: flex;
`;

export const EducationTime = styled.div`
    padding-right: 1rem;
`;

export const EducationRounder = styled.span`
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    background-color: var(--text-color-light);
    border-radius: 50%;
    margin-top: 0.25rem;
`;

export const EducationLine = styled.span`
    display: block;
    width: 2px;
    height: 110%;
    background-color: var(--text-color-light);
    transform: translate(7px, 0);
`;

export const EducationData = styled.div`
    gap: 0.5rem;
`;

export const EducationTitle = styled.h3`
    font-size: var(--h3-font-size);
    margin-bottom: 10px;
`;

export const EducationStudies = styled.span`
    font-size: var(--small-font-size);
    color: var(--title-color);
    display: block;
`;

export const EducationYear = styled.span`
    font-size: var(--smaller-font-size);
    display: block;
`;