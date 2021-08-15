import styled from "styled-components"

export const FooterSection = styled.footer`
width: ${props => props.theme.width.small};
margin:0 auto;
padding-bottom: 1rem;
text-align: center;

${props => props.theme.media.tabletUp} {
    width: ${props => props.theme.width.medium};
  };

  ${props => props.theme.media.desktopXLUp} {
    width: ${props => props.theme.width.large};
  };
`

export const Line = styled.span`
display:block;
width: 80%;
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