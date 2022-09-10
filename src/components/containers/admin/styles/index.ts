import styled from 'styled-components';

export const GridDiv = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: 30% auto;
`

export const SelectSpan = styled.span`
  border-radius: 8px;
  cursor: pointer;
  font: inherit;
  display: block;
  width: 90px;
  padding: 1.15rem;
  &:hover {
    background-color: buttonface;
  }
`
export const SelectSpanLine = styled.span`
  display: flex-end;
  font: inherit;
  display: block;
  width: 100px;
  border-bottom: 6px solid #ccc;
  border-radius: 99px;
  margin: 10px -3px;
`

export const FormControl = styled.form`
  /* margin: 2rem auto; */
  width: 100%;
  max-width: 100rem;

  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    width: 400px;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }

  & span {
    color: red;
  }

  & select {
    font: inherit;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & select:focus {
    outline: none;
    border-color: #4f005f;
  }

  & button {
    border: 1px solid black;
    background:  '#ffd7d7';
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & button:hover {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

export const TotalTable = styled.table`
  margin: 0;
  padding: 0;
  border-collapse: separate;
  border-spacing: 10px 0;
`

export const TableTd = styled.td`
  position: relative;
  top: -5px;
`

export const TableTdSearch = styled.td`
  position: relative;
  top: -5px;
  width: 147px;
`