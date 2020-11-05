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
        top: 5px;
        margin-left: 15px;
    }

    input {
      height: 20px;
    }
    
    button {
        margin-top: 20px;
        margin-left: 40px;
        padding: 18px;
    }

    select {
      width: 200px;
    }

    h2 {
        font-weight: normal;
        margin-bottom: 10px;
    }
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