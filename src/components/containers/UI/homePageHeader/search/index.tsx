import { GoSearch } from "react-icons/go"
import { StyledSearch } from "./styles"

export const Search = (props: any) => {

  const displaySearchBox = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.onChangeStyle();
  }

  return (
    <StyledSearch onClick={displaySearchBox}>
      <GoSearch />
    </StyledSearch>
  )
}