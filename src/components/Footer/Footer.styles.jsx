import styled from "styled-components"

export const FooterSection = styled.footer`
width:100%;
padding-bottom: 1rem;
text-align: center;
`

export const Line = styled.span`
display:block;
width: 100%;
height: 1px;
background: #fff;
margin: 0 auto 1.5rem auto;
`

export const Text = styled.p`
margin-bottom:.5rem;
font-size: 0.875rem;
color: ${props => props.theme.fontDull};
`

export const Email = styled.a`
margin-bottom:.5rem;
font-size: 0.875rem;
color: ${props => props.theme.fontDull};
transition: all 300ms ease;

&:hover{
    color: #fff;
}
`