/*nombre = document.getElementById("name");
materias = document.getElementById("materias");
valorMaterias = document.getElementById("valorMaterias");
mensaje1 = document.getElementById("mensaje1");
mensaje1 = document.getElementById("mensaje2");
mensaje1 = document.getElementById("mensaje3");
mensaje1 = document.getElementById("mensaje4");
boton = document.getElementById("boton");
let carnet = 8.000;
let papeleria = 20.000;
let descuento = 0.20;
let neto = 0;



boton.addEventListener("click", () => {
    for(  i= 1; i<=materias; i++){
        materias.innerHTML = ("Dijite el valor de la materia  " +i+" : ");
    
        neto = neto + valorMaterias;
    }
     desc = neto - (neto * descuento);
       
        mensaje1.innerHTML = ("el descuento de la materia  es de : " +descuento+ "");
    

        mensaje2.innerHTML =("valor de la papeleria es fijo y es de: " +valorPapeleria+ " pesos");
   
    

        mensaje3.innerHTML =("valor del carnet estudiantil es fijo y es de : " +carnet+ " pesos");
    
    
    total = descuento + carnet + valorPapeleria;
    mensaje4.innerHTML =("Hola  "+nombre+"  su total a pagar es de " +total);

})*/


const inputNombre = document.querySelector('#nombreEstudiante'),
        inputCantMaterias = document.querySelector('#cantidadMaterias'),
        inputVlrMaterias = document.querySelector('#costoMaterias'),
        boton = document.querySelector('#boton'),
        valorPapeleria = 20000,
        valorCarnet = 8000,
        resultadoPrrf = document.querySelector('#resultado');

boton.addEventListener('click',()=>{
    const nombreEstudiante = inputNombre.value
    const cantidadMaterias = parseInt(inputCantMaterias.value)
    const valorMateria = parseInt(inputVlrMaterias.value)

    let costoMaterias = cantidadMaterias * valorMateria
    let calculoDescuento = costoMaterias * 0.2
    console.log(calculoDescuento)
    let valorMatricula = (valorPapeleria + valorCarnet + costoMaterias) - calculoDescuento
    console.log(valorMatricula)

    let valorTexto = valorMatricula.toString().replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1,');

    resultadoPrrf.innerHTML = `¡Hola ${nombreEstudiante}!<br>
                                El costo de tu matrícula para ${cantidadMaterias} materias es:<br>
                                <span>$${valorTexto}</span>  
                            `;
})
