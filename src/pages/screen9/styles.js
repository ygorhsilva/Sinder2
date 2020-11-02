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
        top: 5px;
    }

    a {
        margin-top: 70px;
        padding-left: 60px;
        padding-right: 60px;
    }

    

    h2 {
        font-weight: normal;
        font-size: 25px;
        margin-top: 40px;
        margin-bottom: 5px;

        & + h2 {
            margin-top: 0;
        }
    }
  
`