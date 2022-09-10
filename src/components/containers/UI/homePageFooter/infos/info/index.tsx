import { StyledInfo, StyledText } from "./styles"

export const Info = (props: any) => {
  return (
    <StyledInfo>
      <StyledText>{props.info}</StyledText>
    </StyledInfo>
  )
}