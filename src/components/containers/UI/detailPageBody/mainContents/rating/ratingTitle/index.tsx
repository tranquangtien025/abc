import { MdArrowForward } from "react-icons/md"
import { StyledArrow } from "../../description/descriptionTitle/styles"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { StyledDiv1, StyledDiv2, StyledDiv3, StyledDiv4, StyledInformationCircle, StyledRatingTitle, StyledRatingUndefined, StyledRatingUndefinedText, StyleText } from "./styles"

export const RatingTitle = () => {
  return (
    <StyledRatingTitle>
      <StyledDiv1>
        <StyledDiv2>
          <StyleText>Xếp hạng và đánh giá</StyleText>
        </StyledDiv2>
        <StyledDiv3>
          <StyledArrow>
            <MdArrowForward />
          </StyledArrow>
        </StyledDiv3>
        <StyledDiv4>
          <StyledRatingUndefined href="https://play.google.com/about/comment-posting-policy?hl=vi">
            <StyledRatingUndefinedText>Điểm xếp hạng và bài đánh giá chưa được xác minh</StyledRatingUndefinedText>
            <StyledInformationCircle>
              <HiOutlineInformationCircle />
            </StyledInformationCircle>
          </StyledRatingUndefined>
        </StyledDiv4>
      </StyledDiv1>
      
    </StyledRatingTitle>
  )
}