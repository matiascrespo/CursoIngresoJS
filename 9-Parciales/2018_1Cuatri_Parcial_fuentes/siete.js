//

function mostrar()
{
	var sexo;
	var edad;
	var nombre;

	
	contador=0;

	while(contador<3)
	{

		edad=prompt("Ingrese su edad.");
		edad=parseInt(edad);
		while(edad<0 || edad>100)
		{
			edad=prompt("Ingrese una edad entre 0 y 100 años.");
		}

		sexo=prompt("Ingrese su sexo");
		
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Ingrese un sexo valido.");
		}

		nombre=prompt("Ingrese su nombre");

		contador++;

	}


	
	
		
		






}
