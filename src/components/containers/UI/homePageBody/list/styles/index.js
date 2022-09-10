import styled from "styled-components";

export const StyledList = styled.div`
  position: relative;
  padding: 8px 0 8px 40px;
  /* display: flex;
  gap: var(--gap-width);//16px
  padding: calc(var(--gap-width)/2) 0;
  scroll-snap-type: unset;
  overflow-x: scroll; */
  display: grid;
  grid-template-rows: 128px 128px 128px;
  grid-template-columns: auto auto auto;
  grid-auto-flow: column;
  `