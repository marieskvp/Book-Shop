import express from "express";
import mysql from "mysql" ;
import cors from 'cors' ;
const app = express();

const db = mysql.createConnection({
  host:"sample_host", // host is requied
  user:"sample_user",  // user name requied
  password:"sample_password", // password requied
  database:"sample_DBname" // Database name
})

app.use(express.json());
app.use(cors());

app.get('/books',(req,res)=>{
  const q='select * from books' ;
  db.query(q , (err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
  })
})

app.post('/books',(req,res)=>{
  const q = "insert into books(`title`,`desc`,`cover`,`price`) values (?)";
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price
  ];
  db.query(q,[values],(err,data)=>{
    if(err) return res.json(err);
    return res.json("Book has been created successfully.");
  })
})

app.put('/books/:id',(req,res)=>{
  const bookId  = req.params.id ;
  const q = " update books set `title`=? ,`desc`=?,`cover`=?,`price`=? where id=?" ;
  const values = [
    req.body.title,
    req.body.desc,
    req.body.cover,
    req.body.price
  ] ;
  db.query(q,[...values,bookId],(err,data)=>{
    if(err) return res.json(err) ;
    return res.json("Book has been updated successfully");
  })
})


app.delete('/books/:id',(req,res)=>{
  const bookId  = req.params.id ;
  const q = " delete from books where id=?"
  db.query(q,[bookId],(err,data)=>{
    if(err) return res.json(err) ;
    return res.json("Book has been deleted");
  })
})

app.listen(8800,()=>{
  console.log("Backend connected...")
})