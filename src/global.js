import {createGlobalStyle} from 'styled-components' ;

export default createGlobalStyle `
   body {
        background: #0b094a;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }
   
   a {
        text-decoration: none;
        color: white;
        border: 2px solid white;
        border-radius: 3px;
        padding: 15px;

        font-size: 25px;
    }

   button {
        display: block;
        background: #0b094a;
        color: #fff;
        border: 1px solid white;
        cursor: pointer;
        border-radius: 4px;
        padding: 10px;
        font-weight: bold;
        font-size: 20px;
        transition: background-color 0.2s;
    }
`