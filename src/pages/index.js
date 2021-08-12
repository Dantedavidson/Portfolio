import React from "react"
import { graphql } from "gatsby"
import GlobalStyles from "../styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "../styles/Theme.json"
import { Navbar, Hero, Projects } from "../components/index"

export default function Home({ data }) {
  console.log(data)
  const {
    allContentfulLead: {
      group: [{ nodes: lead }],
    },
    allContentfulPortfolioPost: { nodes: posts },
  } = data

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Hero data={lead[0]} />
      <Projects posts={posts} />
    </ThemeProvider>
  )
}

export const query = graphql`
  query PageData {
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
      }
    }
  }
`
