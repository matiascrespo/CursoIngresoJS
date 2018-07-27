	/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var precioUnitario;
	var precioFinal;
	var cantidad;
	var precioBruto;
	var marca;
	var iibb;
	
	

	precioUnitario=35;
	cantidad=document.getElementById('Cantidad').value;
	cantidad=parseInt(cantidad);
	precioBruto=precioUnitario*cantidad
	marca=document.getElementById('Marca').value;
	precioFinal=parseInt(precioFinal);
	

	if(cantidad>5)
	{
		precioFinal=precioBruto*0.50;
	}
	else
	{
		if(cantidad>4&&marca=="ArgentinaLuz")
		{
			precioFinal=precioBruto*0.60;
		}
		else
		{
			if(cantidad>4&&marca!="ArgentinaLuz")
			{ 
				precioFinal=precioBruto*0.70;
			}
			else
			{
				if(cantidad>3&&marca=="ArgentinaLuz")
				{
					precioFinal=precioBruto*0.75;
				}
				else
				{
					if(cantidad>3&&marca=="FelipeLamparas")
					{
						precioFinal=precioBruto*0.75;
					}
					else 
					{
						if(cantidad>3&&marca=="JeLuz")
					
						{
							precioFinal=precioBruto*0.8;
						}
						else
						{
							if(cantidad>3&&marca=="HazIluminacion")
							{
								precioFinal=precioBruto*0.8;
							}
							else
							{
								if(cantidad>3&&marca=="Osram")
								{
									precioFinal=precioBruto*0.8;
								}
							
							else 
							{
							if(cantidad>2&&marca=="ArgentinaLuz")
							{
								precioFinal=precioBruto*0.85;
							}
								else
								{
									if(cantidad>2&&marca=="FelipeLamparas")
									{
										precioFinal=precioBruto*0.9;
									}
									else
									{
										precioFinal=precioBruto*0.95;
									}								
								}							
							}
						
							}								
						}	
					}
				}
			}
		}
	}

	if(precioFinal>120)
	{
		iibb=precioFinal*0.10;
		precioFinal=precioFinal+iibb;
		alert("Usted pago $"+iibb+" de IIBB.");
	}
	
	
	document.getElementById('precioDescuento').value=precioFinal;		
													
}

