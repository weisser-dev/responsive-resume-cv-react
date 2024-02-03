import styled from 'styled-components';

export const Section = styled.section`
    padding: var(--mb-2) 0;
    position: relative;
    @media print {
        padding: 0 0;
        display: flex; /* Use flexbox for layout */
        justify-content: space-between; /* Space out title and content */
    }
`;

export const SectionTitle = styled.h2`
    font-size: var(--h2-font-size);
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    text-align: left;
    margin-bottom: var(--mb-1);
    display: inline-block;
    position: relative;
    /* Styles for print */
    @media print {
        font-size: 16px; /* Adjust to match the size you need */
        font-weight: bold; /* Make sure it's bold */
        flex-shrink: 0;
        margin-right: 5%;
        letter-spacing: 0.1rem;

        &:after {
            content: '';
            display: block;
            height: 2px; /* Thickness of the line */
            background: black; /* Color of the line */
            margin-top: 4px; /* Space between text and line */
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
        }
    }
`;

export const SectionTitleWrapper = styled.div`
    @media print {
        width: 25%; /* Adjust width as necessary for content */
    }
`;
export const SectionWrapper = styled.div`
    @media print {
        width: 75%; /* Adjust width as necessary for content */
        flex-grow: 1; /* Allow content to fill the remaining space */
    }
`;