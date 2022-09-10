import { StyledImage, StyledName, StyledPublish, StyledPublishInfo, StyledTitle } from "./styles"

export const Title = (props: any) => {
  return (
    <StyledTitle>
      <StyledImage src={props.thumbnail} />
      <div>
        <StyledName>
          <span>{props.name}</span>
        </StyledName>
        <StyledPublish>
          <StyledPublishInfo>
            {props.year} •&nbsp;
            <span>{`${props.duration} phút`}</span>
          </StyledPublishInfo>
        </StyledPublish>
      </div>
    </StyledTitle>
  )
}