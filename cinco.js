function mostrar()
{
//	alert("comentar esta linea 5");

	var mes;

	mes=prompt("Ingrese un mes del año");

	switch(mes)
	{
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert("Tiene 31 dias");
		break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert("Tiene 30 dìas");
		break;

		case "Febrero":
		alert("Febrero tiene 28 dias");
		break;

		default:
		alert("No es un mes valido");
		break;




	}


}

