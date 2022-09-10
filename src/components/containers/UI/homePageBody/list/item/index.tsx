import { Info } from "./info/info"
import { No } from "./no/no"
import { StyledItem, StyledThumbnailInfo } from "./styles"
import { Thumbnail } from "./thumbnail"
import { useNavigate } from "react-router-dom"

export const Item = (props: any) => {
  const navigate = useNavigate()

  return (
    <StyledItem>
      <No  no={props.no} />
      <StyledThumbnailInfo onClick={() => navigate(`/detail/${props.id}`)}>
        <Thumbnail thumbnail={props.thumbnail} />
        <Info 
        name={props.name}
        rating={props.rating}
        category={props.category}
        starRating={props.starRating}
        rent={props.rent} />
      </StyledThumbnailInfo>
    </StyledItem>
  )
}