import styled from 'styled-components';

export const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 10px;
`;

export const SkillItem = styled.div`
    background-color: var(--container-color-alt);
    color: var(--text-color);
    padding: 5px 12px;
    border-radius: 15px;
    font-size: var(--small-font-size);
    white-space: nowrap;
    margin: 2px;
    font-weight: var(--font-medium);

    @media print {
        background-color: #eee;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
    }
`;
