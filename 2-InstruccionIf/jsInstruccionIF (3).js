function mostrar()
{
//tomo la edad  

/*
	Dos bloques separados uno de otro.

	Si se ejecuta la primera, saltea la siguiente.
	Si la condicion es falsa, no ejecuta el primer bloque
	y ejecuta el segundo.

	NUNCA EJECUTA LAS DOS.
	Saltea y sigue con las instrucciones fuera del bloque.
	>17

	if(edad<17)
	{
			alert("es menor");

	}

	if(edad>17)
	{
		alert("es mayor");
	}
*/
	var edad;
	edad=document.getElementById('edad').value;

	if(edad>17)
		{
			alert("es mayor");
		}

		else
		{
			alert("es menor");
		}

}//FIN DE LA FUNCIÓN