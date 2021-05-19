import React, { useEffect,useState } from 'react';
import axios from "axios";

 

function Movies(){

    //  axios film

    const [Movie,setMovie]= useState([])
    const getMovie=()=> {
        axios.get('http://localhost:3004/posts').then((response) => {
          
            setMovie( response.data);
            console.log("response:", response);
          });
    }
    useEffect(()=>{getMovie()},[])
  return(
    <div>


<ul>
          {Movie.map((el) => (
            <li>{el.Title}</li>
          ))}
        </ul>
    </div>
   )

 }

export default Movies