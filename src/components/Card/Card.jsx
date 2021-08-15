import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import DOMPurify from 'dompurify';
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
    liveSite,
    sourceCode
  } = data
  const cleanHtml = DOMPurify.sanitize(html)
  const image = getImage(projectImage)
  console.log(liveSite,sourceCode)
  return (
    <>
      <CardWrap>
        <ImageWrap>
          <Image image={image} alt={alt} />
          <ButtonWrap>
            <Button href={liveSite} target="_blank" >Live Site</Button>
            <Button href={sourceCode} target="_blank">Source Code</Button>
          </ButtonWrap>
        </ImageWrap>
        <ContentWrap>
          <Header>{title}</Header>
          <Description>{brief}</Description>
          <SubHeader>Project Features</SubHeader>
          <List dangerouslySetInnerHTML={{ __html: cleanHtml}} />
        </ContentWrap>
      </CardWrap>
    </>
  )
}

export default Card
