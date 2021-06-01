import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './style.css';

function NomeFunction() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregamentoInicial();
  }, []);

  const carregamentoInicial = (parametro) => {
    setLoading(false)
  };

  const itensDoMenu = [
    {
      nome: "COMO FUNCIONA",
      icone:<i class="far fa-list-alt"></i>,
      rota: "/"
    },
    {
      nome: "CADASTRAR CLIENTE",
      icone: <i class="fas fa-user-shield"></i>,
      rota: "/"
    },
    {
      nome: "LISTAR CLIENTE",
      icone: <i class="fas fa-shopping-cart"></i>,
      rota: "/"
    },
    {
      nome: "CONTATO",
      icone: <i class="fas fa-envelope"></i>,
      rota: "/"
    },
    {
      nome: "LOGIN",
      icone: <i class="fas fa-user"></i>,
      rota: "/"
    },
  ];

  function clickMenu() {
    let menu = document.querySelector(".barraOculta");
    try {
      if (menu && menu.classList.contains("barraOculta")) {
        menu.classList.remove("barraOculta");
        menu.classList.add("barraOcultaShow");
      } else {
        menu = document.querySelector(".barraOcultaShow");
        menu.classList.remove("barraOcultaShow");
        menu.classList.add("barraOculta");
      }
    } catch (error) {
      let menu = document.querySelector(".barraInvisivel");
      menu.classList.remove("barraInvisivel");
      menu.classList.add("barraOcultaShow");
    }
  }

  return (
    <>
      { loading ? <h1> Carregando </h1>
        : 
        <section className="navbar">
          <section className="barraInvisivel">
            {
              itensDoMenu.map((item) => (
                <section 
                  onClick={ () => navigate(item.rota) } 
                  className="itemDoMenu"
                >                  
                  <span>{item.icone}{item.nome}</span>
                </section>
              ))
            }
          </section>
          <section className="barraVisivel"> 

            <div className="menu">
              <i onClick={clickMenu} class="fas fa-bars"/>
              <img className="logotipo" src={Logo} alt="Logo Eu Dou Menos"/>
            </div>
                    
            <span className="centerNavbar"><i class="fas fa-list"></i>CADASTRO DE CLIENTES</span>
            <span className="saldoRestante"><i class="fas fa-comment"></i>MENSAGENS</span>
          </section>
        </section>
      }
      <Outlet />
    </>
  );
}

export default NomeFunction;
