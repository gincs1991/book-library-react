import { useState } from 'react';

import './BookForm.scss';

function BookForm() {
  const [formData, setFormData] = useState({title: "", author: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Working!");
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
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookForm;