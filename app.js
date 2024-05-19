//msg de boas vindas
alert('Bem vindo ao jogo de adivinhação!');

//variáveis
let Max = 100;
let numSecret = parseInt(Math.random() * Max + 1);
let numChute;
let chute = 1;

//roubo rsrsrs
console.log(numSecret);

//looping 
while (numChute != numSecret){

    //input do usuário
    numChute = prompt(`Escolha um número entre 1 e ${Max}`);

    //caso acerte
    if (numChute == numSecret){

        alert(`Você acertou o número secreto: ${numSecret}!!!`);

    }

    //caso erre
    else{

        //msg de erro
        alert('HAHAHA, ERROU DOIDO!!!!');

        //tentativas
        chute += 1;

        //proxima chance
        if(numChute < numSecret){

            alert(`O número secreto é maior que ${numChute}`);
                
        }

        else{

            alert(`O número secreto é menor que ${numChute}`);

        }

    }
}

let SP = chute > 1 ? 'vezes' : 'vez';
alert(`Você tentou acertar ${chute} ${SP}!`);
