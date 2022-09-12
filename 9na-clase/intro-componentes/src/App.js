import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer/Footer';


import {Route, Switch} from 'react-router-dom'
import Home from './screens/Home/Home'
import Favoritos from './screens/Favoritos/Favoritos';


function App() {

  const opciones = ['ADMIN', 'Charts', 'Pages', 'Tables', 'Paseo de perros']

  return (
    <>
      <Header nombre={'Walter'} menu={opciones}/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/favoritos' component={Favoritos}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
