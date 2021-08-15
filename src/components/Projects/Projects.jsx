import React, {useState}  from "react"
import uuid from 'react-uuid'
import { Flipper,Flipped } from "react-flip-toolkit"
import { CardContainer, ProjectSection } from "./Projects.styles.jsx"
import { Filter, Card } from "../index"


function Projects({ posts }) {
  const [filter,setFilter] = useState("all");

  
  const onClick = (tag,filter) => {
    if(tag !== filter) setFilter(tag);
  }


  return (
    <ProjectSection id="projects">
      <Filter onClick={onClick} filter={filter}/>
      <Flipper
        flipKey={`${filter}`}
        staggerConfig={{
          default: {
            reverse: false,
            speed: 1,
          },
        }}
        decisionData={{
          type: "grid",
          sort: "asc",
          filtered: filter,
          stagger: "forward",
          spring: "noWobble",
        }}
      >
     <Flipped flipId="grid">
       <div>
         <Flipped inverseFlipId="grid">
      <CardContainer>
     
        {posts.filter(item => {
          console.log(item,filter)
                    return filter === "all"
                      ? item
                      : item.tags.includes(filter)
                  }).map(post => (
          <Card key={uuid()} data={post} />
        ))}
        
      </CardContainer>
      </Flipped>
      </div>
      </Flipped>
      </Flipper>
    </ProjectSection>
  )
}

export default Projects
