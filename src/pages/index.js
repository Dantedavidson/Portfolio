import React from "react"
import { graphql } from "gatsby"
import GlobalStyles from "../styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "../styles/Theme.json"
import { Navbar, Hero } from "../components/index"

export default function Home({ data }) {
  console.log(data)
  const {
    allContentfulLead: {
      group: [{ nodes }],
    },
  } = data

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Hero data={nodes[0]} />
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
            file {
              url
            }
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
          file {
            url
          }
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
