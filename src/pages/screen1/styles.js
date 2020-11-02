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
        margin-top: 50px;
        padding-left: 60px;
        padding-right: 60px;
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