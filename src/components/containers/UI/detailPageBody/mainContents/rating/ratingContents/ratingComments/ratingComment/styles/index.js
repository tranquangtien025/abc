import styled from "styled-components"

export const StyledRating = styled.div`
  @media screen and (min-width: 960px) {
    padding: 20px 0;
  }
  padding: 16px 0;
`

export const StyledDiv2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledDiv3 = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: 16px;
  grid-template-columns: repeat(2,max-content);
`

export const StyledImg = styled.img`
  border-radius: 50%;
  width: 32px;
  height: 32px;
  overflow: hidden;
  background-size: cover;
`

export const StyledDiv4 = styled.div`
  color: #202124;
  font-size: .875rem;
  font-weight: 400;
  letter-spacing: .0142857143em;
  line-height: 1.25rem;
`

export const StyledDiv5 = styled.div`
  position: relative;
  overflow: visible;
`

export const StyledButton = styled.button`
  z-index: 0;
  --mdc-ripple-fg-size: 0;
  --mdc-ripple-left: 0;
  --mdc-ripple-top: 0;
  --mdc-ripple-fg-scale: 1;
  --mdc-ripple-fg-translate-end: 0;
  --mdc-ripple-fg-translate-start: 0;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  will-change: transform,opacity;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  -webkit-user-select: none;
  overflow: visible;
  font-size: 24px;
  width: 48px;
  height: 48px;
  padding: 12px;
  background: transparent;
  box-shadow: none;
  min-height: 40px;
  min-width: 40px;
  text-transform: none;
  align-items: initial;
  text-align: inherit;
`

export const StyledMoreVert = styled.span`
  font-family: inherit;
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
`

export const StyledDiv6 = styled.div`
  margin-top: 16px;
`

export const StyledDate = styled.span`
  color: #5f6368;
  font-family: inherit;
  font-size: .75rem;
  font-weight: 400;
  letter-spacing: .025em;
  line-height: 1rem;
  margin-left: 1ch;
`

export const StyledDiv8 = styled.div`
  margin-top: 8px;
  font-size: .875rem;
  letter-spacing: .0142857143em;
  line-height: 1.25rem;
  overflow-wrap: anywhere;
`

export const StyleFooter = styled.footer`
  align-items: center;
  display: flex;
  margin-top: 12px;
`

export const StyledDiv9 = styled.div`
  font-family: inherit;
  font-size: .75rem;
  font-weight: 400;
  letter-spacing: .025em;
  line-height: 1rem;
  margin-right: 24px;
`

export const StyledDiv10 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const StyledDiv11 = styled.div`
  border-radius: 9999px;
  height: 24px;
  line-height: 10px;
  color: rgb(95,99,104);
  fill: rgb(95,99,104);
  background-color: #fff;
  border: 1px rgb(218,220,224) solid;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .25px;
  min-width: auto;
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: background .2s .1s;
  &:hover {
    background-color: buttonface;
  }
`

export const StyledDiv12 = styled.div`
  margin: 0 12px;
  align-items: center;
  display: flex;
  position: relative;
`

export const StyledSpan = styled.span`
  display: inline-block;
  margin: 6px 4px;
  font-weight: bold;
  color: #5f6368;
`