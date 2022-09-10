import { Rating } from "./rating"
import { StyledContents } from "./styles"
import { Title } from "./title"

export const Contents = (props: any) => {
  return (
    <StyledContents>
      <Title
      thumbnail={props.movieDetail.thumbnail}
      name={props.movieDetail.name}
      year={props.movieDetail.year}
      duration={props.movieDetail.duration} />
      <Rating
      starRating={props.movieDetail.starRating}
      tomatometer={props.movieDetail.tomatometer}
      rating={props.movieDetail.rating}
      isQualified={props.movieDetail.isQualified} />
    </StyledContents>
  )
}