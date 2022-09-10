import styled from "styled-components"

export const StyledRatingTitle = styled.header`
  @media screen and (min-width: 960px) {
    padding-bottom: 20px;
  }
`
export const StyledDiv1 = styled.div`
  color: #202124;
  
  @media screen and (min-width: 600px) {
    justify-content: start;
  }

  font-family: inherit;
  line-height: 1.5rem;
  font-size: 1.125rem;
  letter-spacing: 0;
  font-weight: 500;
  display: flex;
`

export const StyledDiv2 = styled.div`
  margin-right: 16px;
`

export const StyleText = styled.h2`
  display: flex;
  align-items: center;
`

export const StyledDiv3 = styled.div`
  margin-top: 20px;
`

export const StyledDiv4 = styled.div`
  @media screen and (min-width: 600px) {
    display: inherit;
    margin-left: auto;
  }
`

export const StyledRatingUndefined = styled.a`
  color: #5f6368;

  @media screen and (min-width: 600px) {
    display: flex;
  }

  align-items: center;
`

export const StyledRatingUndefinedText = styled.span`
  font-size: .75rem;
  font-weight: 400;
`

export const StyledInformationCircle = styled.span`
  margin-top: 4px;
  font-size: 16px;
  font-family: inherit;
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  margin-left: 8px;
  margin-right: 8px;
`