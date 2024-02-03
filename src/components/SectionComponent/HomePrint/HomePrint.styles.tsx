// src/components/HomePrint/HomePrint.styles.tsx
import styled from 'styled-components';

export const HomeContainer = styled.div`
    text-align: left; // Ensuring text is aligned to the left
    margin-bottom: 20px; // Space before the contact info starts
`;

export const HomeData = styled.div`
    display: flex;
    align-items: center; // Center items vertically
    justify-content: space-between; // Push the icon to the right
    margin-bottom: 50px; // Adjust as needed
`;

export const HomeTitle = styled.h1`
    font-size: 38px;
`;

export const IconBox = styled.div`
    font-size: 10px; // Set the size of the icon
    font-weight: bold;
    text-align: center;
    width: 18px;
    height: 18px;
    padding-top: 4px;
    color: white; // The icon's color
    background-color: black; // The icon's background color
    display: inline-block; // To ensure it behaves as text
    line-height: 1; // Align the icon properly with the text
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    position: relative;
    bottom: -10px;
    right: 10px;
`;

export const ContactInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between; // This will space out the containers evenly
    flex-wrap: wrap; // Allow wrapping to next line if needed
`;

export const ContactInfoContainer = styled.div`
    font-size: 14px;
    width: 100%;
    display: block;
    &:nth-child(odd) {
        margin-right: 4%; // Add space between two containers in the same row
    }
`;

export const ContactItem = styled.div`
    margin-top: 6px;
    display: inline-flex;
    justify-content: space-between; // Distribute space between items
    width: 50%; // Ensure the container takes full width
`;

export const ContactLabel = styled.span`
    
    min-width: 70px; // Give a minimum width to align content
    margin-right: 10px; // Space between the label and the content
    font-weight: bold; // Bold label text
    text-align: left;
`;

export const ContactContent = styled.span`
    flex: 1; // Each item will take up equal space
    text-align: left;

    &:first-child {
        margin-right: 10px; // Add space between the two items
    }
`;

// Apply additional styling as needed...
