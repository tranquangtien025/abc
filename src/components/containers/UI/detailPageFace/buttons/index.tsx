import { BsBookmarkPlusFill } from "react-icons/bs"
import { FiPlay } from "react-icons/fi"
import NumberFormat from "react-number-format"
import { StyledBookMark, StyledBookMark2, StyledBookMarkButton, StyledButton, StyledButton2, StyledButton4, StyledButton7, StyledButton8, StyledButton9, StyledButtons, StyledText1, StyledText2, StyledTrailer, StyledTrailer2, StyledTrailer3, StyledTrailer4 } from "./styles"

export const Buttons = (props: any) => {
  return (
    <StyledButtons>
      <StyledButton>
        <StyledButton2>
          <div>
            <StyledButton4>
              <div>
                <div>
                  <StyledButton7>
                    <StyledButton8>
                      <StyledText1>
                        <StyledText2>
                        </StyledText2>
                        Mua 4K: <NumberFormat value={props.price} thousandSeparator={true} suffix={' ₫'} displayType={'text'} />
                      </StyledText1>
                    </StyledButton8>
                  </StyledButton7>
                </div>
              </div>
              <div>
                <div>
                  <StyledButton7>
                    <StyledButton9>
                      <StyledButton8>
                        <StyledText1>
                          <span>
                            Thuê 4K: <NumberFormat value={props.rent} thousandSeparator={true} suffix={' ₫'} displayType={'text'} />
                          </span>
                        </StyledText1>
                      </StyledButton8>
                    </StyledButton9>
                  </StyledButton7>
                </div>
              </div>
            </StyledButton4>
          </div>
        </StyledButton2>
      </StyledButton>
      <StyledBookMark>
        <div>
          <div>
            <StyledBookMarkButton>
              <StyledBookMark2>
                <BsBookmarkPlusFill />
              </StyledBookMark2>
            </StyledBookMarkButton>
          </div>
        </div>
      </StyledBookMark>
      {props.trailer &&
        <StyledTrailer>
          <StyledTrailer2>
            <a style={{ textDecoration: 'none', 'color':'inherit' }} href={props.trailer}>
              <StyledTrailer3>
                <StyledTrailer4>
                  <FiPlay />
                </StyledTrailer4>
                Đoạn giới thiệu
              </StyledTrailer3>
            </a>
          </StyledTrailer2>
        </StyledTrailer>}
    </StyledButtons>
  )
}