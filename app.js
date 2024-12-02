import React, { useState } from 'react';
import AllTheBooks from './AllTheBooks';
import CommentArea from './CommentArea';
import books from './books.json';

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div id="root">
      <div className="left-column">
        <AllTheBooks books={books} onBookSelect={setSelectedBook} />
      </div>
      <div className="right-column">
        <CommentArea selectedBook={selectedBook} />
      </div>
    </div>
  );
};

export default App;
