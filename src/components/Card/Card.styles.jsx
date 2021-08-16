import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const CardWrap = styled.div`
`;

export const ImageWrap = styled.div`
margin-bottom: 1.5rem;
border:1px solid #fff;
`;

export const ButtonWrap = styled.div`
display:flex;
`;

export const ContentWrap = styled.div``;

export const Image = styled(GatsbyImage)`
  width: 100%;
`;

export const Button = styled.a`
position: relative;
width:50%;
padding: .5rem 0;
border-top:1px solid #fff;
text-align:center;
transition: all 500ms ease-out;
cursor:pointer;

&:nth-child(1){
  border-right:1px solid #fff;
}

&:hover
  {
    color: #000;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: #fff;
    transition: all 300ms ease-out;
    transform: scaleX(0);
    transform-origin: left;
  }

  &:hover:before{
    transform: scaleX(1);
  }
`;

export const Header = styled.h3`
margin-bottom:.5rem;
`;

export const Description = styled.p`
margin-bottom:1rem;
`;

export const SubHeader = styled.h4`
margin-bottom:0.5rem;
`;

export const List = styled.div`
ul  {
  padding-left: 1em;
}
li{
  
  margin-bottom:.5rem;
}
`;
