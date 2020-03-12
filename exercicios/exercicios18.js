 var nome = ['Luisa',
 'Titita',
 'Docinho',
 'Bonequinha',
 'Sweet'];
  nome.push('Sweet heart');

 console.log(nome.sort());
 console.log(nome.length);

 /*for(var pos = 0; pos < nome.length; pos++){
     console.log(nome[pos]);
 }*/

 for(var pos in nome){
     console.log(nome[pos]);
 }
 novoPos = nome.indexOf('Sweet');
 if(novoPos == -1){
     console.log('O valor não faz parte do array');
 }else{
     console.log(novoPos);
 }