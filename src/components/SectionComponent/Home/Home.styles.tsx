// src/components/Home/Home.styles.tsx

import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: grid;
    gap: 3rem;
`;

export const HomeData = styled.div`
    display: grid;
    gap: 0.5rem;
    text-align: center;
`;

export const HomeImage = styled.img`
    width: 120px;
    height: 120px;
    margin: auto;
    border-radius: 50%;
    justify-content: center;
    margin-bottom: var(--mb-1);
`;

export const HomeTitle = styled.h1`
    font-size: var(--h1-font-size);
`;

export const HomeProfession = styled.h3`
    font-size: var(--normal-font-size);
    margin-bottom: var(--mb-1);
`;


export const HomeAddress = styled.div`
    display: grid;
    gap: 1rem;
`;

export const HomeInformation = styled.span`
    display: flex;
    align-items: center;
    font-size: var(--smaller-font-size);
`;

export const HomeInformationIcon = styled.i`
    margin-right: 10px;
`;


export const ThemeButton = styled.i`
    position: absolute;
    right: 0;
    top: 2.2rem;
    display: flex;
    color: var(--text-color);
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
        color: var(--text-color-light);
    }


    .generate-pdf & {
        display: none;
    }
`;

export const DownloadButton = styled.i`
    position: absolute;
    top: 2.2rem;
    left: 0;
    font-size: 1.2rem;
    color: var(--text-color);
    cursor: pointer;

    &:hover {
        color: var(--title-color);
    }

    @media screen and (max-width: 967px) {
        display: none;
    }

    .generate-pdf & {
        display: none;
    }
`;
