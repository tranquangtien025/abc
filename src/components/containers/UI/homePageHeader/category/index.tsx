import { StyledCategory, StyledLine, StyledText } from "./styles"
import { useNavigate } from "react-router-dom"

export const Category = () => {
  const navigate = useNavigate();

  return (
    <StyledCategory onClick={() => navigate("/")} >
      <StyledText>
        Phim và truyền hình
      </StyledText>
      <StyledLine />
    </StyledCategory>
  )
}