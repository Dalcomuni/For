const prompt = require('prompt-sync');
const entrada = prompt();

var quantosNumerosSeraoSomados = entrada('Quantos números serão somados?');
let soma = 0;

for (let i = 0; i < quantosNumerosSeraoSomados; i++){
    numero = entrada('Digite um número a ser somado: ');
  soma += parseInt(numero) ;

  console.log(soma);
}