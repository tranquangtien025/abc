import { useEffect, useState } from "react"
import { Movie } from "../../../../models/movie"
import { getMovies } from "../../../../utils/axios"
import { MainContents } from "./mainContents"
import { StyledDetail, StyledDetailWrap } from "./styles"
import { SubContents } from "./subContents"

export const DetailPageBody = (props: any) => {
  const [moviesList, setMoviesList] = useState<Movie[]>([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const { data } = await getMovies("/movies", { param: { page: 1, pageSize: 10 } })
      setMoviesList(data)
    } catch (err) {
      setMoviesList([])
    }
  }

  const filteredMoviesList = moviesList.filter((movie) => {
    return (movie.category.toString() === props.movieDetail.category && movie.id.toString() !== props.movieDetail.id)
  })

  return (
    <StyledDetailWrap>
      <StyledDetail>
        <MainContents movieDetail={props.movieDetail} />
        <SubContents movies={filteredMoviesList} />
      </StyledDetail>
    </StyledDetailWrap>
  )
}