// 2. Sistema de Exibição de Mensagem com switch - Verificação de Dia da Semana
// Esse sistema recebe um número correspondente a um dia da semana (1 para segunda-feira, 2 para terça-feira, etc.)
//e exibe uma mensagem informando qual é o dia atual. Se o número informado não corresponder a um dia válido (1 a 7), 
//uma mensagem de erro é mostrada, indicando que o valor inserido é inválido.

let dia1 = 'segunda-feira'
let dia2 = 'terça-feira'
let dia3 = 'quarta-feira'
let dia4 = 'quinta-feira'
let dia5 = 'sexta-feira'
let dia6 = 'sábado'
let dia7 = 'domingo'
let dia8 = 'indefinido'
let dia9 = 'indefinido'

let diaDaSemana = dia8

switch (diaDaSemana) {
    case dia1:
        console.log('Bom dia! Hoje é', diaDaSemana, 'e tenha uma boa semana 💖');
        break;

    case dia2:
        console.log('Bom dia! Hoje é', diaDaSemana, 'e tenha uma boa semana 💖');
        break;

    case dia3:
        console.log('Bom dia! Hoje é', diaDaSemana, 'e tenha uma boa semana 💖');
        break;

    case dia4:
        console.log('Bom dia! Hoje é', diaDaSemana, 'e tenha uma boa semana 💖');
        break;

    case dia5:
        console.log('Bom dia! Hoje é', diaDaSemana, 'e tenha uma boa semana 💖');
        break;

    case dia6:
        console.log('Bom dia! Hoje é', diaDaSemana, 'e tenha uma boa semana 💖');
        break;

    case dia7:
        console.log('Bom dia! Hoje é', diaDaSemana, 'e tenha uma boa semana 💖');
        break;
}


if (diaDaSemana) {
    console.log(diaDaSemana);
}