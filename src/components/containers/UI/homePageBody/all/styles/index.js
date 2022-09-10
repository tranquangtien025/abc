import styled from "styled-components";

export const StyledAll = styled.div`
  margin-left: 48px;
  margin-right: 48px;
  position: relative;
  gap: 12px;
  display: flex;
  height: 34px;
  margin-bottom: 30px;
  `

export const StyledListCategory = styled.a`
  font-family: inherit;
  color: inherit;
  text-align: center;
  padding: 7px 20px;
  border: 1px solid rgb(95,99,104);
  border-radius: 9999px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .25px;
  background-color: #f9e8ee;
  color: #8a0d37; 
  border: none;
  &:hover {
    background-color: buttonface;
  }
`

export const StyledText = styled.span`
  font-family: inherit;
  font-weight: 600;
  color: inherit;
  text-align: center;
  height: 18px;
  margin: 6px 4px;
`