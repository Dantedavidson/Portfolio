import styled from "styled-components";

export const ErrorWrapper = styled.div`
width:100%;
height: 90vh;
text-align: center;
display:flex;
flex-direction: column;
justify-content: space-around;
`
export const ErrorText = styled.h1`
`

export const ErrorLink = styled.span`
color:grey;
cursor:pointer;
transition:all 300ms ease;
&:hover{
    color: #fff;
}
`