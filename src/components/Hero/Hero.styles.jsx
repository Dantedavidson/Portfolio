import styled from "styled-components"
import { Section } from "../../styles/GlobalStyles"

export const HeroSection = styled(Section)`
  min-height: 70vh;
  margin-top: 20vh;
  margin-bottom: 10vh;

  ${props => props.theme.media.tabletUp} {
    margin-top: 30vh;
    margin-bottom: 0;
  }
`

export const FlexContainer = styled.div``

export const Grid = styled.div`
  display: grid;
  row-gap: 2rem;
`

export const Title = styled.h1`
  font-size: 2.25rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "STIX Two Text", serif;
  font-weight: 700;
`

export const Text = styled.p`
  font-size: 1.125rem;
  text-align: center;
  padding-left: ${props => props.theme.padding.small};
  padding-right: ${props => props.theme.padding.small};
`

export const Image = styled.img`
  justify-self: center;
  width: 250px;
  border-radius: 50%;
  grid-row-start: 1;
`
