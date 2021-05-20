import React, { useEffect,useState } from 'react';
import axios from "axios"
import {Button} from "react-bootstrap";


 

function Movies(){

    //  axios film

    const [Movie,setMovie]= useState([])
    const getMovie=()=> {
        axios.get('http://localhost:3004/posts').then((response) => {
          
            setMovie( response.data);
           
          });

    }
    useEffect(()=>{getMovie()},[])

    /*************delet   */
    // deletee(e,id) {
    //   axios.delete(`http://localhost:3004/posts/${id}`)
    //   .then(response => {
    //       console.log("response: hahaha", response);
    //     })
    //   .catch(err=> 
    //     console.log(err)
    //   );
    // } 
    /***********************- */

   const deleteRow=(id, e)=>{  

      axios.delete(`http://localhost:3004/posts/${id}`)  
        .then(response => {  
          console.log("response: hahaha", response);
        
      
          // const Movie = Movie.filter(el => el.id !== id);  
          // setMovie(Movie);  
        }) 
        .catch(err=> 
          console.log(err)
        );
      }
        
  return(
    <div>



          {Movie.map((el) => (
            <div>
            <ul>
            <li>{el.Title}</li>

            </ul> 
            <Button className="btn btn-danger"  onClick={(e) => deleteRow(el.id, e)}>Delete</Button>
</div>
            
          )
           
          )}
       
      
    </div>
   )

 }

export default Movies