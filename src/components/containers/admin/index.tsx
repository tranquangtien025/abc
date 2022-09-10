import React, { ChangeEvent, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Movie } from "../../../models/movie";
import { getMovieDetail, postMovie, putMovie } from "../../../utils/axios";
import { Category } from "../UI/homePageHeader/category";
import { GoogleLogo } from "../UI/homePageHeader/googleLogo";
import { StyledPageHeader } from "../UI/homePageHeader/styles";
import { FormControl, GridDiv, SelectSpan, SelectSpanLine, TableTd, TableTdSearch, TotalTable } from "./styles";

const defaultData: Movie = {
  id: "",
  name: "",
  rating: "",
  category: "",
  starRating: 0.1,
  tomatometer: 1,
  isQualified: "",
  rent: 0,
  thumbnail: "",
  largeThumbnail: "",
  trailer: "",
  info: "",
  warning: "",
  description: "",
  duration: 0,
  year: 1900,
}

export const Admin = () => {
  const [select, setSelect] = useState("insert");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { register, formState: { errors }, handleSubmit } = useForm<Movie>();
  const { register: regiterSearchId, handleSubmit: handleSearchIdSubmit } = useForm();
  const [fields, setFields] = useState<Movie>(defaultData)

  const changeHandle = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault()
    setSelect(event.currentTarget.id)
  }

  const handleSearchIdChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  useEffect(() => {
    setFields(defaultData)
  }, [select, search])

  const onSubmitSearchId = async (search: FieldValues) => {
    try {
      const { data } = await getMovieDetail(search.id)
      setFields(data)
    } catch (err) {
      navigate("/notFound")
    }
  }

  const onSubmit = async (values: Movie): Promise<void> => {
    try {
      if (select === "insert") {

        await postMovie("/movies", {
          ...values
        })
      } else {
        await putMovie(fields.id, {
          ...fields
        })
      }
      navigate("/")
    } catch (err) {
      navigate("/errorHandle")
    }
  }

  const onChangeField = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFields({ ...fields, [event.target.name]: event.target.value })
  }

  return (
    <div>
      <StyledPageHeader>
        <GoogleLogo />
        <Category />
      </StyledPageHeader>

      <GridDiv>
        <div>
          <SelectSpan id="insert" onClick={changeHandle}>
            Insert Movie
            {select === "insert" && <SelectSpanLine />}
          </SelectSpan>
          <SelectSpan id="edit" onClick={changeHandle}>
            Edit Movie
            {select === "edit" && <SelectSpanLine />}
          </SelectSpan>
        </div>
        <div>
          {select === "edit" &&
            <FormControl onSubmit={handleSearchIdSubmit(onSubmitSearchId)}>
              <TotalTable>
                <tbody>
                  <tr>
                    <TableTdSearch>
                      <label >Moive ID:</label>
                    </TableTdSearch>
                    <td>
                      <input
                        type="text"
                        placeholder="Ex: 1, 2, 3, ..."
                        {...regiterSearchId("id", { required: true })}
                        value={search} onChange={(event) => handleSearchIdChange(event)} />
                    </td>
                    <TableTd>
                      <button type="submit">Search</button>
                    </TableTd>
                  </tr>
                </tbody>
              </TotalTable>
            </FormControl>
          }

          <FormControl onSubmit={handleSubmit(onSubmit)}>
            {select === "edit" &&
              <input type="text" {...register("id")} value={fields.id} style={{ "display": "none" }} />
            }
            <TotalTable>
              <tbody>
                <tr>
                  <TableTd>
                    <label >Name:</label>
                  </TableTd>
                  <td>
                    <input {...register("name", { required: true, maxLength: 100 })}
                      value={fields.name} onChange={(event) => onChangeField(event)} />
                  </td>
                  <TableTd>
                    <span>{errors.name && "Name is required"}</span>
                  </TableTd>
                </tr>
                <tr>
                  <TableTd>
                    <label>Rating:</label>
                  </TableTd>
                  <td>
                    <input {...register("rating", { required: true, maxLength: 10 })}
                      value={fields.rating} onChange={(event) => onChangeField(event)} />
                  </td>
                  <TableTd>
                    <span>{errors.rating && "Rating is required"}</span>
                  </TableTd>
                </tr>
                <tr>
                  <TableTd>
                    <label>Category:</label>
                  </TableTd>
                  <td>
                    <select
                      {...register("category")}
                      value={fields.category}
                      onChange={(event) => onChangeField(event)}>
                      <option value="Hành động và phiêu lưu">Hành động và phiêu lưu</option>
                      <option value="Hoạt hình">Hoạt hình</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <TableTd>
                    <label>StarRating:</label>
                  </TableTd>
                  <td>
                    <input {...register("starRating", { required: true, min: 0.1, max: 5.0 })} type="number"
                      value={fields.starRating} onChange={(event) => onChangeField(event)} />
                  </td>
                  <TableTd>
                    <span>{errors.starRating && "Star Rating is required"}</span>
                  </TableTd>
                </tr>
                <tr>
                  <TableTd>
                    <label>Price (₫):</label>
                  </TableTd>
                  <td>
                    <input {...register("price", { min: 0 })} type="number"
                      value={fields.price} onChange={(event) => onChangeField(event)} />
                  </td>
                </tr>
                <tr>
                  <TableTd>
                    <label>Tomatometer (%):</label>
                  </TableTd>
                  <td>
                    <input {...register("tomatometer", { min: 1, max: 100 })} type="number"
                      value={fields.tomatometer} onChange={(event) => onChangeField(event)} />
                  </td>
                </tr>
                <tr>
                  <TableTd>
                    <label>Is Qualified:</label>
                  </TableTd>
                  <td>
                    <select {...register("isQualified")}
                      value={fields.isQualified}
                      onChange={(event) => onChangeField(event)}>
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <TableTd>
                    <label>Rent (₫):</label>
                  </TableTd>
                  <td>
                    <input {...register("rent", { required: true, min: 0 })} type="number"
                      value={fields.rent} onChange={(event) => onChangeField(event)} />
                  </td>
                  <TableTd>
                    <span>{errors.rent && "Rent is required"}</span>
                  </TableTd>
                </tr>
                <tr>
                  <TableTd>
                    <label>Thumbnail:</label>
                  </TableTd>
                  <td>
                    <input {...register("thumbnail", { required: true, pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi })}
                      placeholder={"https://..."}
                      value={fields.thumbnail} onChange={(event) => onChangeField(event)} />
                  </td>
                  <TableTd>
                    <span>{errors.thumbnail && "Thumbnail is required"}</span>
                  </TableTd>
                </tr>
                <tr>
                  <TableTd>
                    <label>Large Thumbnail:</label>
                  </TableTd>
                  <td>
                    <input {...register("largeThumbnail", { required: true, pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi })}
                      placeholder={"https://..."}
                      value={fields.largeThumbnail} onChange={(event) => onChangeField(event)} />
                  </td>
                  <TableTd>
                    <span>{errors.largeThumbnail && "Large Thumbnail is required"}</span>
                  </TableTd>
                </tr>
                <tr>
                  <TableTd>
                    <label>Trailer:</label>
                  </TableTd>
                  <td>
                    <input {...register("trailer", { pattern: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi })}
                      placeholder={"https://..."}
                      value={fields.trailer} onChange={(event) => onChangeField(event)} />
                  </td>
                </tr>
                <tr>
                  <TableTd>
                    <label>Info:</label>
                  </TableTd>
                  <td>
                    <input {...register("info")}
                      value={fields.info} onChange={(event) => onChangeField(event)} />
                  </td>
                </tr>
                <tr>
                  <TableTd>
                    <label>Warning:</label>
                  </TableTd>
                  <td>
                    <input {...register("warning")}
                      value={fields.warning} onChange={(event) => onChangeField(event)} />
                  </td>
                </tr>
                <tr>
                  <TableTd>
                    <label>Description:</label>
                  </TableTd>
                  <td>
                    <input {...register("description", { required: true })}
                      value={fields.description} onChange={(event) => onChangeField(event)} />
                  </td>
                  <TableTd>
                    <span>{errors.description && "Description is required"}</span>
                  </TableTd>
                </tr>
                <tr>
                  <TableTd>
                    <label>Duration (minutes):</label>
                  </TableTd>
                  <td>
                    <input {...register("duration", { required: true, min: 0 })} type="number"
                      value={fields.duration} onChange={(event) => onChangeField(event)} />
                  </td>
                  <TableTd>
                    <span>{errors.duration && "Duration is required"}</span>
                  </TableTd>
                </tr>
                <tr>
                  <TableTd>
                    <label>Year:</label>
                  </TableTd>
                  <td>
                    <input {...register("year", { required: true, min: 1900 })} type="number" min={1900}
                      value={fields.year} onChange={(event) => onChangeField(event)} />
                  </td>
                  <TableTd>
                    <span>{errors.year && "Year is required"}</span>
                  </TableTd>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button type="submit">Submit</button>
                  </td>
                </tr>
              </tbody>
            </TotalTable>
          </FormControl>
        </div>
      </GridDiv>
    </div>
  );
};