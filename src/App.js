import React from 'react';
import Cabecera from './component/Cabecera/Cabecera';
import Menu from './component/Menu/Menu';
import LoginForm from './component/LoginForm/LoginForm';
import './App.css';

const menuOpt = [
  {nombre:"Home"}, 
  {nombre:"Login"},
  {nombre:"Details"}
];

function App() {
  return (
    <div className="App">
        <Cabecera />
        <LoginForm />
        <Menu options={menuOpt}/>
    </div>
  );
}

export default App;
