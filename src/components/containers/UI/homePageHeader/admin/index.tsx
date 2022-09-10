import { GrUserManager } from "react-icons/gr"
import { useNavigate } from "react-router-dom"
import { StyledAdmin } from "./styles"

export const Admin = () => {
  const navigate = useNavigate()

  return (
    <StyledAdmin onClick={() => navigate("/admin")}>
      <GrUserManager />
    </StyledAdmin>
  )
}