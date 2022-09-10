import { StyledNo, StyledText } from "./styles"

export const No = (props: any) => {
  return (
    <StyledNo>
      <StyledText>{props.no}</StyledText>
    </StyledNo>
  )
}