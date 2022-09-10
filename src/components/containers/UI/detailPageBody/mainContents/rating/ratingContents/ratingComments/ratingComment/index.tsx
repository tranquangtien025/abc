import { MdMoreVert } from "react-icons/md"
import { FiveStars } from "./fiveStars"
import { StyledButton, StyledDate, StyledDiv10, StyledDiv11, StyledDiv12, StyledDiv2, StyledDiv3, StyledDiv4, StyledDiv5, StyledDiv6, StyledDiv8, StyledDiv9, StyledImg, StyledMoreVert, StyledRating, StyledSpan, StyleFooter } from "./styles"

export const RatingComment = (props: any) => {
  return (
    <StyledRating>
      <header>
        <StyledDiv2>
          <StyledDiv3>
            <StyledImg src={props.avatar} />
            <StyledDiv4>{props.name}</StyledDiv4>
          </StyledDiv3>
          <div>
            <StyledDiv5>
              <div>
                <StyledButton>
                  <StyledMoreVert>
                    <MdMoreVert />
                  </StyledMoreVert>
                </StyledButton>
              </div>
            </StyledDiv5>
          </div>
        </StyledDiv2>
        <StyledDiv6>
          <FiveStars />
          <StyledDate>{props.date}</StyledDate>
        </StyledDiv6>
      </header>
      <StyledDiv8>{props.comment}</StyledDiv8>
      <div>
        <StyleFooter>
          <StyledDiv9>Nội dung này có hữu ích cho bạn không?</StyledDiv9>
          <div>
            <StyledDiv10>
              <StyledDiv11>
                <StyledDiv12>
                  <StyledSpan>Có</StyledSpan>
                </StyledDiv12>
              </StyledDiv11>
              <StyledDiv11>
                <StyledDiv12>
                  <StyledSpan>Không</StyledSpan>
                </StyledDiv12>
              </StyledDiv11>
            </StyledDiv10>
          </div>
        </StyleFooter>
      </div>
    </StyledRating>
  )
}