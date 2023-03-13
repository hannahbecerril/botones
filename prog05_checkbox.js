function ejecutar(){
	as="";
	if (document.animales.a1.checked){
	as=as+"Perro\n";
	}
	if (document.animales.a2.checked){
	as=as+"Gato\n";
	}
	if (document.animales.a3.checked){
	as=as+"Patito\n";
	}
	if (document.animales.a4.checked){
	as=as+"Pez\n";
	}
	document.animales.as.value=as;

}