import styled from 'styled-components';

export const LanguagesSection = styled.section`
    padding: 1.5rem 0;
    text-align: center;
`;

export const LanguageItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0 1rem;
`;

export const LanguageName = styled.span`
    font-size: var(--normal-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
`;

export const LanguageProficiencyBar = styled.div<{ proficiency: number }>`
    width: 60%; // default width, adjust as needed
    background-color: var(--container-color);
    margin-left: 1rem;
    position: relative;
    border-radius: 5px;
    overflow: hidden;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${props => props.proficiency}%;
        height: 100%;
        background-color: var(--text-color-light); // Change the color based on your theme
        transition: width 0.3s ease-in-out;
    }
`;
