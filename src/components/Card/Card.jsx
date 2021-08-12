import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Flipped, spring } from "react-flip-toolkit"
import {
  CardWrap,
  ImageWrap,
  ButtonWrap,
  ContentWrap,
  Image,
  Button,
  Header,
  Description,
  SubHeader,
  List,
} from "./Card.styles"

function Card({ data }) {
  const {
    title,
    projectImage: { description: alt },
    projectImage,
    projectBrief: { projectBrief: brief },
    projectFeatures: {
      childMarkdownRemark: { html },
    },
  } = data
  const image = getImage(projectImage)
  console.log(image)
  return (
    <>
      <CardWrap>
        <ImageWrap>
          <Image image={image} alt={alt} />
          <ButtonWrap>
            <Button />
            <Button />
          </ButtonWrap>
        </ImageWrap>
        <ContentWrap>
          <Header>{title}</Header>
          <Description>{brief}</Description>
          <SubHeader>Project Features</SubHeader>
          <List />
        </ContentWrap>
      </CardWrap>
    </>
  )
}

export default Card
