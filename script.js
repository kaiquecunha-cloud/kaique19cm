// Função para adicionar números e operadores na tela
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Função para calcular a expressão
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);  // Usa eval para calcular a expressão
    } catch (error) {
        display.value = "Erro";  // Se houver um erro, exibe "Erro"
    }
}

// Função para limpar a tela
function clearDisplay() {
    document.getElementById('display').value = '';
}
