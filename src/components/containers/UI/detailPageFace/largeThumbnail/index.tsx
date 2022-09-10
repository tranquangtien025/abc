import { StyledImage, StyledImageDiv, StyledThumbnail } from "./styles"

export const LargeThumbnail = (props: any) => {
  
  return (
    <StyledThumbnail>
      <StyledImage src={props.largeThumbnail} />
      <StyledImageDiv />
    </StyledThumbnail>
  )
}