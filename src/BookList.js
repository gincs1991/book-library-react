import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, loca } from '@tanstack/react-router';

import BookForm from './BookForm';

import './BookList.scss';

import bookPlaceholder from "./static/book-placeholder.png";


function BookList({ useSearch }) {
  const [books, setBooks] = useState([]);
  const search = useSearch();

  console.log(search);

  const fetchBooks = async () => {
    const response = await axios("//localhost:5000/books");
    setBooks(response.data.rows);
  }

  useEffect(() => {
    fetchBooks();
  }, [])

  useEffect(() => {
    console.log(search);
    getBooksByPage(search.page);
  }, [search]);

  const deleteBook = async (id) => {
    await axios.delete('//localhost:5000/books', { params: { id } });
    fetchBooks();
  }

  const getBooksByPage = async (pageNumber) => {
    const response = await axios("//localhost:5000/books", { params: { page: pageNumber } });
    setBooks(response.data.rows);
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
      <BookForm fetchBooks={fetchBooks} />
      <Link search={ { page: 1 } }>Page 1</Link>
      <Link search={ { page: 2 } }>Page 2</Link>
      <Link search={ { page: 3 } }>Page 3</Link>
    </div>
  );
}

export default BookList;