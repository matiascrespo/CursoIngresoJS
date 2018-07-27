function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numero;
	var Negativos;
	var Positivos;
	var CantidadPositivos;
	var cantidadNegativos;
	var Ceros;
	var NumerosPares;
	var promedioPositivos;

	Negativos=0;
	Positivos=0;
	CantidadPositivos=0;
	cantidadNegativos=0;
	Ceros=0;
	

	while(respuesta!="no")
	{
		numero=prompt("Ingrese numero");
		numero=parseInt(numero);



		if(numero<0)
		{
			Negativos=Negativos+numero;
			cantidadNegativos++;

		}
		else if(numero>0)
		{
			Positivos=Positivos+numero;
			CantidadPositivos++;
			promedioPositivos=Positivos/CantidadPositivos;
		}

		else
		{	
			Ceros++;
		}

		if(numero%2==0 && numero!= 0)
		{	
			NumerosPares++;
		}

		
		




		respuesta=prompt("Ingrese no para salir");
	}

	document.write("La suma de numeros negativos es "+Negativos+"<br>");
	document.write("La suma de numeros positivos es "+Positivos+"<br>");
	document.write("La cantidad de positivos es "+CantidadPositivos+"<br>");
	document.write("La cantidad de numeros negativos es "+cantidadNegativos+"<br>");
	document.write("La cantidad de ceros es "+Ceros+"<br>");
	document.write("El promedio de numeros positivos es "+promedioPositivos+"<br>");


}//FIN DE LA FUNCIÓN