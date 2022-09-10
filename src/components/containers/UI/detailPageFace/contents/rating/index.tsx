import { GoStar } from "react-icons/go"
import { GiTomato } from "react-icons/gi"
import { RiHomeHeartLine } from "react-icons/ri"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { StyledCursorPointer, StyledHomeHeart, StyledInformationCircle, StyledNumber, StyledNumberStarRating, StyledRating, StyledRatingInfos, StyledRatingInfosWrap, StyledStar, StyledStarRating, StyledTextRating, StyledTomato } from "./styles"
import NumberFormat from "react-number-format"

export const Rating = (props: any) => {
  return (
    <StyledRating>
      <StyledRatingInfosWrap>
        <StyledRatingInfos>
          {props.starRating && 
          <StyledStarRating>
            <StyledNumberStarRating>
              <StyledNumber>
                <NumberFormat value={props.starRating} decimalScale={1} fixedDecimalScale displayType={'text'} />
                <StyledStar>
                  <GoStar />
                </StyledStar>
              </StyledNumber>
            </StyledNumberStarRating>
            <StyledTextRating>366 bài đánh giá</StyledTextRating>
          </StyledStarRating>}
          {props.tomatometer && <StyledStarRating>
            <StyledNumberStarRating>
              <span>
                <StyledTomato>
                  <GiTomato />
                </StyledTomato>
                {props.tomatometer}%
              </span>
            </StyledNumberStarRating>
            <StyledTextRating>Tomatometer</StyledTextRating>
          </StyledStarRating>}
          {props.rating && <StyledStarRating>
            <StyledNumberStarRating>
              <span>
                <span>{props.rating}</span>
              </span>
            </StyledNumberStarRating>
            <StyledTextRating>Mức phân loại</StyledTextRating>
          </StyledStarRating>}
          {props.isQualified && <StyledStarRating>
            <StyledNumberStarRating>
              <div>
                <StyledHomeHeart>
                  <RiHomeHeartLine />
                </StyledHomeHeart>
              </div>
            </StyledNumberStarRating>
            <StyledTextRating>
              Đủ điều kiện
              <StyledCursorPointer>
                <StyledInformationCircle>
                  <HiOutlineInformationCircle />
                </StyledInformationCircle>
              </StyledCursorPointer>
            </StyledTextRating>
          </StyledStarRating>}
        </StyledRatingInfos>
      </StyledRatingInfosWrap>
    </StyledRating>
  )
}