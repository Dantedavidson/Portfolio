import React from "react"
import {Helmet} from "react-helmet";
import { graphql } from "gatsby"
import GlobalStyles from "../styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "../styles/Theme.json"
import { Navbar, Hero, Projects,Footer } from "../components/index"


export default function Home({ data }) {
  const {
    allContentfulLead: {
      group: [{ nodes: lead }],
    },
    allContentfulPortfolioPost: { nodes: posts },
    site:{siteMetadata:{title}}
    ,
    site:{siteMetadata:{keywords}}
    ,
    site:{siteMetadata:{description}}
  
  } = data
  return (
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
      <Hero data={lead[0]} />
      <Projects posts={posts} />
      <Footer/>
    </ThemeProvider>
  )
}

export const query = graphql`
query PageData {
  allContentfulPortfolioPost {
    nodes {
      tags
      title
      subHeading
      projectImage {
        description
        gatsbyImageData
      }
      projectBrief {
        projectBrief
      }
      projectFeatures {
        childMarkdownRemark {
          html
        }
      }
      sourceCode
      liveSite
    }
  }
  allContentfulLead {
    group(field: contentful_id) {
      nodes {
        title
        portrait {
          description
          gatsbyImageData
        }
        text {
          text
        }
      }
    }
  }
  site {
    siteMetadata {
      title
      keywords
      description
    }
  }
}
`
