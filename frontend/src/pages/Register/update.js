import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import './styles.css';
import { useHistory, useParams } from 'react-router-dom';

import Header from '../../components/Header';

export default function Update() {

    const { id } = useParams();

    const [person, setPerson] = useState({});

    useEffect(() => {
        api.get(`people/${id}`, {

        }).then(response => {
            setPerson(response.data);
        })
    }, [id]);

    const history = useHistory();
    
    async function handleUpdate(e) {
        e.preventDefault();

        try {
            await api.put(`people/${id}`, person)

            alert(`Pessoa editada com sucesso!`)

            history.push('/listagem');
        } catch (err) {
            alert('Erro na edição, tente novamente.')
        }
    }

    return (
        <div className="register-container" onSubmit={handleUpdate}>
            <Header />
            <form>
                <label>Nome:</label>
                <input 
                    type="text" 
                    value={person.name}
                    onChange={e => setPerson({
                        ...person,
                        name: e.target.value
                    })}
                />
        
                <label>Email:</label>
                <input 
                    type="email" 
                    value={person.email}
                    onChange={e => setPerson({
                        ...person,
                        email: e.target.value
                    })}
                />
        
                <label>Data de Nascimento:</label>
                <input 
                    type="date" 
                    value={person.birthdate}
                    onChange={e => setPerson({
                        ...person,
                        birthdate: e.target.value
                    })}
                />
        
                <div className="input-container">
                    <label>Cidade:</label>
                    <input 
                        className="input-city" 
                        type="text" 
                        value={person.city}
                        onChange={e => setPerson({
                            ...person,
                            city: e.target.value
                        })}
                    />
                </div>
        
                <div className="input-container2">
                    <label>Estado:</label>
                    <input 
                        className="input-uf" 
                        type="text" 
                        value={person.uf}
                        onChange={e => setPerson({
                            ...person,
                            uf: e.target.value
                        })}
                    />
                </div>
        
                <button className="submit-button" type="submit">Atualizar</button>
            </form>
        </div>
    );

}