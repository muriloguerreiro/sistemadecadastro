import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import './styles.css';

import Header from '../../components/Header';

export default function Dashboard() {
  const [cities, setCities] = useState([]);
  const [totalRegs, setTotalRegs] = useState(0);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(0);
  const [avgAge, setAvgAge] = useState(0);

  useEffect(() => {
    api.get('dashboard').then(response => {
      setTotalRegs(response.data[0]);
      setMinAge(response.data[1]);
      setMaxAge(response.data[2]);
      setAvgAge(response.data[3]);
      setCities(response.data[4]);
    })
  }, []);

  return (
    <div className="dashboard-container">
      <Header />
      <div className="info-container">
        <p>Núm. de cadastros: {totalRegs}</p>
        <p>Menor idade: {minAge}</p>
        <p>Maior idade: {maxAge}</p>
        <p>Média das idades: {avgAge}</p>
      </div>
      <div className="city-container">
        <h1 id="city-title">Cidades cadastradas</h1>
        <ul className="city-list">
          {cities.map(city => (
            <li key={city.city}><p>• {city.city} - {city.uf}</p></li>
          ))}
        </ul>
      </div>
    </div>
  );
}