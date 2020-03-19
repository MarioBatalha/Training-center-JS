//first form
let carro = {
  marca: 'Toyota',
  modelo: 'Hiace',  
  cor: 'Preto',
  acentos: 0,
  matricula: 'LD-90-04-MA',
  mover (a = 0){
    console.log('conduzir');
    this.acentos += a
  }
}
console.log(carro.mover());
console.log(carro.acentos || 1);

//second form
//const car = new Object();

//three form
//const car = object.create();


