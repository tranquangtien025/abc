import { StyledContent, StyledText } from "./styles"

export const Content = (props: any) => {
  return (
    <StyledContent>
      <StyledText>{props.content}</StyledText>
    </StyledContent>
  )
}