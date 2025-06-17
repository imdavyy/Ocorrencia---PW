import React, { useState, useEffect } from 'react';
import './Estilo.css';

function RegistrarOcorrencia() {
  const [formData, setFormData] = useState({
    aluno: '', professor: '', disciplina: '',
    data: '', motivo: '', turma: '', bimestre: '',
  });

  const [mensagem, setMensagem] = useState('');
  const [professorNome, setProfessorNome] = useState('');
  const [ocorrencias, setOcorrencias] = useState([]);

  useEffect(() => {
    const identificador = localStorage.getItem('professorIdentificador');
    if (identificador) {
      const parteLocal = identificador.split('@')[0];
      const primeiroNome = parteLocal.split(/[.\-_]/)[0];
      const nomeFormatado = primeiroNome.charAt(0).toUpperCase() + primeiroNome.slice(1).toLowerCase();
      setProfessorNome(nomeFormatado);
    }

    const dadosSalvos = localStorage.getItem('ocorrencias');
    if (dadosSalvos) {
      setOcorrencias(JSON.parse(dadosSalvos));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(v => v.trim() === '')) {
      setMensagem('Preencha todos os campos.');
      return;
    }

    const nova = { ...formData };
    const novas = [...ocorrencias, nova];
    setOcorrencias(novas);
    localStorage.setItem('ocorrencias', JSON.stringify(novas));
    setMensagem('Ocorrência registrada com sucesso!');
    setFormData({
      aluno: '', professor: '', disciplina: '',
      data: '', motivo: '', turma: '', bimestre: '',
    });
  };

  const handleExcluir = (index) => {
    const novas = ocorrencias.filter((_, i) => i !== index);
    setOcorrencias(novas);
    localStorage.setItem('ocorrencias', JSON.stringify(novas));
  };

  return (
    <div className="container">
      <div className="header">
        <img src="/INFORMATICA.png" alt="Logo do Curso" />
        <h2>Bem-vindo, {professorNome}!</h2>
      </div>

      <h3>Registrar Ocorrência</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" name="aluno" placeholder="Nome do aluno" value={formData.aluno} onChange={handleChange} required />
        <input type="text" name="professor" placeholder="Nome do professor" value={formData.professor} onChange={handleChange} required />
        <input type="text" name="disciplina" placeholder="Disciplina" value={formData.disciplina} onChange={handleChange} required />
        <input type="date" name="data" value={formData.data} onChange={handleChange} required />
        <select name="turma" value={formData.turma} onChange={handleChange} required>
          <option value="">Selecione a turma</option>
          <option value="1º ano Informática">1º ano Informática</option>
          <option value="2º ano Informática">2º ano Informática</option>
          <option value="3º ano Informática">3º ano Informática</option>
        </select>
        <select name="bimestre" value={formData.bimestre} onChange={handleChange} required>
          <option value="">Selecione o bimestre</option>
          <option value="1º bimestre">1º bimestre</option>
          <option value="2º bimestre">2º bimestre</option>
          <option value="3º bimestre">3º bimestre</option>
          <option value="4º bimestre">4º bimestre</option>
        </select>
        <textarea name="motivo" placeholder="Motivo" value={formData.motivo} onChange={handleChange} required></textarea>
        <button type="submit">Registrar</button>
      </form>

      {mensagem && <p style={{ color: 'green', marginTop: '1rem' }}>{mensagem}</p>}

      <div className="ocorrencias-list">
        <h3>Ocorrências Registradas</h3>
        {ocorrencias.length === 0 ? (
          <p>Nenhuma ocorrência registrada ainda.</p>
        ) : (
          <ul>
            {ocorrencias.map((o, i) => (
              <li key={i}>
                <strong>Aluno:</strong> {o.aluno}<br />
                <strong>Professor:</strong> {o.professor}<br />
                <strong>Disciplina:</strong> {o.disciplina}<br />
                  <strong>Data:</strong>{' '}
                {new Date(o.data).toLocaleDateString('pt-BR')}<br/>
                <strong>Turma:</strong> {o.turma}<br />
                <strong>Bimestre:</strong> {o.bimestre}<br />
                <strong>Motivo:</strong> {o.motivo}<br />
                <button onClick={() => handleExcluir(i)}>Excluir</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default RegistrarOcorrencia;
