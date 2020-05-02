import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from './services/firebase';
import GlobalStyle from './Styles/global';

import Header from './Components/Header';
import Home from './Pages/Home';

export default function App() {

  const [firebaseInicialized, setFirebaseInicialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(resultado => {
      //return the user
      setFirebaseInicialized(resultado);
    })
  }, [])

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
