function calcularAreaRectangulo (base, altura) {
	const resultado = base * altura

	return resultado
}

const AreaDelRectangulo = calcularAreaRectangulo (9,5)

console.log (AreaDelRectangulo)


function calcularPrecioTotal (PrecioUnitario, CantidadDeUnidades, CostoDeEnvio) {
  const precioTotal = PrecioUnitario * CantidadDeUnidades + CostoDeEnvio

  return precioTotal

}

const gastoTotal = calcularPrecioTotal (12,10,50)

console.log (gastoTotal)

function dejarPasar (edad) {
  const mayorDeEdad = edad >= 18

  return mayorDeEdad
}

console.log (dejarPasar (25))
console.log (dejarPasar (38))
console.log (dejarPasar (12))

