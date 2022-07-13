import inputText from 'readline-sync';

let valorDivida = inputText.question('Informe o valor devido: ');
let diasAtraso = inputText.question('Informe quantos dias se passaram deis do vencimento do boleto: ');

console.log("Valor original da divida: "+valorDivida);
console.log("Dias em atraso: "+diasAtraso);
