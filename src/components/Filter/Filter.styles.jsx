import styled from "styled-components"

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.75rem;

  ${props => props.theme.media.desktopUp} {
    margin-bottom: 2rem;
    font-size: 2.25rem;
    text-align: left;
  }

  ${props => props.theme.media.desktopXLUp} {
    font-size: 2.75rem;
  }
`

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;

`

export const Tag = styled.div`
  padding: 0.5rem 0.8rem;
  border: 1px solid #fff;
  margin-right: 0.5rem;
  margin-bottom: .5rem;
  cursor: pointer;
  transition: 200ms ease-in;
  color: ${({ active }) => (active ? "#000" : "")};
  background-color: ${({ active }) => (active ? "#fff" : "")};
`
