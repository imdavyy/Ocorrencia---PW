import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1> Sistema de Ocorrências</h1>
      <nav>
        <Link to="/login">Login do Professor</Link> |{' '}
        <Link to="/registrar">Registrar Ocorrência</Link>
      </nav>
    </div>
  );
}

export default Home;
