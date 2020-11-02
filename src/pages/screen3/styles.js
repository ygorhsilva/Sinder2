import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    color: black;
    flex-direction: column;
`;


export const Icon = styled.div`
      > a {
        position: absolute;
        top: 2px;
        left: 1px;
        border: none;
        padding: 0;
    }
`

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: left;

    height: 100px;
    width: 70%;
    margin: auto;
    background-color: white;
    border-radius: 10px;


`

export const CardImage = styled.div`
    display: flex;

    img {
        overflow: hidden;
        border-radius: 50%;
        width: 150px;
        margin-right: 25px;

    }
`

export const CardInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    
    span.title {
        font-weight: bold;
    }

    p {
        font-size: 20px;
        margin-bottom: 0px;
        line-height: 7px;
    }
`

export const Testimonials = styled.div`
    display: flex;
    width: 100%;
    place-content: center;
    text-align: center;
    margin-right: 60px;
    font-weight: 400;

    p {
        font-size: 30px;
    }
`