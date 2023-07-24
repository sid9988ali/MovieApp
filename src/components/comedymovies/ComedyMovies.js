import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import axios from '../../axios/Axios'
import {imageUrl,API_KEY} from '../../url/Url'
function ComedyMovies() {
    const[comedymovies,setcomedyMovies]=useState([])
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`)
        .then((value)=>{
            setcomedyMovies(value.data.results)
        });
        console.log(comedymovies)
    },[])
  return (
 <div className="container-fluid mt-2">
    
     <div className='row row-cols-3 g-1'>{comedymovies.map((obj,index)=>(
        <Card>
            <Card.Img src={`${imageUrl+obj.backdrop_path}`}/>
            <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Title>{obj.name}</Card.Title>
            </Card.Body>
        </Card>
     ))} 



    </div>
    
    </div>
  )
}


export default ComedyMovies