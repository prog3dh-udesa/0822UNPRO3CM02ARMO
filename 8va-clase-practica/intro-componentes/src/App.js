import React from 'react'
import Header from './components/Header';
import Cards from './components/Cards/Cards';
import Categories from './components/Categories/Categories';
import Footer from './components/Footer/Footer';
import Characters from './components/Characters/Characters';
import SpecialButton from './components/SpecialButton/SpecialButton';
import Contador from './components/Contador/Contador';


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
      <SpecialButton />
      <main>
        <Cards info={tarjetas}/>
        <Categories info={categorias} />
        <Contador 
        valorInicial={7}
        valorRestar={5}
        valorSumar={5}
        />
       <Characters />
      </main>
      <Footer />
    </>
  );
}

export default App;
