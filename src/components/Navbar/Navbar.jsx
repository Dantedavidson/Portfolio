import React, { useState, useEffect } from "react"
import {
  NavWrapper,
  Nav,
  NavItems,
  NavItem,
  NavToggleWrapper,
  NavToggle,
} from "./Navbar.styles"
import { FaDownload, FaLinkedin, FaGithubSquare } from "react-icons/fa"
import { IconContext } from "react-icons"

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
            <NavItem>
              CV
              <IconContext.Provider
                value={{ size: ".7em", style: { marginLeft: ".5rem" } }}
              >
                <FaDownload />
              </IconContext.Provider>
            </NavItem>
            <NavItem>Contact</NavItem>
          </NavItems>
          <NavItems display={displayMobileNav}>
            <IconContext.Provider value={{ size: "1.3em" }}>
              <FaLinkedin />
              <FaGithubSquare />
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
