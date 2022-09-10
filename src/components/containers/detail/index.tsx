import { useEffect, useState } from "react"
import { Movie } from "../../../models/movie"
import { DetailPageBody } from "../UI/detailPageBody"
import { DetailPageFace } from "../UI/detailPageFace"
import { HomePageFooter } from "../UI/homePageFooter"
import { useNavigate, useLocation } from "react-router-dom"
import { getMovieDetail } from "../../../utils/axios"
import { StyledPageHeader } from "../UI/homePageHeader/styles"
import { GoogleLogo } from "../UI/homePageHeader/googleLogo"
import { Category } from "../UI/homePageHeader/category"

export const Detail = () => {
  const params = useLocation();
  const navigate = useNavigate();
  const id = params.pathname.split('/')[2]
  const [movieDetail, setMovieDetail] = useState<Movie>();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getMovieDetail(id)
        setMovieDetail(data)
      } catch (err) {
        navigate("/notFound")
      }
    }
    if (id) {
      getData()
    }
  }, [id, navigate])


  return (
    <div>
      {movieDetail &&
        (
          <div>
            <StyledPageHeader>
              <GoogleLogo />
              <Category />
            </StyledPageHeader>
            <DetailPageFace movieDetail={movieDetail} />
            <DetailPageBody movieDetail={movieDetail} />
          </div>
        )
      }
      <HomePageFooter />
    </div>
  )
}