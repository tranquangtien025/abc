import { All } from "./all"
import { List } from "./list"
import { Title } from "./title"

export const HomePageBody = (props: any) => {
  return (
    <div>
      <Title />
      <All />
      <List movies={props.movies} />
    </div>
  )
}