import React, { useEffect } from "react";
import { fetchMovies } from "../api";

function GetAllMovie(props) {
  useEffect(() => {
    fetchMovies(props.movieName)
      .then((response) => {
        if (response.status === 200) {
          props.setMovies({ ...response.data });
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h1>GetAllMovie</h1>
    </div>
  );
}

export default GetAllMovie;
