import React from 'react';
import Router from './Router'
import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
};

export default App;