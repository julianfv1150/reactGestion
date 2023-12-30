import React from 'react';
import './App.css';
import Cabecera from './component/Cabecera/Cabecera';
import LoginForm from './component/LoginForm/LoginForm';
import Footer from './component/Footer/Footer'

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
        <Footer />
    </div>
  );
}

export default App;
