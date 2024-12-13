// Debe solicitar al usuario un número por prompt o por input y guardarlo.
// Debe calcular el factorial del número recibido utilizando recursión.
// 5*4*3*2*1=20*3=60*2=120*1=120

let numeroFactorial=parseInt(prompt("Ingrese un numero"));
if(Number(numeroFactorial)){
    console.log(factorial(numeroFactorial));
}else{
    console.log("Ingres un numero por favor")
}

function factorial(num){
    return num > 1   ? num * factorial(num-1) : 1;
}
