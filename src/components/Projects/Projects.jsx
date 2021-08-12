import React from "react"
import { Section } from "../../styles/GlobalStyles"
import { Filter } from "../index"
function Projects() {
  const onClick = tag => {
    console.log(tag)
  }
  return (
    <Section>
      <Filter onClick={onClick} />
    </Section>
  )
}

export default Projects
