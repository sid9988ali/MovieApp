import React,{createContext,useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./components/banner/Banner.css";
import Topbar from "./components/topbar/Tobbar";
import Banner from "./components/banner/Banner";
import Popularmovies from "./components/popularmovies/PopularMovies";
import { PopularMovies,LatestMovies,ComedyMovies } from "./url/Url";
import MovieDetails from "./components/movie/MovieDetails";
import Home from './components/home/Home';

const movieContext=createContext()
const showMoviesContext=createContext()

function App() {
  const [movie,setMovie]=useState([])
  const[showDetails,setShowDetails]=useState(true);
  
  return (
    <div className="App">
      <showMoviesContext.Provider value={[showDetails,setShowDetails]}>
      <movieContext.Provider value={[movie,setMovie]}>
      <Router>
        <Topbar/>
        {showDetails && true ?  <Banner/> :null}
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
    <Route path="/details/:id" element={<MovieDetails/>}></Route>
    <Route path='/popularmovies' element={<Popularmovies url={PopularMovies} title='Popular Movies'  />}></Route>
    <Route path='/comedymovies'  element={<Popularmovies url={ComedyMovies}  title='Comedy Movies' />}></Route>
    <Route path='/latestmovies'  element={<Popularmovies url={LatestMovies}  title='Latest Movies' />}></Route>
        </Routes>
      </Router>
      </movieContext.Provider>
      </showMoviesContext.Provider>
    </div>
  );
}

export default App;
export {movieContext,showMoviesContext};
