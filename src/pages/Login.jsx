import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../firebase/config.js"; 

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(""); 

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    setErro(""); 

    if (!email || !senha) {
      setErro("Por favor, preencha o e-mail e a senha.");
      return;
    }

    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Login feito com sucesso:", userCredential.user.email);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Erro no login:", error.code);
        if (error.code === 'auth/invalid-credential') {
          setErro("E-mail ou senha inválidos.");
        } else {
          setErro("Ocorreu um erro ao tentar fazer login.");
        }
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login</h1>
          <p className="py-6">Acesse o painel de controlo do estacionamento.</p>
        </div>

        <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>

            <div className="form-control">
              <label className="label">
                <span className="label-text">E-mail</span>
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Senha</span>
              </label>
              <input
                type="password"
                placeholder="******"
                className="input input-bordered"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>

            {erro && (
              <div role="alert" className="alert alert-error text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{erro}</span>
              </div>
            )}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;