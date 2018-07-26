function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='no';


	//respuesta=prompt("Quiere seguir?");//
	while(respuesta=="no")
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);
		respuesta=prompt("Quiere seguir?");

		contador=contador+1;
		acumulador=acumulador+numero;

	}

	promedio=acumulador/contador;


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN