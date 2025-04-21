function calcularFactorial() {
    let numero;
    
    while (true) {
        const input = prompt("Por favor, ingrese un número para calcular su factorial:");
        
        if (input === null) {
            console.log("Operación cancelada por el usuario.");
            return;
        }
        
        numero = Number(input);
        
        if (isNaN(numero)) {
            alert("Error: Debe ingresar un número válido. Intente nuevamente.");
        } else if (!Number.isInteger(numero) || numero < 0) {
            alert("Error: Debe ingresar un número entero positivo. Intente nuevamente.");
        } else {
            break;
        }
    }
    
    // Calcular el factorial
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    
    // Mostrar el resultado
    console.log(`El factorial de ${numero} es: ${factorial}`);
    
    return factorial;
}

// Llamar a la función para ejecutar el programa
calcularFactorial();