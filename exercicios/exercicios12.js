var agora = new Date();
var dia = agora.getDay();

console.log('Você digitou '+dia);

switch(dia){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda Feira');
        break;
    case 2:
        console.log('Terça Feira');
        break;
    case 3:
        console.log('Quarta Feira');
        break;
    case 4:
        console('Quita Feira');
        break;
    case 5: 
        console.log('Sexta feira');
        break;
    case 6:
        console.log('Sabádo');
        break;
    default:
        console.log('Não é um dia da semana');                              
}