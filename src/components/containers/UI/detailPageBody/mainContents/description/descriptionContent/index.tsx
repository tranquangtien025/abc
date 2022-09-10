import { Category } from "./category"
import { StyledContent, StyledContent2 } from "./styles"

export const DescriptionContent = (props: any) => {
  return (
    <StyledContent>
      <StyledContent2>
        {props.description}
      </StyledContent2>
      <Category category={props.category} />
    </StyledContent>
  )
}