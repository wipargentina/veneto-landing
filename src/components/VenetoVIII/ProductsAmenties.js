import React from 'react';

export default function ProductsAmenities({ amenities }) {
  const data = amenities;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <span></span> {item.title}
        </li>
      ))}
    </ul>
  );
}
