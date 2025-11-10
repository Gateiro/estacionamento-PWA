import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Controle de Estacionamento</h1>
            <p className="py-6">Por favor, faça o login para continuar.</p>
            <Link to="/home" className="btn btn-primary">
              Acessar (Temporário)
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Login;