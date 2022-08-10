import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../styles";
import { getMovies } from "../redux/features/movieSlice";

const Search = () => {
  const [name, setName] = useState("spider");
  const classes = useStyles();
  const {
    moviesList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getMovies(name));
  //   });

  return (
    <>
      <h2 className={classes.title}>Movie Search App</h2>
      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <TextField
          type="text"
          fullWidth
          value={name}
          sx={{ m: 1, width: "55ch" }}
          onChange={(e) => setName(e.target.value)}
          helperText={error}
        />
      </form>
    </>
  );
};

export default Search;
