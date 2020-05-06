const miComidaPreferida = {
	nombre: 'milanesa',
	cantidadDeVecesQueComí: 25,
	cantidadDeVecesQueMeCocinaron: 18,
	ingredientes: ['Carne', 'Pan Rallado', 'Aceite', 'Sal', 'Huevo' ]

}

miComidaPreferida.llevaMasDeCincoIngredientes = miComidaPreferida.ingredientes.length > 5 
miComidaPreferida.cantidadDeVecesQueMeCocine = miComidaPreferida.cantidadDeVecesQueComí - miComidaPreferida.cantidadDeVecesQueMeCocinaron

