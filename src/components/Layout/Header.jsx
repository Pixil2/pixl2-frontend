import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>PIXL</h1>
      <Link to="/profile">
        <p>Gallery</p>
      </Link>
    </header>
  );
}
