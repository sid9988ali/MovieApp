import React, { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { movieContext, showMoviesContext } from '../../App';

import {imageUrl} from '../../url/Url';

import './MovieDetails.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MovieDetails() {
    const{id}=useParams()
    const[details,setDetails]=useContext(movieContext)
    const Detaildata=details[id]

    const[showDetails,setShowDetails]=useContext(showMoviesContext)
    useEffect(()=>{
      setShowDetails(false)
    },[showDetails])

    const[poster,setPoster]=useState(false)

  return (
     <div className='container-fluid'>
    
    <div className='movie-details-div'>
        {Detaildata &&
        <>
       
        </>
        }
    </div>

    <div  className="row row-cols-3 g-2 mt-2">
       
    <Card  className="col-md-6 float-left">
     
              <Card.Img id='movie-details-card-image'src={imageUrl+Detaildata.backdrop_path} />
           
              <Card.Body>
                <Card.Title > </Card.Title>
                <Button variant="primary" id='poster-button' onClick={()=>setPoster(!poster)}>View/Hide Full Size Poster</Button>
              </Card.Body>
              
            </Card>
            
            <div className='container-fluid' id='movie-details-div'><h2 id='movie-details-h'>{Detaildata.title || Detaildata.name}</h2> 
            <div><p>Country Origin:{Detaildata.release_date || Detaildata.origin_country}</p></div>
            <div><p>Released On:{Detaildata.release_date || Detaildata.first_air_date}</p></div>
            <div><p id='movie-overview'>Overview:<br/>{Detaildata.overview}</p></div>
            <div><p>Popularity:{Detaildata.popularity}</p></div>
            <div><p>Vote :{Detaildata.vote_average}</p></div>
            
            </div>
            </div>
    {poster? <div className='container-fluid'><img id='movie-poster-img' src={imageUrl+Detaildata.poster_path}></img></div>:null}

     </div>
  )
}

export default MovieDetails
