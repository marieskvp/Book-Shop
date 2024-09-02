import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const Update = () => {
  const [book , setBook] = useState({
    title:"" ,
    desc: "" ,
    cover:"" ,
    price:null
  }) ;

  const navigate = useNavigate()
  const location = useLocation();
  const bookId = location.pathname.split("/")[2]
  // console.log(location.pathname.split("/")[2]);
  function handleChange(e){
    setBook(prev=>(
      {...prev, [e.target.name]:e.target.value}
    ))
  }

  const handleClick = async(e) =>{
    e.preventDefault() ;
    try {
      await axios.put("http://localhost:8800/books/"+bookId,book) ;
      navigate("/");
    } catch (error) {
      console.log(error)
    }

  }
  return (
     <div className="form">
        <h1>Update the Book</h1>
        <input type="text" name="title" id="" placeholder='title' onChange={handleChange}/>
        <input type="text" name="desc" id="" placeholder='description' onChange={handleChange} />
        <input type="number" name="price" id="" placeholder='price' onChange={handleChange} />
        <input type="text" name="cover" id="" placeholder='cover' onChange={handleChange} />
        <button onClick={handleClick} className='formButton'>Update</button>
     </div>
  )
}
