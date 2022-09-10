import styled from "styled-components"

export const StyledButtons = styled.div`
  @media screen and (min-width: 600px) {
    align-items: center;
    flex-direction: row;
  }
  background: linear-gradient(to btop,rgb(32,33,36) 0,rgba(0,0,0,0) 0%);
  display: flex;
`

export const StyledButton = styled.div`
  align-items: center;
  display: flex;
`

export const StyledButton2 = styled.div`
  @media screen and (min-width: 600px) {
    flex-grow: unset;
  }
`

export const StyledButton4 = styled.div`
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
  display: flex;
`

export const StyledButton7 = styled.div`
  display: inline;
`

export const StyledButton8 = styled.button`
  color: #5f6368;
  background-color: var(--gm-fillbutton-disabled-container-color,rgba(60,64,67,.12));
  cursor: pointer;

  @media screen and (min-width: 600px) {
    width: unset;
  }

  font-family: inherit;
  line-height: 1.25rem;
  font-size: .875rem;
  letter-spacing: .0178571429em;
  font-weight: 500;
  height: 36px;
  margin: 6px 0;
  min-height: 36px;
  min-width: 160px;
  padding: 8px 16px;
  border-radius: 8px;
  text-transform: none;
  transition: border 280ms cubic-bezier(0.4,0,0.2,1),box-shadow 280ms cubic-bezier(0.4,0,0.2,1);
  box-shadow: none;
  text-decoration: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  background: transparent;
  font: inherit;
  text-align: inherit;
  border: none;
  background-color: rgba(60,64,67,.12);
  &:hover {
    background-color: #ff3369;
  }
`

export const StyledButton10 = styled.button`
  color: #5f6368;
  background-color: var(--gm-fillbutton-disabled-container-color,rgba(60,64,67,.12));
  cursor: default;
  pointer-events: none;

  @media screen and (min-width: 600px) {
    width: unset;
  }

  font-family: inherit;
  line-height: 1.25rem;
  font-size: .875rem;
  letter-spacing: .0178571429em;
  font-weight: 500;
  height: 36px;
  margin: 6px 0;
  min-height: 36px;
  min-width: 160px;
  padding: 8px 16px;
  border-radius: 8px;
  text-transform: none;
  transition: border 280ms cubic-bezier(0.4,0,0.2,1),box-shadow 280ms cubic-bezier(0.4,0,0.2,1);
  box-shadow: none;
  text-decoration: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  background: transparent;
  font: inherit;
  text-align: inherit;
`

export const StyledText1 = styled.span`
  position: relative;
`

export const StyledText2 = styled.span`
  opacity: .7;
  text-decoration: line-through;
`

export const StyledButton9 = styled.div`
  @media screen and (min-width: 600px) {
    margin-left: 24px;
  }
`

export const StyledBookMark = styled.div`
  @media screen and (min-width: 600px) {
    margin: 0;
    padding-left: 16px;
  }

  z-index: 1;
  align-items: center;
  display: flex;
  gap: 8px;
`

export const StyledBookMark2 = styled.span`
  font-size: 20px;
  color: #5f6368;
  cursor: pointer;
  &:hover {
    color: #ff3369;
  }
`

export const StyledBookMarkButton = styled.button`
  color: #5f6368;
  @media screen and (min-width: 600px) {
    width: unset;
  }

  font-family: inherit;
  line-height: 1.25rem;
  font-size: .875rem;
  letter-spacing: .0178571429em;
  font-weight: 500;
  height: 36px;
  margin: 6px 0;
  min-height: 36px;
  border: none;
  /* min-width: 160px; */
  padding: 8px 16px;
  border-radius: 8px;
  text-transform: none;
  transition: border 280ms cubic-bezier(0.4,0,0.2,1),box-shadow 280ms cubic-bezier(0.4,0,0.2,1);
  box-shadow: none;
  text-decoration: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  outline: none;
  vertical-align: middle;
  background: transparent;
  font: inherit;
  text-align: inherit;
`

export const StyledTrailer = styled.div`
  @media screen and (min-width: 840px) {
    display: block;
  }

  z-index: 1;
  margin-left: auto;
`

export const StyledTrailer2 = styled.div`
  font-family: inherit;
  line-height: 1.25rem;
  font-size: .875rem;
  letter-spacing: .0178571429em;
  font-weight: 500;
  z-index: 1;
  background-color: rgba(0,0,0,.54);
  border-radius: 48px;
  color: #fff;
  width: fit-content;
`

export const StyledTrailer3 = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0 26px;
  background: transparent;
  border: 0;
  box-shadow: none;
  color: inherit;
  min-height: 40px;
  min-width: 40px;
  text-transform: none;
  box-sizing: initial;
  font: inherit;
  margin: 0;
  text-align: inherit;
`

export const StyledTrailer4 = styled.span`
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
  margin-left: -6px;
`