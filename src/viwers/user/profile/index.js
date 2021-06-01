import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Profile() {
  
  // antes era o redirect, na nova biblioteca é o useNavigate
  const navigate = useNavigate();

    return (
      <div className="user">
        <div>
          <p>Profile, clicando passa 123 como id de usuario teste</p>
          <button onClick={ () => navigate('/user/123') } >Usuário 123</button>
        </div>
      </div>
    );
  }
  export default Profile;
  