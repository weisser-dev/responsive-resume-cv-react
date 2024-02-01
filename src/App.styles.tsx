import styled from 'styled-components';

export const MainContainer = styled.main`
    max-width: 968px;


    @media screen and (min-width: 968px) {
        margin: 0 auto;
        margin-top: var(--mb-3);
    }
`;

export const ResumeContainer = styled.div`
    display: grid;
    gap: var(--mb-3);

    @media screen and (min-width: 968px) {
        grid-template-columns: .5fr 1fr;
        background-color: var(--container-color);
        box-shadow: 0 0 8px rgba(13, 12, 12, .15);
    }
`;

export const ResumeLeft = styled.div`
    padding: 0 var(--mb-3);
    background-color: var(--container-color-alt);
`;

export const ResumeRight = styled.div`
    padding: 0 var(--mb-3);
`;