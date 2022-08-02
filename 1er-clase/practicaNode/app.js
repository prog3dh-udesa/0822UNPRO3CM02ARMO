console.log('hola mundo')

let estudiantes=[
{
    nombre:'juan',
    edad:15
  },{
    nombre:'pedro',
    edad:19
  },{
    nombre:'camila',
    edad:24
  },
] 

let arrayEstudiantes = estudiantes.map((elm)=>{
    elm.apellido = 'Rodriguez'
    return elm
})


let mayoresDeEdad = estudiantes.filter((elm) => elm.nombre === 'juan')

console.log(mayoresDeEdad)