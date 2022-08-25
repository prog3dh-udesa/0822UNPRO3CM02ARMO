import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './screens/Home/Home'
import Categories from './screens/Categories/Categories'
import Details from './screens/Details/Details'


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/categories'} component={Categories} />
        <Route path={'/details/:id'} component={Details} />
      </Switch>
    </>
  );
}

export default App;
