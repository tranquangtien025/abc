import { GoStar } from "react-icons/go"
import { StyledInfo, StyledInfoRow, StyledName, StyledRentRow, StyledStarPriceRow, StyledStarRow } from "./styles"
import NumberFormat from 'react-number-format';

export const Info = (props: any) => {


  return (
    <StyledInfo>
      <StyledName>{props.name}</StyledName>
      <StyledInfoRow>{props.rating}</StyledInfoRow>
      <StyledInfoRow>{props.category}</StyledInfoRow>
      <StyledStarPriceRow>
        <StyledInfoRow>
          <span>
            <NumberFormat value={props.starRating} decimalScale={1} fixedDecimalScale displayType={'text'} />
          </span>
          <StyledStarRow>
            <GoStar />
          </StyledStarRow>
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledRentRow>
            <NumberFormat value={props.rent} thousandSeparator={true} suffix={' ₫'} displayType={'text'} />
          </StyledRentRow>
        </StyledInfoRow>
      </StyledStarPriceRow>
    </StyledInfo>
  )
}