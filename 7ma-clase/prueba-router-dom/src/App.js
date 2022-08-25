import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Contact from './screens/Contact/Contact'
import Details from './screens/Details/Details'
import NotFound from './screens/NotFound/NotFound'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/details/:id' component={Details} />
        <Route path='' component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
