function enviarDato1() {
    let estrato= parseFloat(document.getElementById("estrato").value);
    let metroCuadrado= parseFloat(document.getElementById("metro").value);
    let total=0;
    if (estrato==1) {
    total=metroCuadrado*5000;
    return  resultado.innerHTML = `Total a pagar por ${metroCuadrado} metros cubicos : ${total}$ `
    }
    if (estrato==2) {
        total=metroCuadrado*6500;
        return  resultado.innerHTML = `Total a pagar por ${metroCuadrado} metros cubicos : ${total}$ `
    }
    if (estrato==3) {
        total=metroCuadrado*7000;
        return  resultado.innerHTML = `Total a pagar por ${metroCuadrado} metros cubicos : ${total}$ `
    }
    if (estrato==4) {
        total=metroCuadrado*8000;
        return  resultado.innerHTML = `Total a pagar por ${metroCuadrado} metros cubicos : ${total}$ `
    }
    if (estrato==5) {
    total=metroCuadrado*9200;
    return  resultado.innerHTML = `Total a pagar por ${metroCuadrado} metros cubicos : ${total}$ `
    }
    
}

function enviarDato2() {
    let personas= parseFloat(document.getElementById("cantidad").value)
    let total=0;
    if (personas>=200 && personas<=300){
        total=11000*personas
        return  resultado.innerHTML = `Total a pagar por ${personas} almuerzos en nuestro restaurante es de: ${total}$ `
    }
    if (personas>300){
        total=personas*9000 
        return  resultado.innerHTML = `Total a pagar por ${personas} almuerzos en nuestro restaurante es de: ${total}$ `
    }
    if (personas <200){
        total=personas*14000
        return  resultado.innerHTML = `Total a pagar por ${personas} almuerzos en nuestro restaurante es de: ${total}$ `
    }
}
function enviarDato3(){
    let cantidad=document.getElementById("cantidad").value
    let tipo=document.getElementById("tipo").value;
    let tamaño=document.getElementById("tamaño").value
    let total=0
    if (tipo =="tipoA" && tamaño=="tamaño1"){
    total=(cantidad*2000) +2000

    }
    if (tipo =="tipoA" && tamaño=="tamaño2"){
        total=(cantidad*2000) +1000
    return  resultado.innerHTML = `Total a pagar: ${total}`
        }
    if (tipo =="tipoB" && tamaño=="tamaño1"){
        total=(cantidad*2000) +500
        return  resultado.innerHTML = `Total a pagar: ${total}`
        }
    if (tipo =="tipoB" && tamaño=="tamaño1"){
        total=(cantidad*2000) +900
        return  resultado.innerHTML = `Total a pagar: ${total}`
        }
}
function enviarDato4(){
    let cantidad=document.getElementById("cantidad").value
    let total=0;
    if (cantidad>=100){
    total=cantidad*6500
    
    }
    if (cantidad>=50 && cantidad<=99){
    total=cantidad*7000
    return  resultado.innerHTML = `Total a pagar: ${total}`
    }
    if (cantidad>=30 && cantidad<=49){
    total=cantidad*9500
    return  resultado.innerHTML = `Total a pagar: ${total}`
    }
    if (cantida<30 ){
    total=1000000/cantidad
    return  resultado.innerHTML = `Total a pagar: ${total}`
    }    
}