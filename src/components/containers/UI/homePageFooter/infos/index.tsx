import { Flag } from "./flag"
import { Info } from "./info"
import { StyledInfos } from "./styles"

export const Infos = () => {
  return (
    <StyledInfos>
      <Info info="Điều khoản dịch vụ" />
      <Info info="Quyền riêng tư" />
      <Info info="Giới thiệu về Google Play" />
      <Info info="Nhà phát triển" />
      <Info info="Google Store" />
      <Flag info="Hoa Kỳ (Tiếng Việt)" />
    </StyledInfos>
  )
}