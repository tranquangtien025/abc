import { useEffect, useState } from "react"
import { Admin } from "./admin"
import { Category } from "./category"
import { GoogleLogo } from "./googleLogo"
import { Search } from "./search"
import { SearchBox } from "./searchBox"
import { StyledPageHeader } from "./styles"

export const HomePageHeader = (props: any) => {
  const [isDisplay, setIsDisplay] = useState(false);
  const search = (searchKey: String) => {
    isDisplay === true && props.searchMovie(searchKey);
    isDisplay === false && props.searchMovie("")
  }

  useEffect(() => {
    search("")
  }, [isDisplay])

  return (
    <StyledPageHeader>
      <GoogleLogo />
      <Category />
      { isDisplay ? <SearchBox handleSearch={search} /> : null }
      <Search onChangeStyle={() => setIsDisplay(!isDisplay)} />
      <Admin />
    </StyledPageHeader>
  )
}