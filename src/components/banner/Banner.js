

import React, { useEffect, useState } from "react";
import axios from '../../axios/Axios'
import './Banner.css'
import { imageUrl,API_KEY } from "../../url/Url";

const Banner=()=>{
 
const [slide,setslide]=useState([])
useEffect(()=>{
axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
.then((value)=>{
    setslide(value.data.results[Math.floor(Math.random()*value.data.results.length -1)])
})
},[]) 
    
    return(
    <div className="container-fluid mt-1"> 
      <div id="banner-div" style={{backgroundImage:`url(${imageUrl+slide.backdrop_path})`}}>
      <div><h1>{slide.name || slide.title}</h1>
      <div><p >{slide.overview}</p></div>
      </div>
      </div>

</div>

 );

}
export default Banner;