import React from "react"
import { navigate } from "gatsby";
import {Helmet} from "react-helmet";
import { graphql } from "gatsby"
import styled from "styled-components";
import GlobalStyles from "../styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "../styles/Theme.json"
import { Navbar,Footer} from "../components/index"


const ErrorWrapper = styled.div`
width:100%;
height: 90vh;
text-align: center;
display:flex;
flex-direction: column;
justify-content: space-around;
`
const ErrorText = styled.h1`

`
const ErrorLink = styled.span`
color:grey;
cursor:pointer;
transition:all 300ms ease;
&:hover{
    color: #fff;
}
`



const NotFound = ({data}) => {
  const {
    site:{siteMetadata:{title}}
    ,
    site:{siteMetadata:{keywords}}
    ,
    site:{siteMetadata:{description}}
  
  } = data
  return (
    <div>
      <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Helmet  htmlAttributes={{
    lang: 'en',
  }}>
      <meta name="keywords" content={keywords}/>
      <meta name="description" content={description}/>
      <meta charSet="utf-8" />
      <title>{title}</title>      
      </Helmet>
      <ErrorWrapper>
        <div>
        <ErrorText>Sorry, there doesn't seem to be anything here. <ErrorLink onClick={() => navigate(-1)}>Take me back.</ErrorLink></ErrorText>
        
        </div>
      </ErrorWrapper>
      <Footer/>
    </ThemeProvider>
    </div>
  )
}

export default NotFound

export const query = graphql`
query MetaQuery {
  site {
    siteMetadata {
      title
      keywords
      description
    }
  }
}
`
