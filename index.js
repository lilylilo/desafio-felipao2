function calcularSaldoRankeadas(vitorias, derrotas) {
    //Calcula o saldo de ranqueadas
    const saldoVitorias = vitorias - derrotas;

    //determina o nível com base no nº de vitórias
    let nivel = '';

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso:
const vitorias = 85;
const derrotas = 20;
const resultado = calcularSaldoRankeadas(vitorias, derrotas);
console.log(resultado);
