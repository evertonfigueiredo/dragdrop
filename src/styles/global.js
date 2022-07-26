import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,400;8..144,500&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html,body,#root{
        height: 100%;
        display: block;
    } 

    body{
       font: 14px 'Roboto', sans-serif;
       background: #ecf1f8;
       color: #333;
       -webkit-font-smoothing: antialiased !important;
    }

    ul{
        list-style: none;
    }
`;