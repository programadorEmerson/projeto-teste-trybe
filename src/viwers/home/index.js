import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';
import './style.css';

function Home() {
  
    // antes era o redirect, na nova biblioteca é o useNavigate
    const navigate = useNavigate();

    return (
      <div className="home">
        <div><p>Hello World</p>
          <button onClick={ () => navigate('/user') } >Usuário</button>
        </div>
      </div>
    );
  }
  export default Home;
  