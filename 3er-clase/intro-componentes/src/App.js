import React from 'react'
import Saludo from './components/Saludo/Saludo';
import Card from './components/Card/Card';
import Header from './components/Header';
function App() {
  const opciones = ['ADMIN', 'Charts', 'Pages', 'Tables', 'Paseo de perros']

  const tarjetas = [
    {
      title:'Prueba 1',
      price: '10',
      icon: 'clipboard-list'
    },
    {
      title:'Prueba 2',
      price: '20',
      icon: 'dollar-sign'
    },
    {
      title:'Prueba 3',
      price: '30',
      icon: 'user-check'
    },
  ]

  return (
    <>
      <Header nombre={'Ramiro'} menu={opciones} clase={'miOtraClase'}/>
      <main> 
        <section className="top-data">
          {tarjetas.map(tarjeta => <Card info={tarjeta}/>)}
        </section> 
      </main>
    </>
  );
}

export default App;
