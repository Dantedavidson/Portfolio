import React from "react"
import { getImage } from "gatsby-plugin-image"
import {
  HeroSection,
  Grid,
  FlexContainer,
  Container,
  Title,
  Text,
  Button,
  Image,
} from "./Hero.styles"

function Hero({ data }) {
  const {
    title,
    text: { text },
    portrait,
    portrait: { description: alt },
  } = data

  const image = getImage(portrait)
  console.log(image, portrait)
  return (
    <HeroSection>
      <Grid>
        <FlexContainer>
          <Container>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </Container>
          <Button href="#projects">Projects</Button>
        </FlexContainer>
        <Image image={image} alt={alt} />
      </Grid>
    </HeroSection>
  )
}

export default Hero
