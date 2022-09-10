import { StyledDiv2, StyledRatingContents } from "./styles"
import { StarRatings } from "./StarRatings";
import { RatingComments } from "./ratingComments";
import { AllComments } from "./allComments";

export const RatingContents = () => {
  return (
    <StyledRatingContents>
      <StyledDiv2>
        <StarRatings />
        <RatingComments />
        <AllComments />
      </StyledDiv2>
    </StyledRatingContents>
  )
}