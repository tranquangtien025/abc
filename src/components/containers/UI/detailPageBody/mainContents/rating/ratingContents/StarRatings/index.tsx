import { GoStar } from "react-icons/go"
import { StyledDiv10, StyledDiv11, StyledDiv12, StyledDiv3, StyledDiv4, StyledDiv5, StyledDiv6, StyledDiv7, StyledDiv8, StyledDiv9, StyledSpan2, StyledStar } from "./styles"

export const StarRatings = () => {
  return (
    <StyledDiv3>
      <StyledDiv4>
        <StyledDiv5>
          <div>
            <StyledDiv6>4,2</StyledDiv6>
            <StyledDiv7>
              <StyledStar>
                <StyledSpan2>
                  <GoStar />
                </StyledSpan2>
              </StyledStar>
              <StyledStar>
                <StyledSpan2>
                  <GoStar />
                </StyledSpan2>
              </StyledStar>
              <StyledStar>
                <StyledSpan2>
                  <GoStar />
                </StyledSpan2>
              </StyledStar>
              <StyledStar>
                <StyledSpan2>
                  <GoStar />
                </StyledSpan2>
              </StyledStar>
              <StyledStar>
                <StyledSpan2>
                  <GoStar />
                </StyledSpan2>
              </StyledStar>
            </StyledDiv7>
            <StyledDiv8>367 bài đánh giá</StyledDiv8>
          </div>
          <div>
            <StyledDiv9>
              <StyledDiv10>5</StyledDiv10>
              <StyledDiv11>
                <StyledDiv12 />
              </StyledDiv11>
            </StyledDiv9>
            <StyledDiv9>
              <StyledDiv10>4</StyledDiv10>
              <StyledDiv11>
                <StyledDiv12 style={{ "width": "60%" }} />
              </StyledDiv11>
            </StyledDiv9>
            <StyledDiv9>
              <StyledDiv10>3</StyledDiv10>
              <StyledDiv11>
                <StyledDiv12 style={{ "width": "50%" }} />
              </StyledDiv11>
            </StyledDiv9>
            <StyledDiv9>
              <StyledDiv10>2</StyledDiv10>
              <StyledDiv11>
                <StyledDiv12 style={{ "width": "40%" }} />
              </StyledDiv11>
            </StyledDiv9>
            <StyledDiv9>
              <StyledDiv10>1</StyledDiv10>
              <StyledDiv11>
                <StyledDiv12 style={{ "width": "30%" }} />
              </StyledDiv11>
            </StyledDiv9>
          </div>
        </StyledDiv5>
      </StyledDiv4>
    </StyledDiv3>
  )
}