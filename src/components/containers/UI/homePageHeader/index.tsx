import { useCallback, useEffect, useState } from "react"
import { Admin } from "./admin"
import { Category } from "./category"
import { GoogleLogo } from "./googleLogo"
import { Search } from "./search"
import { SearchBox } from "./searchBox"
import { StyledPageHeader } from "./styles"

export const HomePageHeader = (props: any) => {
  const [isDisplay, setIsDisplay] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const searchHandle = useCallback((searchKey: string) => {
      props.searchMovie(searchKey);
  }, [props])

  useEffect(() => {
    if (!isDisplay) {
      searchHandle("")
    } else {
      searchHandle(searchKey)
    }
  }, [isDisplay, searchKey, searchHandle])

  return (
    <StyledPageHeader>
      <GoogleLogo />
      <Category />
      { isDisplay ? <SearchBox handleSearch={(e: string) => setSearchKey(e)} /> : null }
      <Search onChangeStyle={() => setIsDisplay(!isDisplay)} />
      <Admin />
    </StyledPageHeader>
  )
}