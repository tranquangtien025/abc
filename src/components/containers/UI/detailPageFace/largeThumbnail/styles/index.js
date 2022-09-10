import styled from "styled-components"

export const StyledThumbnail = styled.div`
  right: -48px;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 56.25vw;
`

export const StyledImage = styled.img`
  object-fit: cover;
  padding: 1px;
  position: absolute;
  right: 0;
  width: 100%;
  height: 56.25vw;
  background: linear-gradient(to bottom,rgb(32,33,36) 0,rgba(0,0,0,0) 56%);
  bottom: 0;
  left: 0;
  top: 0;
  filter: brightness(50%);
`

export const StyledImageDiv = styled.div`
  @media screen and (min-width: 840px) {
    background: linear-gradient(to right,rgb(32,33,36) 0,rgba(0,0,0,0) 56%),linear-gradient(to top,rgb(32,33,36) 0,rgba(0,0,0,0) 56%);
  }

  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
`