import React from "react"
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
    portrait: {
      file: { url: img },
    },
    portrait: { description: alt },
  } = data

  return (
    <HeroSection>
      <Grid>
        <FlexContainer>
          <Container>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </Container>
          <Button>Projects</Button>
        </FlexContainer>
        <Image src={img} alt={alt} />
      </Grid>
    </HeroSection>
  )
}

export default Hero
