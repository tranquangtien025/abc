import styled from "styled-components";

export const StyledItem = styled.div`
  padding: 16px 0;
  display: grid;
  grid-template-columns: 32px auto;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: buttonface;
  }
`


export const StyledThumbnailInfo = styled.div`
  display: grid;
  grid-template-columns: 72px auto;
  column-gap: 18px;
`

