/*
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo 

*/
function mostrar()
{
	var peso;
	var temperatura;
	var nombre;
	var contadorDetemperaturasPares;
	var contador;
	var respuesta;
	var masPesado;
	var masPesadoNombre;
	var masPesadoTemperatura;
	var contadorDeAnimalesCeroGrados;
	var sumaDePesos;
	var promedioDePesos;
	var pesoMinimoBajoCero;
	var pesoMaximoBajocero;
	var banderaDelPrimerBajoCero;

	banderaDelPrimerBajoCero=0;
	sumaDePesos=0;
	contadorDetemperaturasPares=0;
	respuesta="si";
	contador=0;


	while(respuesta!="n")
	{
		contador++;
		nombre= prompt("ingrese nombre");
		peso= prompt("ingrese peso");
		peso=parseInt(peso);
		while(isNaN(peso)||peso<0||peso>100)
		{
			peso= prompt("error,ingrese peso");
			peso=parseInt(peso);
		}
		temperatura= prompt("ingrese temperatura");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)||temperatura<-30||temperatura>30)
		{
			temperatura= prompt("error,ingrese temperatura");
			temperatura=parseInt(temperatura);
		}
		sumaDePesos=sumaDePesos+peso;
		if(temperatura%2==0)
		{
			contadorDetemperaturasPares++;
		}

		if(contador==1)
		{
			masPesado=peso;
			masPesadoNombre=nombre;
			masPesadoTemperatura=temperatura;
		}else
		{
			if(peso>masPesado)
			{
				masPesado=peso;
				masPesadoNombre=nombre;
				masPesadoTemperatura=temperatura;
			}

		}
		if(temperatura<0)
		{
			contadorDeAnimalesCeroGrados++;
			if(banderaDelPrimerBajoCero==0)
			{	
				banderaDelPrimerBajoCero=666;
				pesoMinimoBajoCero=peso;
				pesoMaximoBajocero=peso;
			}
			else
			{	
				if(peso<pesoMinimoBajoCero)
				{
					pesoMinimoBajoCero=peso;
				}
				if(peso>pesoMaximoBajocero)
				{
					pesoMaximoBajocero=peso;
				}

			}


		}




	}
	promedioDePesos=sumaDePesos/contador;
	



}
