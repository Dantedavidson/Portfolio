import styled, { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}

html {
  scroll-behavior: smooth;
}

body{
    background-color: ${({ theme }) => theme.background};
    color:${({ theme }) => theme.textLight};
    font-family:${({ theme }) => theme.fontMain} ;
}

 h1, h2{
  
 }

 h3{
   font-size: 1.5rem;
 }

 h4{
   font-size: 1.25rem;
 }

 li, p {
   font-size: 1.2rem;
   
   
 }

a {
    text-decoration: none;
  color: inherit;
}
`

export const Section = styled.section`
  width: ${props => props.theme.width.small};
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.padding.medium};
  padding-right: ${props => props.theme.padding.medium};

  ${props => props.theme.media.tabletUp} {
    width: ${props => props.theme.width.medium};
  }

  ${props => props.theme.media.desktopUp} {
    padding-left: 0;
    padding-right: 0;
  }

  ${props => props.theme.media.desktopXLUp} {
    width: ${props => props.theme.width.large};
  }
`
