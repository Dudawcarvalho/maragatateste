// Função para calcular o total
function calcularTotal() {
    // Selecionar os elementos do DOM
    const cota = document.getElementById('cota');
    const maragataOrigens = document.getElementById('maragata-origens');
    const maragataFinals = document.getElementById('maragata-finals');
    const maragataClinica = document.getElementById('maragata-clinica');
    const totalElement = document.getElementById('total');
    
    // Obter os valores dos elementos selecionados
    const valorCota = parseInt(cota.selectedOptions[0].dataset.valor);
    const valorOrigens = parseInt(maragataOrigens.selectedOptions[0].dataset.valor);
    const valorFinals = parseInt(maragataFinals.selectedOptions[0].dataset.valor);
    const valorClinica = parseInt(maragataClinica.selectedOptions[0].dataset.valor);
    
    // Calcular o total
    const total = valorCota + valorOrigens + valorFinals + valorClinica;
    
    // Atualizar o valor total no DOM com formatação de moeda
    totalElement.textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Adicionar eventos de mudança para recalcular o total
document.getElementById('cota').addEventListener('change', calcularTotal);
document.getElementById('maragata-origens').addEventListener('change', calcularTotal);
document.getElementById('maragata-finals').addEventListener('change', calcularTotal);
document.getElementById('maragata-clinica').addEventListener('change', calcularTotal);

// Calcular o total inicial ao carregar a página
calcularTotal();
