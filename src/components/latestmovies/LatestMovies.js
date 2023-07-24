import { useEffect, useState } from "react";
import {Card} from "react-bootstrap";
import {imageUrl,API_KEY} from '../../url/Url'
import axios from '../../axios/Axios'
import './LatestMovies.css'
function LatestMovies() {
  const [latestmovies, setlatestMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
      )
      .then((value) => {
        setlatestMovies(value.data.results);
      });
  }, []);

  return (
    <div className="container-fluid">
      hello there i am latest movies component.!
      <div className="row row-cols-3">
        {latestmovies.map((obj, index) => (
          <Card id='latest-movie-card'>
            <Card.Img src={`${imageUrl + obj.backdrop_path}`}></Card.Img>
            <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      </div>
  );
}
export default LatestMovies;
