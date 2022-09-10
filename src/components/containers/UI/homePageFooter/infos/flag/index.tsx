import { StyledFlag, StyledImage, StyledText } from "./styles"

export const Flag = (props: any) => {
  return (
    <StyledFlag>
      <StyledImage src="https://ssl.gstatic.com/store/images/regionflags/us.png" />
      <StyledText>{props.info}</StyledText>
    </StyledFlag>
  )
}