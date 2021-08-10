import React, { useState, useEffect } from "react"
import {
  NavWrapper,
  Nav,
  NavItems,
  NavItem,
  NavToggleWrapper,
  NavToggle,
  SocialIcon,
} from "./Navbar.styles"
import { FaDownload, FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { IconContext } from "react-icons"
// import cv from "../../../static/portfolio.pdf"
import { Link } from "react-router-dom"

function Navbar() {
  const [displayMobileNav, setDisplayMobileNav] = useState(false)

  const handleClick = () => setDisplayMobileNav(!displayMobileNav)

  const showNav = () => {
    if (window.innerWidth < 639) {
      setDisplayMobileNav(false)
    } else {
      setDisplayMobileNav(true)
    }
  }

  useEffect(() => {
    showNav()
  }, [])

  window.addEventListener("resize", showNav)
  return (
    <>
      <NavWrapper>
        <Nav display={displayMobileNav}>
          <NavItems display={displayMobileNav}>
            {/* <CV href={cv} download> */}
            <NavItem>
              CV
              <IconContext.Provider
                value={{ size: ".7em", style: { marginLeft: ".5rem" } }}
              >
                <FaDownload />
              </IconContext.Provider>
            </NavItem>
            <NavItem href="mailto:dantedavidsondaniele@gmail.com">
              Contact
            </NavItem>
          </NavItems>
          <NavItems display={displayMobileNav}>
            <IconContext.Provider value={{ size: "1.3em" }}>
              <SocialIcon
                href="https://au.linkedin.com/in/dante-davidson-daniele-54a1ab213"
                target="_blank"
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon
                href="https://github.com/Dantedavidson"
                target="_blank"
              >
                <FaGithubSquare />
              </SocialIcon>
            </IconContext.Provider>
          </NavItems>
        </Nav>
        <NavToggleWrapper onClick={handleClick} display={displayMobileNav}>
          <NavToggle />
          <NavToggle />
          <NavToggle />
        </NavToggleWrapper>
      </NavWrapper>
    </>
  )
}

export default Navbar
