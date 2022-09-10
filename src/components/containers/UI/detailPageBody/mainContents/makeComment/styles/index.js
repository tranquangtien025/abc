import styled from "styled-components"

export const StyledSection = styled.section`
  @media screen and (min-width: 600px) {
    margin-bottom: 16px;
  }
  padding-top: 20px;
  width: 100%;
`

export const StyledHeader = styled.header`
  @media screen and (min-width: 960px) {
    padding-bottom: 20px;
  }
  padding-bottom: 20px;
`

export const StyledDiv2 = styled.div`
  @media screen and (min-width: 600px) {
    justify-content: start;
  }
  color: #202124;
  font-family: inherit;
  line-height: 1.5rem;
  font-size: 1.125rem;
  letter-spacing: 0;
  font-weight: 500;
  display: flex;
`

export const StyledDiv3 = styled.div`  
  margin-right: 16px;
`

export const StyledH2 = styled.h2`
  display: flex;
  align-items: center;
`

export const StyledDiv4 = styled.div`
  color: #5f6368;
  line-height: 1rem;
  font-size: .75rem;
  letter-spacing: .025em;
  font-weight: 400;
  font-family: inherit;
`

export const StyledDiv5 = styled.div`
  color: #5f6368;
  font-size: .875rem;
  font-weight: 400;
  letter-spacing: .0142857143em;
  line-height: 1.25rem;
  font-family: inherit;
`

export const StyledDiv6 = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StyledDiv7 = styled.div`
  width: 100%;
  margin-top: 4px;
`

export const StyledDiv8 = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledSpan1 = styled.span`
  height: 48px;
  width: 48px;
  display: inline-block;
  text-align: left;
`

export const StyledSpan2 = styled.span`
  cursor: pointer;
  color: buttonface;
  font-size: 30px;
  &:hover {
    color: #c71c56;
  }
`

export const StyledDiv9 = styled.div`
  display: inline;
`

export const StyledButton = styled.button`
  background-color: #c71c56;
  color: #fff;
  min-width: 160px;
  padding: 0 16px 0 16px;
  border-radius: 8px;
  font-family: inherit;
  font-size: .875rem;
  letter-spacing: .0107142857em;
  font-weight: 500;
  text-transform: none;
  transition: border 280ms cubic-bezier(0.4,0,0.2,1),box-shadow 280ms cubic-bezier(0.4,0,0.2,1);
  box-shadow: none;
  border: none;
  height: 36px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #c65c56;
  }
`

export const StyledSpan3 = styled.span`
  position: relative;
`