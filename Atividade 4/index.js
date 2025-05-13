let nome = 0
let sobrenome = 0

while (nome >= 0 || nome <= 0) { // Foi colocado que vai repetir até que a variável "nome" deixe de ser maior ou igual que zero ou menor ou igual que zero, mas todo número existente é maior ou menor ou igual a 0. Isso faz com que o código não aceite números.
    nome = prompt(`Digite o seu nome:`);
}

while (sobrenome >= 0 || sobrenome <= 0) { // Mesma coisa que o comentário acima.
    sobrenome = prompt(`Digite o seu sobrenome:`);
}

alert(`Seu nome completo é ${nome} ${sobrenome}`);
