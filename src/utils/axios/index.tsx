import axios from 'axios'
import { Movie } from '../../models/movie'

const instance = axios.create({
  baseURL: "https://62e5f10dde23e2637924f2ba.mockapi.io/api/v1/",
  // timeout: 3000,
})

export const getMovies = (endpoint: string, config: any) => {
  return instance.get<Movie[]>(endpoint, config)
}

export const getMovieDetail = (id: string) => {
  return instance.get<Movie>(`/movies/${id}`)
}

export const postMovie = (endpoint: string, body: any) => {
  return instance.post<Movie>(endpoint, body)
}

export const putMovie = (id: string, body: any) => {
  return instance.put<Movie>(`/movies/${id}`, body)
}

export const deleteMovie = (id: string, config: any) => {
  return instance.delete(`/movies/${id}`, config)
}