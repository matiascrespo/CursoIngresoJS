function mostrar()
{
	//alert("comentar esta linea 6");

	var estacionDelAño;
	var temperatura;

	estacionDelAño=prompt("Ingrese una estacion del año");
	temperatura=prompt("Ingrese una temperatura")
	temperatura=parseInt(temperatura);

	switch(estacionDelAño)
	{
		case "Verano":
		if(temperatura>32)
		{
			alert("Es un horno!!!");
		}
		else
		{
			if(temperatura<32 && temperatura>19)
			{
				alert("Que calorcito!!!")
			}
		}

		break;
		
		case "Otoño":
		if(temperatura==15)
		{
			alert("Esta lindo");
		}
		else
		{
			if(temperatura<15)
			{
				alert("Se vino el frio");
			}
			if(temperatura>15 && temperatura<22)
			{
				alert("Esta re bueno");
			}
			else
			{
				if(temperatura>21)
				{
					alert("Mucho calor para el otoño");
				}
			}

		}


		case "Invierno":

		if(temperatura>0 && temperatura <6)
		{
			alert("Que fresquete!!!");
		}
		break;

		case "Primavera":
		if(temperatura>32)
		{
			alert("Es un horno!!!");
		}
		else
		{
			if(temperatura<32 && temperatura>19)
			{
				alert("Que calorcito!!!")
			}
		}
		break;













	}



}
