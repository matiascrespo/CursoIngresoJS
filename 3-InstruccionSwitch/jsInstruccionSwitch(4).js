function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	
switch(mesDelAño)
{
	case "Febrero":
	alert("Tiene 28 dias");
	break;

	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
	alert("Tiene 31 dìas.");
	break;

	default:
	alert("Tiene 30 dìas");
	break;
}


}//FIN DE LA FUNCIÓN