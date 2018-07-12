function mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById('edad').value;

	if(edad>18)
	{
		alert("es mayor de edad");
	}
		else
		{
			if(edad<18 && edad >12)
			{
				alert("es adolescente");
			}

			else
			{
				alert("es niño");
			}
		}

/*
	conveniente utilizar primero el IF de niño, para no 
	volver a utilizar el microprocesador. Se utiliza solo
	una vez.

	niño ><13
	mayor >17
	adolescente lo que queda
*/

}//FIN DE LA FUNCIÓN