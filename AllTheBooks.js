import React, { useState } from 'react';
import SingleBook from './SingleBook';

const AllTheBooks = ({ books, onBookSelect }) => {
  const [query, setQuery] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search books..."
        className="search-input"
      />
      {filteredBooks.map(book => (
        <SingleBook key={book.asin} book={book} onBookSelect={onBookSelect} />
      ))}
    </div>
  );
};

export default AllTheBooks;
