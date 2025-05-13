let valorInicial = 1000
let valorSaque = 0

do {

    valorSaque = parseFloat(prompt("Digite o valor do seu Saque: (Saldo:" + valorInicial + ")"));

    if (isNaN(valorSaque) || valorSaque <= 0) {
        alert("Erro: Valor Inválido");
    } else {
        if (valorSaque > valorInicial) {
            alert("Erro: Valor do saque maior que o valor do Saldo")
        } else
            valorInicial = valorInicial - valorSaque
    }


} while (valorInicial > 0)

alert("Seu saldo é 0.")