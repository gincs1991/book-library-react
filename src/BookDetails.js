import { useEffect, useState } from 'react';
import axios from 'axios';

import './BookDetails.scss';
import bookPlaceholder from "./static/book-placeholder.png";

function BookDetails({ useParams }) {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchBook() {
      const response = await axios(`//localhost:5000/books/${ id }`);
      setBook(response.data.data[0]);
    }
    fetchBook();
  }, [id])

  return (
    <div className="BookDetails">
      <p>Books!</p>
        <img src={bookPlaceholder} alt="book" />
        <h3>{book.title}</h3>
        <p>{book.author}</p>
    </div>
  );
}

export default BookDetails;