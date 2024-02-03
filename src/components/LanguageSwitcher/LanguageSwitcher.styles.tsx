import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-top: var(--mb-2);
    display: flex;
    align-items: center;
    justify-content: right;

    .generate-pdf & {
        display: none;
    }

    @media print {
        display: none;
    }
`;

export const Select = styled.select`
    padding: 0.5em 0.5em;
    border-radius: 4px;
    border: none;
    font-size: 1em;
    cursor: pointer;
    color: var(--text-color);
    background-color: var(--container-color);

    @media screen and (max-width: 967px) {
        background-color: var(--container-color-alt);
    }
`;
