import { useState } from 'react';
import axios from 'axios';

import './BookForm.scss';

function BookForm({ fetchBooks }) {
  const [formData, setFormData] = useState({ title: "", author: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async () => {
    await axios.post('//localhost:5000/books', { title: formData.title, author: formData.author });
    fetchBooks();
  };

  return (
    <div className="BookForm">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} />
        <br /></label>
        <label>
          Author:
          <input type="text" name="author" id="author" value={formData.author} onChange={handleChange}/>
        <br /></label>
          <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default BookForm;