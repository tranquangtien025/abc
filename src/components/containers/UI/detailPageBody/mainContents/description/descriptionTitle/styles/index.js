import styled from "styled-components"

export const StyledHeader = styled.header`
  @media screen and (min-width: 960px) {
    padding-bottom: 20px;
  }
`

export const StyledHeader1 = styled.div`
  color: #202124;
  @media screen and (min-width: 600px) {
    justify-content: start;
  }

  font-family: inherit;
  line-height: 1.5rem;
  /* font-size: 1.125rem; */
  
  letter-spacing: 0;
  font-weight: 500;
  display: grid;
  grid-template-columns: auto auto;
`

export const StyledText = styled.h2`
height: 28px;
margin-top: 0px;
margin-bottom: 0px;
  font-size: 24px;
  color: inherit;
  margin-right: 16px;
  display: flex;
  align-items: center;
  white-space: nowrap
`

export const StyledArrow = styled.div`
  margin-top: 2px;
  height: 28px;
  border: none;
  outline: none;
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  font-size: 24px;
  width: 48px;
  height: 48px;
  /* padding: 12px; */
  padding-left: 0;
  height: 100%;
  width: 100%;
  color: #5f6368;
  font-family: inherit;
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
`