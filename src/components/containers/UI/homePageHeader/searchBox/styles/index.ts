import styled from "styled-components"

export const StyledSearchBox = styled.div`
  /* @media screen and (hover: none) and (min-width: 840px) and (min-width: 960px) {
    position: absolute;
  }
  @media screen and (hover: none) and (min-width: 840px) { */
    align-self: start;
    width: 100%;
    contain: style;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  /* } */
`

export const StyledDiv2 = styled.div`
  /* @media screen and (hover: none) and (min-width: 840px) { */
    box-shadow: 0 1px 2px rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);
    height: unset;
    left: unset;
  /* } */
  z-index: 5;
  /* @media screen and (hover: none) and (min-width: 840px) and (min-width: 960px) { */
    width: calc(100vw - 420px);
  /* } */
  /* @media screen and (hover: none) and (min-width: 840px) and (min-width: 840px) { */
    margin: 8px auto;
  /* } */
  /* @media screen and (hover: none) and (min-width: 840px) { */
    border-radius: 8px;
    max-width: 720px;
    min-width: 285px;
    position: relative;
  /* } */
  top: 0;
`

export const StyledLabel1 = styled.label`
  border-color: rgb(218,220,224);
  border-bottom: solid 1px buttonface;
  align-items: center;
  box-sizing: content-box;
  display: flex;
  height: 48px;
  margin: 0 2px;
  position: relative;
`

export const StyledDiv3 = styled.div`
  @media screen and (hover: none) and (min-width: 840px) {
    display: inline;
  }
  /* display: none; */
  height: 48px;
  padding: 15px 17px;
`

export const StyledSpan1 = styled.span`
  color: rgb(95,99,104);
  fill: rgb(95,99,104);
  stop-color: rgb(95,99,104);
  font-size: 18px;
  position: relative; 
  font-family: inherit;
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  top: 15px;
`

export const StyledInput1 = styled.input`
  font-family: inherit;
  line-height: 1.5rem;
  font-size: 1rem;
  letter-spacing: .00625em;
  font-weight: 400;
  color: rgb(32,33,36);
  fill: rgb(32,33,36);
  stop-color: rgb(32,33,36);
  height: 48px;
  width: 100%;
  background: none;
  border: 0;
  display: inline-block;
  outline: none;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  white-space: normal;
  width: 100%;
`