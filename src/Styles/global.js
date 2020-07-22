import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    } 
     #root{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        flex: 1;
    }
`;