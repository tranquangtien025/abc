import { useNavigate } from "react-router-dom"
import { StyledCategory, StyledCategory2, StyledCategory3, StyledCategory4, StyledCategory5, StyledCategory6 } from "./styles"

export const Category = (props: any) => {
  const navigate = useNavigate()
  return (
    <StyledCategory>
      <StyledCategory2>
        <StyledCategory3>
          <StyledCategory4>
            <StyledCategory5 onClick={() => navigate("/")}>
              <StyledCategory6>{props.category}</StyledCategory6>
            </StyledCategory5>
          </StyledCategory4>
        </StyledCategory3>
      </StyledCategory2>
    </StyledCategory>
  )
}