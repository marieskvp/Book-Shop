import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Add = () => {
  const [book , setBook] = useState({
    title:"" ,
    desc: "" ,
    cover:"" ,
    price:null
  }) ;

  const navigate = useNavigate()
  function handleChange(e){
    setBook(prev=>(
      {...prev, [e.target.name]:e.target.value}
    ))
  }

  const handleClick = async(e) =>{
    e.preventDefault() ;
    try {
      await axios.post("http://localhost:8800/books",book) ;
      navigate("/");
    } catch (error) {
      console.log(error)
    }

  }
  return (
     <div className="form">
        <h1>Add new Book</h1>
        <input type="text" name="title" id="" placeholder='title' onChange={handleChange}/>
        <input type="text" name="desc" id="" placeholder='description' onChange={handleChange} />
        <input type="number" name="price" id="" placeholder='price' onChange={handleChange} />
        <input type="text" name="cover" id="" placeholder='cover' onChange={handleChange} />
        <button onClick={handleClick} className='formButton'>Add</button>
     </div>
  )
}
