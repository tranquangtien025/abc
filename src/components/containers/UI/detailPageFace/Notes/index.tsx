import { StyledNote, StyledNoteLink, StyledNotes, StyledSymbol } from "./styles"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { MdWarningAmber } from "react-icons/md"

export const Notes = (props: any) => {
  return (
    <StyledNotes>
      {props.info &&
        <StyledNote>
          <StyledSymbol><HiOutlineInformationCircle /></StyledSymbol>
          {props.info}&nbsp;
          <StyledNoteLink href="https://support.google.com/googleplay/answer/10066529">Tìm hiểu thêm</StyledNoteLink>
        </StyledNote>
      }
      {props.warning &&
        <StyledNote>
          <StyledSymbol><MdWarningAmber /></StyledSymbol>
          <span>{props.warning}</span>
        </StyledNote>
      }
    </StyledNotes>
  )
}