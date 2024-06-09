import styled from "styled-components";

export const StyledProjectDetailsPage = styled.section`

    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;


    & > div {
        width: 100%;

        &:first-child {
            height: 20%;
        }

        & > img {
            width: 100%;
            height: 20%;
            object-fit: contain;
        }
    }
`