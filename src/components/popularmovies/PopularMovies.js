import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

import { imageUrl, API_KEY, PopularMovies } from "../../url/Url";
import axios from "../../axios/Axios";
import { Link } from "react-router-dom";
import "./PopularMovies.css";
import { movieContext } from "../../App";

function Popularmovies({ url, title }) {
  const [popularmovies, setpopularMovies] = useState([]);
  const [movieurl, setmovieUrl] = useContext(movieContext);

  useEffect(() => {
    axios.get(url).then((value) => {
      setpopularMovies(value.data.results);
    });
  }, [url]);


  useEffect(() => {
    setmovieUrl(popularmovies);
  }, [popularmovies]);
  
  console.log(popularmovies);
  return (
    <div className="container-fluid mt-2">
      <h1 id='movie-main-title'>{title}</h1>
      <div id="popular-movies-div" className="row row-cols-4 g-2"> 
        {popularmovies.map((obj, index) => (
          <Link to={`/details/${index}`} id="link-id">
         
            <Card id="movie-card" className="col-md-12 float-left">
              <Card.Img src={`${imageUrl + obj.backdrop_path}`} />
           
              <Card.Body>
                <Card.Title id="movie-card-title">
                  {obj.title || obj.name}
                </Card.Title>
              </Card.Body>
            </Card> 
          </Link>
        ))}
    </div>
    </div>
  );
}

export default Popularmovies;
