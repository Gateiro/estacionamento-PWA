import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config.js';

function Header() {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {

        navigate('/');
      })
      .catch((error) => {
        console.error("Erro ao fazer logout:", error);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-lg px-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">PWA Estacionamento</a>
      </div>

      <div className="flex-none gap-2">
        {/* Mostrar o e-mail do utilizador se ele estiver carregado */}
        {user && (
          <span className="text-sm hidden sm:inline">
            Logado como: <strong>{user.email}</strong>
          </span>
        )}

        {/* Botão de Sair */}
        <button onClick={handleLogout} className="btn btn-outline btn-error btn-sm">
          Sair
        </button>
      </div>
    </div>
  );
}

export default Header;