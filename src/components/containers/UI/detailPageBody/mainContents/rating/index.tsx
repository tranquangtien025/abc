import { RatingContents } from "./ratingContents"
import { RatingTitle } from "./ratingTitle"
import { StyledRating } from "./styles"

export const Rating = () => {
  return (
    <div>
      <StyledRating>
        <RatingTitle />
        <RatingContents />
      </StyledRating>
    </div>
  )
}