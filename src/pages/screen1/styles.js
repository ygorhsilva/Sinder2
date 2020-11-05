import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    align-items: center;

    place-content: top;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    place-content: top;

    width: 100%;
    h1 {
      font-size: 50px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    place-content: center;

    width: 100%;

    margin-top: 30px;

    h1 {
        font-size: 50px;
        margin-bottom: 130px;
        margin-left: 60px;

    }

    button {
        margin-top: 20px;
        margin-left: 70px;
        padding-right: 40px;
        padding-left: 40px;
        padding-bootm: 30px;
    }

    input {
        width: 40vh;
        height: 30px;
    }

    h2 {
        font-weight: normal;
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