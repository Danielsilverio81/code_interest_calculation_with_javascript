import inputText from 'readline-sync';

console.log("App Calculo de Juros");

let juros;
let valorDivida = inputText.question('Informe o valor devido: ');

if(valorDivida > 0) {
    let diasAtraso = inputText.question('Informe quantos dias se passaram deis do vencimento do boleto: ');
    if(diasAtraso > 0) {

        if(diasAtraso > 15) {

            juros = 10

        } else {

            juros = 5

        }

        valorDivida = Number(valorDivida);
        diasAtraso = Number(diasAtraso);

        let totalJuros = (valorDivida / 100) * juros;
        let valorTotal = valorDivida + totalJuros;

        console.log("Taxa de juros: "+juros+"%");
        console.log("Valor total com juros: "+valorTotal);
    } else if(diasAtraso == 0) {

        console.log("Você esta em dia continue assim e estará no controle da sua vida financeira!!!");

    } else {
        console.log("O valor digitado não é um numero!!!");
    }
} else if(valorDivida == 0) {

    console.log("Valor digitado deve ser maior que zero!!!");
    
} else {
    console.log("O valor digitado não é um numero!!!");
}
