import React from 'react';
import { Outlet } from 'react-router-dom';
import ThemeToggle from './components/ThemeToggle.jsx';

function App() {
  return (
    <>
      <ThemeToggle />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;