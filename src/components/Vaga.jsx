import React from 'react';

/**
 * @param {object} props
 * @param {string} props.id - O identificador da vaga (ex: "A1").
 * @param {string} props.status - O status atual ("livre" ou "ocupada").
 * @param {function} props.onClick - Função a ser chamada quando a vaga é clicada.
 */
function Vaga({ id, status, onClick }) {

  
  const corStatus = status === 'livre' 
    ? 'btn-success text-success-content' 
    : 'btn-error text-error-content';

  return (
    <button
      onClick={onClick}
      className={`btn h-36 w-24 m-2 shadow-lg ${corStatus}`}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold text-2xl">{id}</span>
        <span className="capitalize text-sm">{status}</span>
      </div>
    </button>
  );
}

export default Vaga;