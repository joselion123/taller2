'use strict'

function enviarDato() { //ejercicio1
let nombre= document.getElementById ("nombre").value;
let edad= document.getElementById ("edad").value

if ( edad>= 18 ) {
    return resultado.innerHTML= ` <b>${nombre}  Usted puede pasar ya que tiene ${edad} años </b> ` 
}
}
function enviarDato2(){//ejercicio2

let nombre= document.getElementById ("nombre").value;
let edad= document.getElementById ("edad").value

if ( edad>= 18 ) {
    return resultado.innerHTML= ` <b>${nombre}  Usted puede pasar ya que tiene ${edad} años </b> ` 
}else {
    return resultado.innerHTML= `<h1> Usted no puede pasar </h1> `
}
}

function enviarDato3(){//ejercicio3
    let nombre= document.getElementById ("nombre").value;
    let edad= document.getElementById ("edad").value
    let sexo=document.getElementById ("sexo").value
    if ( sexo == "hombre" && edad >= 18 ) 
    {
        return resultado.innerHTML= `<h3> ${nombre} pasaste `
    }
    else if (sexo == "mujer" ) { 
        return resultado.innerHTML= ``
    }
}

function enviarDato4(){//ejercicio4
    let numero = parseFloat(document.getElementById("numero").value);
    let solucion= Math.abs(numero);
    
    resultado.innerHTML = ` el valor absoluto de ${numero} es ${solucion} `
    
}

function enviarDato5(){//ejercicio5
    let numero = parseFloat(document.getElementById("numero").value);
    let solucion= Math.sqrt(numero);
    if (numero<0){
        resultado.innerHTML = ` este numero tiene raiz imaginaria `
    } else {
    resultado.innerHTML = ` la raiz cuadrada de ${numero} es ${solucion} `
    }
}

function enviarDato6(){ //ejercicio6
    let numero = parseFloat(document.getElementById("numero").value);
    let numero2= parseFloat(document.getElementById("numero2").value);
    if (numero>=0 && numero2>=0){
        resultado.innerHTML = ` resultado: ${numero} ${numero2} `
    } else
    if (numero>=0){
        resultado.innerHTML = `resultado: ${numero} `
    } 
    else if (numero2>=0){
        resultado.innerHTML = `resultado: ${numero2} `
    } else
    {
    resultado.innerHTML = ` `
    }
    
}

function enviarDato7(){ //ejercicio7
    let numero = parseFloat(document.getElementById("numero").value);
    let numero2= parseFloat(document.getElementById("numero2").value);
    if (numero>=0 || numero2>=0){
        resultado.innerHTML = ` resultado: ${numero} ${numero2} `
    } else {
        resultado.innerHTML = ` `
    }
}

function enviarDato8(){ //ejercicio 8
    let numero = parseFloat(document.getElementById("numero").value);
    let numero2= parseFloat(document.getElementById("numero2").value);
    if (numero!=0 && numero2!=0){
        resultado.innerHTML = ` resultado: ${numero} ${numero2} `
    } else {
        resultado.innerHTML = ` `
    }
}

function enviarDato9(){
    let numero = parseFloat(document.getElementById("numero").value);
    let numero2= parseFloat(document.getElementById("numero2").value);
    let suma=numero+numero2
    resultado.innerHTML = ` numeros ingresados: ${numero} y  ${numero2}  <h3>y su suma es: ${suma} </h3>` 
}

function enviarDato10(){
    let numero = parseFloat(document.getElementById("numero").value);
    let division= numero *.05
    resultado.innerHTML = ` numeros ingresados: ${numero}   <h3>y su 5% es: ${division} </h3>` 
}


