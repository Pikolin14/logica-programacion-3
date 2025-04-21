document.getElementById('factorialForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const input = document.getElementById('numero');
    const resultadoDiv = document.getElementById('resultado');
    const errorDiv = document.getElementById('error');
    
    // Limpiar mensajes anteriores
    resultadoDiv.textContent = '';
    errorDiv.textContent = '';
    
    const numero = Number(input.value);
    
    // Validaciones
    if (isNaN(numero)) {
        errorDiv.textContent = 'Error: Debe ingresar un número válido';
        return;
    }
    
    if (!Number.isInteger(numero) || numero < 0) {
        errorDiv.textContent = 'Error: Debe ingresar un número entero positivo';
        return;
    }
    
    // Calcular factorial
    const factorial = calcularFactorial(numero);
    
    // Mostrar resultado
    resultadoDiv.textContent = `El factorial de ${numero} es: ${factorial}`;
    
    // También mostrar en consola (según requerimiento)
    console.log(`El factorial de ${numero} es: ${factorial}`);
});

function calcularFactorial(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}