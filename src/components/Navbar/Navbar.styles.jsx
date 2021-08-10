import styled from "styled-components"

export const NavWrapper = styled.div`
  width: 100%;
  min-height: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding-bottom: 1rem;
  border-bottom: ${props => `solid 1px ${props.theme.textLight}`};
  background-color: ${props => props.theme.background};
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 60%);
`

export const Nav = styled.nav`
  position: relative;
  font-size: 1.5rem;
  padding-top: ${props => props.theme.padding.small};

  //Mobile styles
  ${props => props.theme.media.mobileDown} {
    text-align: center;
    transition: all 600ms ease;
    height: ${({ display }) => (display ? "8.65rem" : "0")};
    margin-top: ${({ display }) => (display ? "10vh" : "0")};
    overflow: hidden;
  }

  //Tablet Up
  ${props => props.theme.media.tabletUp} {
    display: flex;
    justify-content: space-between;
    width: ${props => props.theme.pageWidth};
    margin-left: auto;
    margin-right: auto;
  }

  ${props => props.theme.media.desktopUp} {
  }
`

export const NavItems = styled.ul`
  list-style: none;

  &:nth-child(1) {
    ${props => props.theme.media.tabletUp} {
      display: flex;
    }
  }

  &:nth-child(2) {
    width: 80px;
    display: flex;
    justify-content: space-between;
  }

  ${props => props.theme.media.mobileDown} {
    transition: all 600ms ease;
    opacity: ${({ display }) => (display ? "1" : "0")};
    &:nth-child(2) {
      margin: auto;
    }
  }
`

export const NavItem = styled.li`
  ${props => props.theme.media.mobileDown} {
    padding-bottom: ${props => props.theme.padding.small};
  }
  ${props => props.theme.media.tabletUp} {
    &:nth-child(2) {
      margin-left: 2rem;
    }
  }
`
export const NavToggleWrapper = styled.div`
  position: absolute;
  display: block;

  top: 0.6rem;
  right: 2rem;
  width: 2rem;
  height: 1.2rem;
  cursor: pointer;

  > span {
    transition: all 600ms ease;
    transform-origin: 5px 1.5px;
  }

  span:nth-child(1) {
    transform: ${({ display }) => (display ? "rotate(45deg);" : "")};
  }
  span:nth-child(2) {
    top: 50%;
    transform: translateY(-1px);
    opacity: ${({ display }) => (display ? 0 : 1)};
  }
  span:nth-child(3) {
    bottom: 0;
    transform: ${({ display }) => (display ? "rotate(-45deg);" : "")};
  }

  ${props => props.theme.media.tabletUp} {
    display: none;
  }
`

export const NavToggle = styled.span`
  position: absolute;
  left: 0;
  width: 2rem;
  height: 3px;
  background-color: ${props => props.theme.textLight};
`

// position: absolute;
//   top: 50%;
//   left: 0;
//   width: 2rem;
//   height: 2px;
//   background-color: ${props => props.theme.textLight};
//   visibility: ${({ display }) => (display ? "hidden" : "visible")};
//   /* opacity: ${({ display }) => (display ? 0 : 1)}; */

//   &:before,
//   &:after {
//     content: "";
//     position: absolute;
//     left: 0;
//     width: 2rem;
//     height: 2px;
//     visibility: visible;
//     transition: all 1s ease;
//     transform-origin: 5px 1px;
//     background-color: ${props => props.theme.textLight};
//   }

//   &:before {
//     top: -0.5rem;
//     transform: ${({ display }) => (display ? "rotate(45deg);" : "")};
//   }

//   &:after {
//     top: 0.5rem;
//     transform: ${({ display }) => (display ? "rotate(-45deg);" : "")};
//   }
