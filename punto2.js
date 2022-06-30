
boton.addEventListener("click", (e) => {

    e.preventDefault()

    let a = document.getElementById("a");
    let b = document.getElementById("b");
    let c = document.getElementById("c");
    let d = document.getElementById("d");
    let mensajeMayor = document.getElementById("mensajeMayor");
    let mensajeMenor = document.getElementById("mensajeMenor");
    let error = document.getElementById("error");


    a = parseFloat(a.value);
    b = parseFloat(b.value);
    c = parseFloat(c.value);
    d = parseFloat(d.value);
if (isNaN(a)|| isNaN(b) || isNaN(c) || isNaN(d) || a<0 || b<0 || c<0 || d<0)
error.innerHTML (" debes ingresar solo numeros positivos ")

    if(a != b && a != c && a != d && b != c && b != d && c != d) 
    if( a > b )
	if(a > c)
		if(a > d )
		mensajeMayor.innerHTML =( "el mayor es : " +a); 
                    else
                    mensajeMayor.innerHTML =("el mayor es :" +d);
                    
                else
			if(c > d )
			mensajeMayor.innerHTML =("el mayor es : " +c); 
                        else
                        mensajeMayor.innerHTML =("el mayor es : " +d); 
                     
            else
		if(b > c )
			if( b > d )
            mensajeMayor.innerHTML =("el mayor es : " +b); 
                        else
             mensajeMayor.innerHTML =("el mayor es : " +d); 
                         
                else
		    if( c > d )
			mensajeMayor.innerHTML =("el mayor es : " +c); 
                     else
            mensajeMayor.innerHTML =("el mayor es : " +d); 
else
error.innerHTML =("ingrese 4 numeros diferentes");

 
if( a < b )
	if(a < c)
		if(a < d )
		mensajeMenor.innerHTML = ("el menor es : " +a); 
                    else
                    mensajeMenor.innerHTML =("el menor es : " +d);
                    
                else
			if(c < d )
			mensajeMenor.innerHTML =("el menor es : " +c); 
                        else
            mensajeMenor.innerHTML = ("el menor es : " +d); 
                     
            else
		if(b < c )
			if( b < d )
            mensajeMenor.innerHTML =("el menor es :" +b); 
                        else
            mensajeMenor.innerHTML =("el menor es : " +d); 
                         
                else
		    if( c < d )
			mensajeMenor.innerHTML =("el menor es :" +c); 
                     else
             mensajeMenor.innerHTML =("el menor es :" +d);
 




    console.log('boton click');

});
