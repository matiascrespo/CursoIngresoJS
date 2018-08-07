
function mostrar()
{
	//alert("comentar esta linea 1");

	var ancho;
	var largo;
	var perimetro;
	var litrosPintura;

	ancho=prompt("Ingrese ancho");
	ancho=parseInt(ancho);

	largo=prompt("Ingrese largo");
	largo=parseInt(largo);

	perimetro=largo*2 + ancho*2;
	litrosPintura=perimetro/3;

	alert("El perimetro es "+perimetro+ "."+" Y la cantidad de pintura que se debe comprar es "+litrosPintura);





}
