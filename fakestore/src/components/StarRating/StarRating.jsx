import React from 'react';
import './StarRating.css';

function StarRating({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className='star'>
        {i < rating ? '★' : '☆'}
      </span>
    );
  }
  return <div>{stars}</div>;
}

export default StarRating;
