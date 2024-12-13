// Debe pedirle al usuario que intente adivinar el número secreto por prompt o por input, dicho número será del 1 al 100.
// Si el usuario no adivina el número secreto, debe mostrar un mensaje por consola o DOM diciendo: “Ups, el número secreto es incorrecto, vuelve a intentarlo. ” y volver a solicitarle que ingrese un número.
// Si el usuario adivina el número secreto debe de mostrar un mensaje por consola o DOM diciendo: “Felicidades, adivinaste el número secreto”. Además debe imprimir por consola o DOM la lista de números introducidos antes de adivinar el número secreto

const buttonGuess = document.getElementById("buttonGuess");
const numberUser = document.getElementById("numberUser");
const message = document.getElementById("message");
const attempts = document.getElementById("attempts");

const numeroSecreto = Math.floor(Math.random() * 100) + 1;// cambiar a 100
let intentos = [];

function adivinarNumber() {
  const numero = parseInt(numberUser.value.trim());

  if (numero < numeroSecreto) {
    message.textContent="Ups, el numero es incorrecto vuelve a intentarlo. El numero es mayor.";
  } else if (numero > numeroSecreto) {
    message.textContent="Ups, el numero es incorrecto vuelve a intentarlo. El numero es menor.";
  } else {
    message.textContent="Felicidades, adivinaste el número secreto";
    buttonGuess.disabled = true;
    attempts.textContent = `Tu intentos fueron: ${intentos.join(", ")}`; 
  }

  intentos.push(numero);
  numberUser.value = '';
}
buttonGuess.addEventListener("click", adivinarNumber);

