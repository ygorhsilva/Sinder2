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
    margin-bottom: 120px;

    width: 100%;

    h1 {
        font-size: 50px;
        margin-bottom: 40px;
        top: 5px;
    }

    a {
        margin-top: 30px;
        width: 200px;
        text-align: center;

        & + a {
            width: 200px;
        }
    }

    input {
        width: 40vh;
        height: 30px;
    }

    h2 {
        top: 130px;
        font-weight: normal;
        font-size: 35px;
    }
  
`

export const Icon = styled.div`
      > a {
        position: absolute;
        top: 2px;
        left: 1px;
        border: none;
        padding: 0;
    }
`