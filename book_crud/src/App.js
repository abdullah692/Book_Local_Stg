import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import View from './View';

function App() {

   //Deleting the record
   const delete_record=((isbn)=>{
    console.log(isbn);
    const filter_books=books.filter((value,index)=>{
      console.log(value.isbn)
      return value.isbn !==isbn

    })
    setBooks(filter_books)
  })
  //getting localstorage data

  const localstg = () => {
    const value = localStorage.getItem('books')
    
    if (value) {
      console.log(value);
      return JSON.parse(value)
      
    }
    else {
      return [];
    }
  }

  const [books, setBooks] = useState(localstg());
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');


 
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      title,
      author,
      isbn
    }

    setBooks([...books, data])

    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  //saving data to local storage

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", fontFamily: "revert" }}>Books Application</h1>
      <p style={{ textAlign: "center", marginTop: "20px", fontSize: "25px" }}>Application to add the details about the books</p>

      <div className='container'>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <div className='enter_books'>
            <label >Title:</label>
            <input type="text" className='input_field' required onChange={(e) => setTitle(e.target.value)}
              value={title} placeholder="Enter Title of Book"/>
            <br></br>
            <label >Author:</label>
            <input type="text" className='input_field' required onChange={(e) => setAuthor(e.target.value)}
              value={author} placeholder="Enter Author Name"/>
            <br></br>
            <label>ISBN#:</label>
            <input type="text" className='input_field' required onChange={(e) => setIsbn(e.target.value)}
              value={isbn} placeholder="Enter ISBN" maxLength={6}/>
            <br></br>
            <button type='submit' className='submit'>INSERT</button>
          </div>
        </form>
        <div className='ViewBooks'>
          {
            books.length >0 && 
            <div class="table-responsive">
              <View books={books} delete_record={delete_record}/>
              </div>
          }
          {books.length < 1 && <div>No book is added yet</div>}
        </div>
      </div>



    </div>
  );
}

export default App;
