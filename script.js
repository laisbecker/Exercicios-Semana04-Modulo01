const inputNumero1 = document.getElementById('inputNumero1')
const inputNumero2 = document.getElementById('inputNumero2')
const txtResultado = document.getElementById('txt-resultado')

function soma(num1, num2) {
    const resultado = num1 + num2
    return resultado
}

function gerarResultado(event) {
    event.preventDefault()
    const num1 = parseInt(inputNumero1.value)
    const num2 = parseInt(inputNumero2.value)
    
    const resultado = soma(num1, num2)
    txtResultado.innerText = `Resultado: ${resultado}`
}

