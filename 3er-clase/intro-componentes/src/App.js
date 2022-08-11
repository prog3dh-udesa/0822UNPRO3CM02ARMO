import React from 'react'
import Header from './components/Header';
import Card from './components/Card/Card';
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';
import Characters from './components/Characters/Characters';


function App() {
  const opciones = ['ADMIN', 'Charts', 'Pages', 'Tables', 'Paseo de perros']

  const tarjetas = [
    {
      title:'Products in Database',
      price: '135',
      icon: 'clipboard-list'
    },
    {
      title:'Amount in Products',
      price: '$645.634',
      icon: 'dollar-sign'
    },
    {
      title:'Users Quantity',
      price: '90',
      icon: 'user-check'
    },
  ]

  const categorias = ['1','2','3','4','5','6',]

  const personajes = [
    'ahsoka',
    'anakin',
    'batman',
    'capAmerica',
    'cell',
    'hulkSmall',
    'kyloRen',
    'luke',
    'obiWan',
    'strange',
    'superman',
    'vegetta',
    'yoda'
  ]

  return (
    <>
      <Header nombre={'Walter'} menu={opciones}/>
      <main>
        <h1>My app in React</h1>
        <section className="top-data">
          {tarjetas.map((tarjeta) => <Card info={tarjeta}/>)}
        </section>
        <h2>Categories in database</h2>
        <section className='general-data'>
          {categorias.map( (categoria) => <Category number={categoria} />)}
        </section>
        <h2>Personajes de películas</h2>
        <section className="card-container">
          {personajes.map((personaje) => <Characters  info={personaje} />)}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
