import { Info } from "../../homePageBody/list/item/info/info"
import { StyledThumbnailInfo } from "../../homePageBody/list/item/styles"
import { Thumbnail } from "../../homePageBody/list/item/thumbnail"
import { DescriptionTitle } from "../mainContents/description/descriptionTitle"
import { StyledDiv3, StyledList, StyledSubContents, StyledSubContents2 } from "./styles"
import { useNavigate } from "react-router-dom"
import { Movie } from "../../../../../models/movie"

// type SubContentsProps = {
//   movies: Movie[]
//   id?: string
// }

export const SubContents = (props: any) => {
  // const { movies, id } = props
  const navigate = useNavigate()
  const list = props.movies.filter((item: Movie, index: number) => index < 4)
  
  return (
    <StyledSubContents>
      <div>
        <StyledSubContents2>
          <DescriptionTitle title="Most popular movies" />
          <StyledList>
            {list.map((movie: Movie) => {
              return <StyledDiv3 key={movie.id}>
                <StyledThumbnailInfo onClick={() => navigate(`/detail/${movie.id as string}`)}>
                  <Thumbnail thumbnail={movie.thumbnail} />
                  <Info
                    name={movie.name}
                    rating={movie.rating}
                    category={movie.category}
                    starRating={movie.starRating}
                    rent={movie.rent} />
                </StyledThumbnailInfo>
              </StyledDiv3>
            })}
          </StyledList>
        </StyledSubContents2>
      </div>
    </StyledSubContents>
  )
}