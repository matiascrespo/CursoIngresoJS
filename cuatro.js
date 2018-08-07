function mostrar()
{
//	alert("comentar esta linea 4");

	var numeroUno;
	var numeroDos;
	var numeroTres;

	numeroUno=prompt("Ingrese numero uno");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("Ingrese numero dos");
	numeroDos=parseInt(numeroDos);

	numeroTres=prompt("Ingrese numero tres");
	numeroTres=parseInt(numeroTres);

	if(numeroUno>numeroDos && numeroUno>numeroTres)
		{
			alert("El numero "+numeroUno+" es mayor");
		}
		else
		{
			if(numeroDos>numeroUno && numeroDos>numeroTres)
			{
				alert("El numero "+numeroDos+" es mayor");
			}

			if(numeroTres>numeroUno && numeroTres>numeroDos)
			{
				alert("El numero "+numeroTres+" es mayor");
			}
		}




	if(numeroUno<numeroDos && numeroUno<numeroTres)
		{
			alert("El numero "+numeroUno+" es menor");
		}
		else
		{
			if(numeroDos<numeroUno && numeroDos<numeroTres)
			{
				alert("El numero "+numeroDos+" es menor");
			}

			if(numeroTres<numeroUno && numeroTres<numeroDos)
			{
				alert("El numero "+numeroTres+" es menor");
			}
		}


}
