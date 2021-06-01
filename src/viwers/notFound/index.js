import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageNotFound from '../../images/notFound.png'
import './style.css';

function NotFound() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregando();
  }, []);

  const carregando = (parametro) => {
    setLoading(false)
  };

  return (
    <div className="notFound">
      { loading ? <h1> Carregando...</h1>
        : <div>
          <img className="imagNotFound" src={PageNotFound} alt=""></img>
       </div>
      }
    </div>
  );
}

export default NotFound;
