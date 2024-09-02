import React, { useEffect, useState } from 'react'
import axios from 'axios' ;
import { Link } from 'react-router-dom';
import { SweetAlert } from '../Components/SweetAlert';
import {useContext} from 'react';
import { GlobalContext } from '../App';


export const Books = () => {
  const [books,setBooks] = useState([]);
  const { sweetalert, increment } = useContext(GlobalContext);
  const [delbookID,setDelbookID] = useState(0);
  useEffect(()=>{
    const fetchAllBooks = async()=>{
      try {
        const res = await axios.get(" http://localhost:8800/books") ;
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllBooks();
  },[])

  const handleClick=(id) =>{
    increment();
    setDelbookID(id);
  }
  
  return (
    <div>
      <h1 className='BookShop'>Maries Book Shop</h1>
      <div className="books">
        {
        books.map(book=>(
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="{book.cover}" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span> &#8377;{book.price}</span>
            <Link className='updateLink' to={`/update/${book.id}`}>
            <button className="update" >
               Update
            </button>
            </Link>
            <button className='delete' onClick={()=>handleClick(book.id)}>
              Delete
            </button>
          </div>
        ))
        }
      </div>
      {sweetalert && <SweetAlert id={delbookID}/>} 
      
      <button className='addNewBook'>
        <Link to="/add" className='styleLink'>Add new book</Link>
      </button>
    </div>
  )
}
