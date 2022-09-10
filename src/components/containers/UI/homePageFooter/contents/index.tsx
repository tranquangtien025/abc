import { Content } from "./content"
import { ContentTitle } from "./contentTitle"
import { StyledContents } from "./styles"

export const Contents = () => {
  return (
    <StyledContents>
      <div>
        <ContentTitle title="Google Play" />
        <Content content="Play Pass" />
        <Content content="Play Points" />
        <Content content="Thẻ Google Play" />
        <Content content="Đổi phần thưởng" />
        <Content content="Chính sách hoàn tiền" />
      </div>
      <div>
      <ContentTitle title="Trẻ em và gia đình" />
      <Content content="Hướng dẫn dành cho cha mẹ" />
      <Content content="Chia sẻ với gia đình" />
      </div>
    </StyledContents>
  )
}