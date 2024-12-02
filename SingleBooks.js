import React, { useState } from 'react';

const SingleBook = ({ book, onBookSelect }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
    onBookSelect(book.asin);
  };

  return (
    <div
      className={`book-card ${selected ? 'selected' : ''}`}
      onClick={handleSelect}
    >
      <img src={book.img} alt={book.title} />
      <h4>{book.title}</h4>
    </div>
  );
};

export default SingleBook;
