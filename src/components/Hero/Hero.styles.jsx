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

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${props => props.theme.media.desktopUp} {
    justify-content: space-between;
  }
`

export const Container = styled.div`
  margin-bottom: 3rem;
`

export const Grid = styled.div`
  display: grid;
  row-gap: 2rem;

  ${props => props.theme.media.desktopUp} {
    grid-template-columns: 58% 38%;
    column-gap: 4%;
  }
`

export const Title = styled.h1`
  font-size: 2.25rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "STIX Two Text", serif;
  font-weight: 700;

  ${props => props.theme.media.desktopUp} {
    font-size: 3rem;
    text-align: left;
  }

  ${props => props.theme.media.desktopXLUp} {
    font-size: 3.5rem;
  }
`

export const Text = styled.p`
  font-size: 1.125rem;
  text-align: center;
  ${props => props.theme.media.desktopUp} {
    text-align: left;
    padding-left: 0;
    padding-right: 0;
  }

  ${props => props.theme.media.desktopXLUp} {
    font-size: 1.25rem;
  }
`

export const Image = styled.img`
  justify-self: center;
  width: 250px;
  border-radius: 50%;
  grid-row-start: 1;

  ${props => props.theme.media.desktopUp} {
    width: 275px;
    grid-column-start: 2;
    justify-self: end;
  }

  ${props => props.theme.media.desktopXLUp} {
    width: 315px;
  }
`

export const Button = styled.div`
  display: inline-block;
  width: 28.25rem;
  align-self: center;
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  transition: all 500ms ease-out;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #fff;

  &:hover {
    color: #000;
    box-shadow: inset 28.25rem 0 0 0 #fff;
  }

  ${props => props.theme.media.desktopUp} {
    width: 9.375rem;
    align-self: flex-start;

    &:hover {
      box-shadow: inset 9.375rem 0 0 0 #fff;
    }
  }

  ${props => props.theme.media.desktopXLUp} {
    width: 10.9375rem;
    align-self: flex-start;

    &:hover {
      box-shadow: inset 10.9375rem 0 0 0 #fff;
    }
  }
`
