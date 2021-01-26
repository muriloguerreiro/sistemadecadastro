import React from 'react';

import { Link } from 'react-router-dom';

export default function Header() {
    return (    
        <header>
            <h1 id="header-title">Sistema de Cadastro</h1>
            <Link className="header-button" to="/dashboard">Dashboard</Link>
            <Link className="header-button" to="/cadastro">Cadastro</Link>
            <Link className="header-button" to="/listagem">Listagem</Link>
        </header>
    );
}