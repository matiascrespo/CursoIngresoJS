
function mostrar()
{

	var numeroUno;
	var numeroDos;
 	var resultado;
 	var suma;
 	var division;

	numeroUno=prompt("ingrese el primer numero");
	numeroDos=prompt("ingrese el segundo numero");
	
	suma=numeroUno+numeroDos;
	division=numeroUno/numeroDos;
	
	if(numeroUno==numeroDos)
		{
			alert(numeroUno+numeroDos)
		}

		
	if(numeroUno>numeroDos)
		{
			numeroUno=parseInt(numeroUno);
			numeroDos=parseInt(numeroDos);
			resultado=division
		}

		else
			{
				resultado=suma;	
			}

	if(suma<50)
		{
			resultado=suma;
			alert("La suma es "+suma+" y es menor a 50");
		}

	
}
