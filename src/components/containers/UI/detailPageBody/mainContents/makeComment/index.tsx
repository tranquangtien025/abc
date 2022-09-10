import { StyledButton, StyledDiv2, StyledDiv3, StyledDiv4, StyledDiv5, StyledDiv6, StyledDiv7, StyledDiv8, StyledDiv9, StyledH2, StyledHeader, StyledSection, StyledSpan1, StyledSpan2, StyledSpan3 } from "./styles"
import { BsStarFill } from "react-icons/bs"

export const MakeComment = () => {
  return (
    <div>
      <StyledSection>
        <StyledHeader>
          <StyledDiv2>
            <StyledDiv3>
              <StyledH2>Xếp hạng phim này</StyledH2>
              <StyledDiv4>Cho chúng tôi biết suy nghĩ của bạn.</StyledDiv4>
            </StyledDiv3>
          </StyledDiv2>
        </StyledHeader>
        <StyledDiv5>
          <StyledDiv6>
            <StyledDiv7>
              <StyledDiv8>
                <StyledSpan1>
                  <StyledSpan2>
                    <BsStarFill />
                  </StyledSpan2>
                </StyledSpan1>
                <StyledSpan1>
                  <StyledSpan2>
                    <BsStarFill />
                  </StyledSpan2>
                </StyledSpan1>
                <StyledSpan1>
                  <StyledSpan2>
                    <BsStarFill />
                  </StyledSpan2>
                </StyledSpan1>
                <StyledSpan1>
                  <StyledSpan2>
                    <BsStarFill />
                  </StyledSpan2>
                </StyledSpan1>
                <StyledSpan1>
                  <StyledSpan2>
                    <BsStarFill />
                  </StyledSpan2>
                </StyledSpan1>
                <div>
                  <StyledDiv9>
                    <StyledButton>
                      <StyledSpan3>Viết bài đánh giá</StyledSpan3>
                    </StyledButton>
                  </StyledDiv9>
                </div>
              </StyledDiv8>
            </StyledDiv7>
          </StyledDiv6>
        </StyledDiv5>
      </StyledSection>
    </div>
  )
}