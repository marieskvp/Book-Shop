import React, { useContext } from 'react'
import { GlobalContext } from '../App' 
import axios from 'axios' ;


export const SweetAlert = ({id}) => {
  const {increment} = useContext(GlobalContext) ;

  const handleDelete = async(id) =>{
    try {
      await axios.delete(`http://localhost:8800/books/${id}`) ;
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
    increment();
  }

  return (
    <div className='DeleteAlert'>
        <h3>Are you sure to delete this Book?</h3>
        <div>
        <button onClick={()=>handleDelete(id)} id='yesAlert'>
          Yes
        </button>
        <button onClick={()=>increment()} id='noAlert'>
          No
        </button>
        </div>
    </div>
  )
}
