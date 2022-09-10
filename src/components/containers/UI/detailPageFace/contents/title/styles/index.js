import styled from "styled-components"

export const StyledTitle = styled.div`
  @media screen and (min-width: 840px) {
    margin-top: 112px;
  }

  align-items: flex-start;
  display: flex;
`

export const StyledImage = styled.img`
  @media screen and (min-width: 600px) {
    width: 96px;
  }

  display: inline-block;
  border-width: 0;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);
  border-radius: 4px;
  margin: 7px 24px 0 0;
  background-size: contain;
`

export const StyledName = styled.h1`
  max-height: 112px;

  @media screen and (min-width: 840px) {
    width: 560px;
  }

  @media screen and (min-width: 600px) {
    font-family: inherit;
    line-height: 2.75rem;
    font-size: 2.25rem;
    letter-spacing: 0;
    font-weight: 500;
    align-items: flex-end;
    display: flex;
    word-break: keep-all;
  }
`

export const StyledPublish = styled.div`
  @media screen and (min-width: 840px) {
    margin-top: 16px;
  }
`

export const StyledPublishInfo = styled.div`
  color: rgb(154,160,166);
  font-family: inherit;
  line-height: 1rem;
  font-size: .75rem;
  letter-spacing: .025em;
  font-weight: 400;
`