// Debe solicitar al usuario un número por prompt o por input y guardarlo.
// Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
function fibonacci(n){
    if(n===0){
        return 0
    }
    else if(n===1){
        return 1
    } else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

function showFibonacci(n){
    for(let i=0; i<n; i++){
        console.log(fibonacci(i))
    }
}

showFibonacci(10);