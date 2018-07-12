function mostrar()
{
//tomo la edad  

/*
Tabla de verdad Y- Si las dos son verdaderas entra.
(operador AND) Unir con un & 

Si esto y esto son verdaderos. Es verdadero (ENTRA)

Se puede realizar de cualquiera de las dos formas
Es absolutamente lo mismo. Dos IF separados vienen de
vienen de &&.
*/
	var edad;
	edad=document.getElementById('edad').value;
	/*
	if(edad<18)
	*/
	if(edad<18 && edad >12)
	{		
		//if(edad>12)
		{
		alert("es adolescente");
		}
	
	}

	
}//FIN DE LA FUNCIÓN

/*

	if(edad<18 && edad >12)

*/