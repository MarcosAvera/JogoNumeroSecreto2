alert("Boas vindas ao jogo do número secreto");
let nmrMult = 100;
let nmrSecreto = parseInt(Math.random() * nmrMult + 1);
console.log(nmrSecreto);
let chute;
let tentativas = 1;


//loop
while (chute != nmrSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${nmrMult}`);

    if (chute == nmrSecreto) {
        break;
    }
    else {
        if (chute > nmrSecreto) {
            alert(`Quase lá, o número secreto é menor que ${chute} `);
        }
        else {
            alert(`Quase lá, o número secreto é maior que ${chute} `);
        }
        tentativas++;

    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você acertou, o número secreto era ${nmrSecreto} com ${tentativas} ${palavraTentativa}.`);

/*
if (tentativas > 1) {
    alert(`Você acertou, o número secreto era ${nmrSecreto} com ${tentativas} tentativas.`);
}
else{
    alert(`Você acertou, o número secreto era ${nmrSecreto} com ${tentativas} tentativa.`);
}*/