import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Layout/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h4>Pixl description</h4>
        <Link>
          <button>Sign In with Github</button>
        </Link>
        <Link to="/canvas">
          <p>Continue as Guest</p>
        </Link>
      </main>
    </div>
  );
}
