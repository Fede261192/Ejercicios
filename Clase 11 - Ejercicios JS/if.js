function calcularResultadoDeExamen (nota) {
	if (nota < 4) {
		return 'aplazado' 
	} else if (nota <= 6 ) {
		return 'a recuperar'
	} else if (nota < 10) {
		return 'aprobado'
	} else  {
		return 'sobresaliente'
	}
}

 console.log (calcularResultadoDeExamen (2))
 console.log (calcularResultadoDeExamen (4))
 console.log (calcularResultadoDeExamen (6))
 console.log (calcularResultadoDeExamen (8))
 console.log (calcularResultadoDeExamen (10))
 console.log (calcularResultadoDeExamen (9))


const persona1 = {
  madre: 'Gabriela',
  padre: 'Reinaldo',
}

const persona2 = {
  madre: 'Gabriela',
  padre: 'Reinaldo',

}

const persona3 = {
  madre: 'Gabriela',
  padre: 'Carlos,'
}


function sonHermanos (persona1, persona2) {
  if (persona1.madre === persona2.madre && persona1.padre === persona2.padre) {
    return true
  } else {
    return false
  }

}



console.log (sonHermanos (persona1, persona2))
console.log (sonHermanos (persona1, persona3))
console.log (sonHermanos (persona2, persona3))


function contarEspacios (texto) {
  const sumaDeEspacios = (texto.split(" ").length - 1)

  return sumaDeEspacios
  
}

console.log (contarEspacios ('Hola me llamo Federico'))
console.log (contarEspacios ('No puedo creer que este ejercicio me salió bien'))
console.log (contarEspacios ('Esto es tremendo'))


/*la función recibe dos parámetros: una lista de comidas que es un objeto con las propiedades
nombre y lista de ingredientes; el segundo parámetro es el nombre de un ingrediente. Debe devolver todas las recetas que se
pueden hacer con el ingrediente del segundo parámetro.
*/ 

function obtenerRecetaPorIngrediente (listaDeComidas, ingrediente) {
  const listaDeComidasConIngrediente = []


  for (let i = 0; i < listaDeComidas.length; i++) {
    const comida = listaDeComidas[i]

    for (let j = 0; j < comida.listaDeIngredientes.length; j++) {
      const ingredienteDeComida = comida.listaDeIngredientes [j]

      if (ingredienteDeComida === ingrediente) {
        listaDeComidasConIngrediente.push (comida)
      }
    }


  }

  return listaDeComidasConIngrediente 


}

const comidas = [ 


  {nombre: 'milanesa',
  listaDeIngredientes: ['carne', 'pan rallado', 'huevo', 'aceite'], 
  },


  {nombre: 'hamburguesa',
  listaDeIngredientes: ['carne', 'pan'],
  }, 


  {nombre: 'fideos',
  listaDeIngredientes: ['pasta', 'salsa', 'tomate'],
  }, 

]

const recetasConCarne = (obtenerRecetaPorIngrediente (comidas,'carne'))

console.log (recetasConCarne)