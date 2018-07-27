/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	
 
 	EdadValidada=0;
 	Edad=0; 	

 	while(Edad<18 || Edad>90)
 	{
 		Edad=prompt("Ingrese una edad entre 18 y 90 años");
 		Edad=parseInt(Edad);
 		EdadValidada=EdadValidada+Edad; 	
 	}

 	while(Sexo!="m" && Sexo!="f")
 	{
 		Sexo=prompt("Ingrese un Sexo f para femenino y m para Maculino.");
 		SexoValidado=Sexo;
 	}

 	EstadoCivil=0
 	while(EstadoCivil<1 || EstadoCivil>4)
 	{
 		EstadoCivil=prompt("Ingrese 1-Para soltero. 2- Para casado. 3- Para divorciado. 4- Para viudo.");
 		EstadoCivilValidado=EstadoCivil;
 	}

 	SueldoBruto=0

 	while(SueldoBruto<8000)
 	{
 		SueldoBruto=prompt("Ingrese un sueldo mayor a $8000.-");
 		SueldoBruto=parseInt(SueldoBruto);
 		SueldoBrutoValidado=SueldoBruto;
  	}

  	NumeroLegajo=0
  	while(NumeroLegajo<1000)
  	{
  		NumeroLegajo=prompt("Ingrese un numero de legajo válido. 4 cifras, sin ceros a la izquierda.");
  		NumeroLegajoValidado=NumeroLegajo;
  	}

 	while(Nacionalidad!= "A"&& Nacionalidad!= "E" && Nacionalidad!="N")
 	{
 		Nacionalidad=prompt("Ingrese A para Argentino. E para  Extranjeros. N para nacionalizado.");
 		NacionalidadValidada=Nacionalidad;
 	}



 	document.getElementById('Edad').value=EdadValidada;
 	document.getElementById('Sexo').value=SexoValidado;
 	document.getElementById('EstadoCivil').value=EstadoCivilValidado;
 	document.getElementById('Sueldo').value=SueldoBrutoValidado;
 	document.getElementById('Legajo').value=NumeroLegajoValidado;
 	document.getElementById('Nacionalidad').value=NacionalidadValidada;



}
