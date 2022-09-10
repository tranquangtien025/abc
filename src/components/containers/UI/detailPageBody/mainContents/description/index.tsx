import { DescriptionContent } from "./descriptionContent"
import { DescriptionTitle } from "./descriptionTitle"
import { StyledDescription } from "./styles"

export const Description = (props: any) => {
  return (
    <div>
      <div>
        <StyledDescription>
          <DescriptionTitle title="Thông tin về bộ phim này" />
          <DescriptionContent 
          description={props.description}
          category={props.category} />
        </StyledDescription>
      </div>
    </div>
  )
}