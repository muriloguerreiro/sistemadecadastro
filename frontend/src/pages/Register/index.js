import React, { useState } from 'react';

import api from '../../services/api';
import './styles.css';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();
  
  async function handleRegister(e) {
    e.preventDefault();

    const data = {name,email,birthdate,city,uf};

    try {
      await api.post('people', data);

      alert(`Pessoa cadastrada com sucesso!`);
      history.push('/listagem');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register-container" onSubmit={handleRegister}>
      <Header />
      <form>
        <label>Nome:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>

        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>

        <label>Data de Nascimento:</label>
        <input type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)}/>

        <div className="input-container">
          <label>Cidade:</label>
          <input className="input-city" type="text" value={city} onChange={e => setCity(e.target.value)}/>
        </div>

        <div className="input-container2">
          <label>Estado:</label>
          <input className="input-uf" type="text" value={uf} onChange={e => setUf(e.target.value)}/>
        </div>

        <button className="submit-button" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}