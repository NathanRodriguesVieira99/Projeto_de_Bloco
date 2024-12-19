import React from 'react';
import './styles/global/global.scss';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
