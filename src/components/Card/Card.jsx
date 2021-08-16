import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import {  Flipped, spring } from "react-flip-toolkit"

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
  
  const image = getImage(projectImage)

  const onElementAppear = (el, index) => {
    return spring({
      onUpdate: val => {
        el.style.opacity = val
      },
      delay: index * 50,
    })
  }

  const onExit = () => (el, index, removeElement) => {
    console.log(index)
    spring({
      config: { overshootClamping: true },
      onUpdate: val => {
        el.style.opacity = `${0.7 - val}`
      },
      delay: index * 50,
      onComplete: removeElement,
    })
  
    return () => {
      el.style.opacity = ""
      removeElement()
    }
  }
 
  return (
    <>
    <Flipped
      flipId="flip-item" 
      onAppear={onElementAppear} 
      onExit={onExit()}
    >
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
          <List dangerouslySetInnerHTML={{ __html: html}} />
        </ContentWrap>
      </CardWrap>

      </Flipped>
    </>
  )
}

export default Card
