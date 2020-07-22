import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from './services/firebase';
import './Styles/global.css';

import Header from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Cadastro from './Pages/Cadastro';

export default function App() {

  const [firebaseInicialized, setFirebaseInicialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(resultado => {
      //return the user
      setFirebaseInicialized(resultado);
    })
  }, [])

  return (
    firebaseInicialized !== false ? (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/criar-conta' component={Cadastro} />
        </Switch>
      </BrowserRouter>
    ) : (
        <h1>Carregando...</h1>
      )
  );
}
