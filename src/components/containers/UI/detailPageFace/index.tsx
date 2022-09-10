import { Buttons } from "./buttons"
import { Contents } from "./contents"
import { LargeThumbnail } from "./largeThumbnail"
import { Notes } from "./Notes"
import { StyledDetail, StyledDetailWrap } from "./styles"

export const DetailPageFace = (props: any) => {
  return (
    <StyledDetailWrap>
      <StyledDetail>
        <LargeThumbnail largeThumbnail={props.movieDetail.largeThumbnail} />
        <Contents 
        movieDetail={props.movieDetail}
         />
        <Buttons 
        rent={props.movieDetail.rent}
        price={props.movieDetail.price}
        trailer={props.movieDetail.trailer}/>
        <Notes info={props.info} warning={props.warning} />
      </StyledDetail>
    </StyledDetailWrap>
  )
}