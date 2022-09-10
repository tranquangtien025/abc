import styled from "styled-components";

export const StyledFlag = styled.div`
  height: 48px;
  line-height: 48px;
  margin-right: 24px;
  display: grid;
  grid-template-columns: repeat(2,max-content);
  grid-template-rows: 1fr;
  column-gap: 12px;
`

export const StyledImage = styled.img`
  align-self: center;
  width: 24px;
  height: 18px;
`

export const StyledText = styled.div`
  color: rgb(95,99,104);
  font-size: .75rem;
  font-family: inherit;
  line-height: 48px;
`