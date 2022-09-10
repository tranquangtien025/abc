import styled from "styled-components"

export const StyledDetailWrap = styled.div`
  @media screen and (min-width: 600px) {
    width: calc(100% - 96px);
  }

  max-width: 1296px;
  margin: 0 auto;
  min-height: 56px;
  position: relative;
`

export const StyledDetail = styled.div`
  @media screen and (min-width: 960px) {
    display: flex;
    justify-content: space-between;
  }

  margin-top: 40px;
`