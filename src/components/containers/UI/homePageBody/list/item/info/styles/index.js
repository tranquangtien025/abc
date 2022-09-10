import styled from "styled-components";

export const StyledInfo = styled.div`
  display: grid;
  grid-template-rows: max-content;
  height: fit-content;
  row-gap: 2px;
`

export const StyledName = styled.span`
  color: rgb(32,33,36);
  font-size: .875rem;
  font-weight: 400;
  letter-spacing: .0142857143em;
  line-height: 1.25rem;
  font-family: inherit;
  letter-spacing: -.2px;
`

export const StyledInfoRow = styled.span`
  color: rgb(32,33,36);
  font-family: inherit;
  line-height: 1rem;
  font-size: .75rem;
  letter-spacing: .025em;
  font-weight: 400;
  letter-spacing: .2px;
`

export const StyledStarPriceRow = styled.div`
  display: inline-flex;
  align-items: center;
`

export const StyledStarRow = styled.span`
  height: 10px;
`

export const StyledRentRow = styled.span`
  margin-left: 12px;
`