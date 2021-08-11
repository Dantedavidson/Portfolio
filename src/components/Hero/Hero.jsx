import React from "react"
import {
  HeroSection,
  FlexContainer,
  Grid,
  Title,
  Text,
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
          <FlexContainer>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </FlexContainer>
        </FlexContainer>
        <Image src={img} alt={alt} />
      </Grid>
    </HeroSection>
  )
}

export default Hero
