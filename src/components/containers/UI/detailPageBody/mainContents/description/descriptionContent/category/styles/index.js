import styled from "styled-components"

export const StyledCategory = styled.div`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  gap: 16px 12px;
  margin-bottom: 4px;
  margin-top: 28px;
`

export const StyledCategory2 = styled.div`
  display: inline;
`

export const StyledCategory3 = styled.div`
  min-height: auto;
  padding: 0 15px 0 15px;
  height: 32px;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 16px;
  border-width: 1px;
  will-change: unset;
  border-width: 1px;
  border: 1px solid rgb(218,220,224);
  font-family: inherit;
  font-size: .875rem;
  letter-spacing: .0107142857em;
  font-weight: 500;
  text-transform: none;
  transition: border 280ms cubic-bezier(0.4,0,0.2,1),box-shadow 280ms cubic-bezier(0.4,0,0.2,1);
  box-shadow: none;
  &:hover {
    background-color: buttonface;
  }
`
export const StyledCategory4 = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  top: 5px;
`

export const StyledCategory5 = styled.a`
  height: 100%;
`

export const StyledCategory6 = styled.span`
  color: rgb(95,99,104);
`