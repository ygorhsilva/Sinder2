import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;

    h1 {
        font-size: 50px;
        margin-bottom: 100px;
        position: absolute;
        top: 50px;
    }

    a {
        width: 150px;
        text-align: center;
        & + a {
            margin-top: 50px;
        }
    }
`