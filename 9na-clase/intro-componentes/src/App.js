import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer/Footer';


import {Route, Switch} from 'react-router-dom'
import Home from './screens/Home/Home'


function App() {

  const opciones = ['ADMIN', 'Charts', 'Pages', 'Tables', 'Paseo de perros']

  return (
    <>
      <Header nombre={'Walter'} menu={opciones}/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
