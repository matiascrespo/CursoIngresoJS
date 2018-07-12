function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=Math.floor(Math.random()*10)+1;

	if(numero<4)
		{
			alert("Vamos, la proxima se puede");
		}
			else
			{
				if(numero>8)
					{
						alert("EXCELENTE");
					}
				else
				{
					alert("APROBO");
				}					

			}


}//FIN DE LA FUNCIÓN