function mostrar()
{
	var contador;
	var nombre;	
	var sexo;
	var edad;
	var nota;
	var peorNota;


	contador=0;


	while(contador<5)
	{
		nombre=prompt("Ingrese su nombre");

		sexo=prompt("Ingrese sexo");
		while(sexo!= 'f' && sexo!= 'm')

		{
			sexo=prompt("Ingrese f/m.");
			
		}

		edad=prompt("Ingrese su edad");
		while(isNan(edad) || edad<0 || edad>100)

		{
			edad=prompt("Ingrese una edad entre 0 y 100.");
			
		}

		nota=prompt("Ingrese una nota");
		nota=parseInt(nota);

		while(nota<0 && nota>10)
		{
			nota=prompt("Ingrese una nota entre 0 y 10.");
			nota=parseInt(nota);
		}

	contador++;

	if(contador==1)
	{
		peorNota=nota;
		peorNotaSexo=sexo;
	}
	else{
		if(nota<peorNota)
		{
			peorNota=nota;
			peorNotaSexo=sexo;
		}
	}





		
	}

	alert("El sexo de la peor nota es "+peorNotaSexo);
	


}
