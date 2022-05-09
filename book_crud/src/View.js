import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { AiFillDelete } from "react-icons/ai";
export default function View({books,delete_record}) {
  return (
    <div>
    <table className="table table-hover">
  <thead>
    <tr>
      <th >#ISBN</th>
      <th >Title</th>
      <th >Author</th>
      <th >Delete</th>
    </tr>
  </thead>
  <tbody>
{/* <tr>
  <td>Harry Potter</td>
  <td>Abdullah </td>
  <td>3123213312</td>
</tr> */}
{books.map(book=>(
            <tr key={book.isbn}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td className='delete-btn' onClick={()=>delete_record(book.isbn)}><AiFillDelete/></td>
            </tr>
        ))}
  </tbody>
  </table>
    
    </div>
  )
}
