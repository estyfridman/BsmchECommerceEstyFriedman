import React from 'react';

function StarRating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i}>
        {i < rating ? '★' : '☆'}
      </span>
    );
  }
  return <div>{stars}</div>;
}

export default StarRating;
