// Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
// Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
let celcious=parseInt(prompt("Ingrese un temperatura de "));
if(!Number(celcious) ){
    console.log("Solo se aceptan numeros")
}else{
    let fare=(celcious*9/5)+32;
    console.log(`${celcious} a farenheit ${fare}`);

    let kelvin=celcious + 273.15;
    console.log(`${celcious} a kelvin ${kelvin}`);
}
