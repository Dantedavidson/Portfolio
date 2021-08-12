import React from "react"
import { Section } from "../../styles/GlobalStyles"
import { CardContainer, ProjectSection } from "./Projects.styles.jsx"
import { Filter, Card } from "../index"

function Projects({ posts }) {
  const onClick = tag => {
    console.log(tag)
  }
  return (
    <ProjectSection>
      <Filter onClick={onClick} />
      <CardContainer>
        {posts.map(post => (
          <Card data={post} />
        ))}
      </CardContainer>
    </ProjectSection>
  )
}

export default Projects
