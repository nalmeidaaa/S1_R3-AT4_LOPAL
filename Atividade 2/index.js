let soma = 0;
let numero = 0;
let i = 0

while (numero > -1) {

    i++

    numero = parseInt(prompt(`Digite uma nota para calcular a média com as próximas. (O programa para quando você digitar um número negativo)`));

    if (isNaN(numero)) {
        alert("Erro: Você não digitou um número válido.")
        i = i - 1

        // Toda vez que um número for invalido, é necessário diminuir 1 em sua repetição (variável i) pois o número de repetições no final vai dividir pelo valor da soma das notas. 
        // Exemplo: O usuário digitou as Notas 5, 12 e 10. Nesse caso, seria 5+10/3, mas não são três notas, são apenas duas, por isso é necessário diminuir 1 toda vez que for inválido. 

    } else {
        if (numero > 10) {
            alert("Erro: Esse programa só aceita notas de 0 a 10")
            i = i - 1

            // Aqui acontece a mesma situação do comentário anterior.

        } else
            soma = soma + numero

    }
}

alert(`Sua média é de ${(soma - numero) / (i - 1)}`) // Na parte do cáculo "(soma-numero)" é subtraído o último número, tendo em vista que o último número é negativo, logo ele não conta como parte da soma. Na parte "(i-1)" foi subtraído 1 pelo fato do último número não contar como uma nota. 
