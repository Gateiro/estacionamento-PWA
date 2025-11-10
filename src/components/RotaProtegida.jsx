import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase/config.js'; 

function RotaProtegida() {

  const [user, loading, error] = useAuthState(auth);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (user) {

    return <Outlet />;
  }

  return <Navigate to="/" replace />;
}

export default RotaProtegida;