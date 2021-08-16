import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Title, TagContainer, Tag } from "./Filter.styles"

function Filter({ onClick ,filter }) {
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
          active={filter==="all"}
          onClick={() => {
            onClick("all",filter)
          }}
        >
          All
        </Tag>
        {tags.map((tag, index) => (
          <Tag
            onClick={() => {
              onClick(tag.fieldValue,filter)
            }}
            active={filter===tag.fieldValue}
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
