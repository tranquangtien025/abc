import styled from "styled-components"

export const StyledSubContents = styled.div`
  width: 276px;
`

export const StyledSubContents2 = styled.section`
  @media screen and (min-width: 600px) {
    margin-bottom: 16px;
  }

  padding-top: 20px;
  width: 100%;
`

export const StyledList = styled.div`
  color: #5f6368;
  font-size: .875rem;
  font-weight: 400;
  letter-spacing: .0142857143em;
  line-height: 1.25rem;
  font-family: inherit;
  @media screen and (min-width: 960px) {
    grid-template-columns: repeat(1,1fr);
  }

  display: grid;
  grid-gap: 24px;
`

export const StyledDiv3 = styled.div`
  border-radius: 8px;
  margin: -12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  outline: none;
  color: inherit;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background-color: buttonface;
  }
`