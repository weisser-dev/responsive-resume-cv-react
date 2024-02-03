import styled from 'styled-components';

export const LanguageItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0 1rem;
    @media print {
        padding: 0;
    }
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

    @media print {
        width: 78%;
        background-color: #eee;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
        margin-right: 80px;
        border-radius: 2px;

        &:before {
            background-color: #3d3d3d;
        }
    }
`;
