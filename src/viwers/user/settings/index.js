import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './style.css';

function Settings() {
    // Hooks é lindo olha a facilidade em pegar um parâmetro da url depois da barra
    const { id } = useParams();

    // antes era o redirect, na nova biblioteca é o useNavigate
    const navigate = useNavigate();

    return (
      <div className="settings">
        <div>
          <h1>Configurações, usuário Id:  { id }</h1>

          {/* // Navegando nas rotas com o useNavigate */}
          <button onClick={ () => navigate('/') } >Rota Inicial</button>
        </div>
      </div>
    );
  }
  export default Settings;
  