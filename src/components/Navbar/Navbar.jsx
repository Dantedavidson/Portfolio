import React, { useState, useEffect } from "react"
import {
  NavWrapper,
  Nav,
  NavItems,
  LiWrapper,
  NavItem,
  NavToggleWrapper,
  NavToggle,
  SocialIcon,
} from "./Navbar.styles"
import { FaDownload, FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { IconContext } from "react-icons"
import cv from "../../../static/CV_Dante_Davidson_Daniele.pdf"

function Navbar() {
  const [displayMobileNav, setDisplayMobileNav] = useState(false)

  const handleClick = () => setDisplayMobileNav(!displayMobileNav)

  const showNav = () => {
    if (typeof window !== `undefined` && window?.innerWidth < 639) {
      setDisplayMobileNav(false)
    } else {
      setDisplayMobileNav(true)
    }
  }

  useEffect(() => {
    showNav()
  }, [])
  if (typeof window !== `undefined`) {
    window.addEventListener("resize", showNav)
  }
  return (
    <>
      <NavWrapper>
        <Nav $display={displayMobileNav}>
          <NavItems $display={displayMobileNav}>
            <LiWrapper>
              <NavItem download href={`${cv}`}>
                CV
                <IconContext.Provider
                  value={{ size: ".7em", style: { marginLeft: ".5rem" } }}
                >
                  <FaDownload />
                </IconContext.Provider>
              </NavItem>
            </LiWrapper>
            <LiWrapper>
              <NavItem href="mailto:dantedavidsondaniele@gmail.com">
                Contact
              </NavItem>
            </LiWrapper>
          </NavItems>
          <NavItems $display={displayMobileNav}>
            <IconContext.Provider value={{ size: "1.3em" }}>
              <LiWrapper>
                <SocialIcon
                  href="https://au.linkedin.com/in/dante-davidson-daniele-54a1ab213"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIcon>
              </LiWrapper>
              <LiWrapper>
                <SocialIcon
                  href="https://github.com/Dantedavidson"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithubSquare />
                </SocialIcon>
              </LiWrapper>
            </IconContext.Provider>
          </NavItems>
        </Nav>
        <NavToggleWrapper onClick={handleClick} $display={displayMobileNav}>
          <NavToggle />
          <NavToggle />
          <NavToggle />
        </NavToggleWrapper>
      </NavWrapper>
    </>
  )
}

export default Navbar
