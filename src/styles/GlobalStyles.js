import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=STIX+Two+Text:wght@400;600;700&display=swap');
   
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

body{
    background-color: ${({ theme }) => theme.background};
    color:${({ theme }) => theme.textLight};
    font-family:${({ theme }) => theme.fontMain} ;
}
`
