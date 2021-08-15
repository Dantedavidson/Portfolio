import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
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
  font-size: 3rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
  font-family: "STIX Two Text", serif;
  ${props => props.theme.media.desktopUp} {
    font-size: 4rem;
    text-align: left;
  }

  ${props => props.theme.media.desktopXLUp} {
    font-size: 4.5rem;
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

export const Image = styled(GatsbyImage)`
  justify-self: center;
  width: 300px;
  border-radius: 50%;
  grid-row-start: 1;

  ${props => props.theme.media.desktopUp} {
    width: 325px;
    grid-column-start: 2;
    justify-self: end;
  }

  ${props => props.theme.media.desktopXLUp} {
    width: 375px;
  }
`

export const Button = styled.a`
  display: inline-block;
  position: relative;
  width: 80%;
  align-self: center;
  padding: 0.5rem 1rem;
  border: 1px solid #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: all 500ms ease-out;

  &:hover,
  &:focus {
    color: #000;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: #fff;
    transition: all 300ms ease-out;
    transform: scaleX(0);
    transform-origin: left;
  }

  &:hover:before,
  &:focus:before {
    transform: scaleX(1);
  }

  ${props => props.theme.media.desktopUp} {
    width: 9.375rem;
    align-self: flex-start;
  }

  ${props => props.theme.media.desktopXLUp} {
    width: 10.9375rem;
    align-self: flex-start;
  }
`
