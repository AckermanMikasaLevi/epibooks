import React, { useEffect, useState } from 'react';

const CommentArea = ({ selectedBook }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedBook) {
      setLoading(true);
      fetch(`https://striveschool-api.herokuapp.com/api/books/${selectedBook}/comments`)
        .then(response => response.json())
        .then(data => {
          setComments(data);
          setLoading(false);
        });
    }
  }, [selectedBook]);

  if (!selectedBook) {
    return <div>Select a book to see comments</div>;
  }

  return (
    <div className="comment-area">
      {loading ? (
        <div>Loading...</div>
      ) : (
        comments.map(comment => <div key={comment._id}>{comment.comment}</div>)
      )}
    </div>
  );
};

export default CommentArea;
