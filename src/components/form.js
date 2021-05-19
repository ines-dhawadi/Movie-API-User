import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";



function Cont(){

    const[input,setInput]=useState(
      {Title :"",
      Desc:"",
      Lang:"",
      Img :""

     }
    )
   const handleChange=(e)=>{
const {name,value}= e.target;
setInput(
  {  ...input,
    [name]:value
});

   }
//*************add to file json */
const handleSubmit=(e)=>{
e.preventDefault()
console.log('input',input)

axios.post('http://localhost:3004/posts',input).then((response)=> console.log(response))
.catch((error)=> console.log('error'))


}


  return(
    <div>


<div>

<Form onSubmit={handleSubmit} className="col-md-4">

<Form.Group controlId="formGroupPassword">
    <Form.Label>Title</Form.Label>
    <Form.Control  onChange={handleChange}  value={input.Title} name="Title"  type="t" placeholder="Password" />
    </Form.Group>


  <Form.Group controlId="formGroupEmail">
    <Form.Label>Desc</Form.Label>
    <Form.Control onChange={handleChange} value={input.Desc} name="Desc" type="email" placeholder="Enter email" />
  </Form.Group>


  <Form.Group controlId="formGroupPassword">
    <Form.Label>Lang</Form.Label>
    <Form.Control  onChange={handleChange}  value={input.Lang} name="Lang"  type="password" placeholder="Password" />
  </Form.Group>
  <Button type="submit">submit</Button>
</Form>


</div>

    </div>
   )

 }

export default Cont