import React from "react"
import { GoSearch } from "react-icons/go"
import { StyledDiv2, StyledDiv3, StyledInput1, StyledLabel1, StyledSearchBox, StyledSpan1 } from "./styles"

export const SearchBox = (props: any) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.handleSearch(event.target.value);
  }

  return (
    <StyledSearchBox>
      <StyledDiv2>
        <div>
          <StyledLabel1>
              <StyledDiv3>
                <StyledSpan1>
                  <GoSearch />
                </StyledSpan1>
              </StyledDiv3>
              <StyledInput1 
              placeholder="Tìm kiếm phim" 
              type="text"
              onChange={handleChange} />
          </StyledLabel1>
        </div>
      </StyledDiv2>
    </StyledSearchBox>
  )
}