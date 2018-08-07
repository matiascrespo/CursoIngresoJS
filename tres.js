function mostrar()
{
	//alert("comentar esta linea 3");

 	var importeProducto;
 	var cantidad;
 	var nombre;
 	var iva;
 	var precioConIva;
 	var precioSinIva;
 	

 	importeProducto=prompt("Ingrese el importe del producto");
 	importeProducto=parseInt(importeProducto);

 	cantidad=prompt("Ingrese cantidad");
 	cantidad=parseInt(cantidad);

 	nombre=prompt("Ingrese nombre");

 	precioSinIva=importeProducto*cantidad;
 	
 	iva=precioSinIva*21/100;

 	precioConIva=precioSinIva+iva;

 	
 


 	alert("Compro la cantidad de "+cantidad+" del producto "+nombre+", "+" a un precio de "+precioSinIva+", "+"pagando el precio de "+precioConIva+" con iva incluida");



}

