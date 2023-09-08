import { useEffect, useState } from 'react';
import axios from 'axios';

import './BookList.scss';
import BookForm from './BookForm';
import bookPlaceholder from "./static/book-placeholder.png";
import { Link } from '@tanstack/react-router';

function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios("//localhost:5000/books");
    setBooks(response.data.data);
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  const deleteBook = async (id) => {
    await axios.delete('//localhost:5000/books', { params: { id } });
    fetchBooks();
  }

  return (
    <div className="BookList">
      <p>Books!</p>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <img src={bookPlaceholder} alt="book" />
            <Link to={`/book/${book.id}/view`}><h3>{book.title}</h3></Link>
            <p>{book.author}</p>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <BookForm />
    </div>
  );
}

export default BookList;