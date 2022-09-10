import { Contents } from "./contents"
import { Infos } from "./infos"
import { Line } from "./line/line"
import { StyledPageFooter } from "./styles"

export const HomePageFooter = () => {
  return (
    <StyledPageFooter>
      <Line />
      <Contents />
      <Infos />
    </StyledPageFooter>
  )
}