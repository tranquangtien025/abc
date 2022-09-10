import { StyledArrow, StyledHeader, StyledHeader1, StyledText } from "./styles"
import { MdArrowForward } from "react-icons/md"

export const DescriptionTitle = (props: any) => {
  return (
    <StyledHeader>
      <StyledHeader1>
        <StyledText>{props.title}</StyledText>
        <StyledArrow>
          <MdArrowForward />
        </StyledArrow>
      </StyledHeader1>
    </StyledHeader>
  )
}