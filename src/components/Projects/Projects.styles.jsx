import styled from "styled-components"
import { Section } from "../../styles/GlobalStyles"

export const ProjectSection = styled(Section)`
  ${props => props.theme.media.tabletUp} {
    padding-top: 10vh;
  }
  margin-bottom: 3rem;
`
export const CardContainer = styled.div`
display: grid;
row-gap: 3rem;
  ${props => props.theme.media.desktopUp} {
    
    grid-template-columns: 48% 48%;
    column-gap: 4%;
    
  }
`
