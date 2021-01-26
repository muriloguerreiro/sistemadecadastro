import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

export default function Listing() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    api.get('people').then(response => {
      setPeople(response.data);
    })
  }, []);

  function formatDate(birthday) {
    const date = new Date(birthday);

    const birthdate = date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

    return birthdate;
  }

  function personLink(personId) {
    return `/cadastro/${personId}/`;
  }

  return (
    <div className="listing-container">
      <Header />
      <div className="people-container">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Data Nascimento</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Idade</th>
            </tr>
          </thead>
          
          <tbody>
            {people.map(person => (
              <tr key={person.id}>
                <td><Link style={{ color: 'inherit' }} to={personLink(person.id)}>{person.name}</Link></td>
                <td>{person.email}</td>
                <td>{formatDate(person.birthdate)}</td>
                <td>{person.city}</td>
                <td>{person.uf}</td>
                <td>{person.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}