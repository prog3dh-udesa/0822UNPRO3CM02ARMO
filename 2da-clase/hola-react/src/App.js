function App() {

  let nombre = prompt('Escribe tu nombre')
  let validacion = false
  let estudiantes = 'chicas y chicos en una variable let'
  let otraVariable = 'Algun valor random'

  let deportistas = ['Riquelme', 'Maradona', 'Messi']
  return (
    <div>
      <p>Hola {nombre}</p>
      <ul>
        {deportistas.map(elm => <li>Buen dia {elm}</li>)}
      </ul>
    </div>
  );
}

export default App;
