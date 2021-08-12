import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Title, TagContainer, Tag } from "./Filter.styles"

function Filter({ onClick }) {
  const tags = useStaticQuery(graphql`
    query Field {
      allContentfulPortfolioPost {
        group(field: tags) {
          fieldValue
        }
      }
    }
  `).allContentfulPortfolioPost.group

  return (
    <>
      <Title>Projects</Title>
      <TagContainer>
        <Tag
          active
          onClick={() => {
            onClick("All")
          }}
        >
          All
        </Tag>
        {tags.map((tag, index) => (
          <Tag
            onClick={() => {
              onClick(tag.fieldValue)
            }}
            key={index}
          >
            {tag.fieldValue}
          </Tag>
        ))}
      </TagContainer>
    </>
  )
}

export default Filter
