import React, { useState, useEffect } from 'react';
import { ref, onValue, set } from 'firebase/database';
import { database } from '../firebase/config.js';
import Vaga from '../components/Vaga.jsx';

import Header from '../components/Header.jsx'; 

function Home() {
  const [vagas, setVagas] = useState({});

  useEffect(() => {
    const vagasRef = ref(database, 'vagas/');
    const unsubscribe = onValue(vagasRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setVagas(data);
      } else {
        setVagas({});
      }
    });
    return () => unsubscribe();
  }, []);

  const handleVagaClick = (id) => {
    const statusAtual = vagas[id].status;
    const novoStatus = statusAtual === 'livre' ? 'ocupada' : 'livre';
    const vagaRef = ref(database, `vagas/${id}`);
    set(vagaRef, { status: novoStatus });
  };

  return (
    <div>
      <Header />

      <div className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-6 mt-4">Controle de Vagas</h1>

        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(vagas).length > 0 ? (
            Object.keys(vagas).map((id) => (
              <Vaga
                key={id}
                id={id}
                status={vagas[id].status}
                onClick={() => handleVagaClick(id)}
              />
            ))
          ) : (
            <p>Ainda não há vagas registadas no banco de dados.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;