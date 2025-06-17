import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Estilo.css';

function LoginProfessor() {
  const [formData, setFormData] = useState({ identificador: '', senha: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.identificador.trim() === '' || formData.senha.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    localStorage.setItem('professorIdentificador', formData.identificador);
    navigate('/registrar');
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-header">
          <img src="/INFORMATICA.png" alt="Logo do Curso" />
          <h2>Login do Professor</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="identificador"
            placeholder="E-mail ou Matrícula"
            value={formData.identificador}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginProfessor;
