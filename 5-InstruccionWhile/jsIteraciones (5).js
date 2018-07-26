function mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	var f;
	var m;

	f="f";
	m="m";

	while(sexo != f && sexo!= m)

	{
		sexo=prompt("Ingrese nuevamente");
	}


	document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN