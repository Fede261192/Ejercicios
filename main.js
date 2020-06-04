window.onload = function () {
	const titulo = document.querySelector ('h1');
	const imagenLogo = document.querySelector ('.logo');
	const parrafo = document.querySelector ('p');
	const firma = document.querySelector ('.firma');
	const nombre = document.querySelector ('#nombre')


	titulo.style.display = "none"
	parrafo.style.fontSize = "33px"
	parrafo.style.color = "violet"
	parrafo.style.border = "6px solid black"
	parrafo.style.borderRadius = "10px"


	let mostrarNombre = true 

	firma.onclick = function () {
		if (mostrarNombre) {
			nombre.style.display = "none"
		} else {
			nombre.style.display = "block"
		}

		mostrarNombre = !mostrarNombre


	}
}


