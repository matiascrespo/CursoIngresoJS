function mostrar()
{
	//alert("comentar esta linea 7");

	var nombre;
	var ancho;
	var alto;
	var largo;
	var peso;
	var contador;
	var masPesado;
	var alturaMasAlta;
	var	cantidadPesoEntre300y600
	var AnchoMenosAncho;	

	contador=0;
	cantidadPesoEntre300y600=0;
	
	while(contador<5)
	{
		contador++;
		

		nombre=prompt("Ingrese nombre");

		ancho=prompt("Ingrese ancho");
		ancho=parseInt(ancho);

		while(isNaN(ancho) || ancho>10 || ancho <0)
		{
			ancho=prompt("Error, Ingrese ancho");
			ancho=parseInt(ancho);
		}

		largo=prompt("Ingrese largo");
		largo=parseInt(largo);

		while(isNaN(largo) ||largo>10 || largo <0)
		{
			largo=prompt("Error, Ingrese largo");
			largo=parseInt(largo);
		}

		peso=prompt("Ingrese peso");
		peso=parseInt(peso);

		while(peso>1000 || isNaN(peso))
		{
			peso=prompt("Error, Ingrese peso");
			peso=parseInt(peso);
		}


		if(contador==1)
		{
			masPesado=peso;
			alturaMasAlta=alto;
			AnchoMenosAncho=ancho;
			contador=2;
		}
		else
		{
				if(peso>masPesado)
				{
					masPesado=peso;
				}
				if(alto>alturaMasAlta)
				{
					alturaMasAlta=alto;
				}
				if(ancho<AnchoMenosAncho)
				{
					AnchoMenosAncho=ancho;
				}
		}

		if(peso>299 && peso<601)
		{
			cantidadPesoEntre300y600++;
		}



		















	}

	alert("El mas pesado es "+masPesado);
	alert("La altura mas alta es "+alturaMasAlta);
	alert("El ancho menoss ancho es "+AnchoMenosAncho);
	alert("La cantidad de peso entre 300 y 600 es "+cantidadPesoEntre300y600);


}
