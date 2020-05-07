/*class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}
class TodoList extends List{
  constructor(){
      super();

      this.user = 'Mario Batalha'
  }
  showuser(){
      console.log(this.user);
  }

}

const MinhaLista = new List();
document.getElementById('novoTodo').onclick = function(){
    MinhaLista.add('Novo todo');

const arr = [2,3,45,6,7,8,9,11];
const newArr = arr.map(function(item) {
    return item * 2;
});
console.log(newArr);

const sum = arr.reduce(function(total, next){
    return total + next;
});
console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 === 0
});
console.log(filter);

const find = arr.find(item => {
  return item === 8;
});
console.log(find);

const person = {
    name: 'Mario',
    age: 21,
    address: {
        province: 'Luanda',
        city: 'Belas'
    }
}
 const {name, age, address: { city}} = person;
 console.log(age);
 console.log(city);*/

 /*challeange-1*/
  class Admin{
    constructor(){
        this.email
        this.key 
    }
    isAdmin(email, key){
        return email === 'mariobatalha9@gmail.com' && key === 'inf09';
    }
  }
  class User extends Admin{
    constructor(){
        super();
    }
  }

const user1 = new User();
const admin1 = new Admin();

console.log(user1.isAdmin('mariobatalha9@gmail.com', 'inf09'));
console.log(admin1.isAdmin('amriobatalha9@gmail.com', 'inf09'));

//Challenge-1
const user = [
  {name: 'Mario', year: 46, company: 'Rocketseat'},
  {name: 'Angélica', year: 30, company: 'Rocketseat'},
  {name: 'Amilton', year: 20, company: 'END'}  
];
//2.1
const allAge = user.map(function(item, index){
    return item['year']
});
console.log(allAge)

//2.2
const filterUser = user.filter(function(item){
  return item['company'] === 'Rocketseat' && item['year'] > 18
});

console.log(filterUser);

//2.3
const findUser = user.find(function(item){
    return item['company'] == 'Google'
});
console.log(findUser);

//2.4
const op = user.map(function(item){
    return item['year'] * 2;
});
console.log(op);

const opFind = user.filter(function(item){
    return item['year'] >= 50 
});
console.log(opFind)
//challenge-3
//3.1
const arrow = [1,2,3,4,5]; 
const array = arrow.map((item) =>{
  return item + 10
});
console.log(array)

//3.2
const nome = 'Marco'
const anos = 21

const mostraUsuario = (nome= 'Marco', anos = 19) =>{
    return {nome, anos}
}
console.log(mostraUsuario(nome, anos));
console.log(mostraUsuario(anos));

//3.3
const usar = {nom: 'Golai', idad: '23'}
const mostraUsar = (usar) =>{
    return usar.nom
} 
console.log(mostraUsar(usar));

//3.4
const promise = () =>{
    return new Promise((resolve, reject) =>{
        return resolve();
    });
}

//Challenge-4

const empresa = {
    nicknome: 'Rocketseat',
    endereco: {
        cidade: 'Rio de Janeiro',
        estado: 'SC',
    }
}

const {nicknome, endereco: {cidade, estado}} = empresa;
console.log(nome)
console.log(cidade)
console.log(estado)


//Challenge
//5.1
const numero = [1,2,3,4,5,6];
const x = numero.shift();
//const y = ...numero;
console.log(x)

//5.2
function soma(...num){
  let result = 0;
  for(let index = 0; index <num.length; index++){
    result += num[index];
    }
    return result    
}
console.log(soma(1,2,3,4,5,55,6));
/*challenge-6*/
const fullName = 'Mário Batalha'
const newAge = 21
console.log(`O meu nome é ${fullName} e tenho ${newAge} anos de idade`)

/*challenge-7*/
const AdminUser = {
    fullName,
    newAge,
    cidade: 'Luanda'
};
console.log(AdminUser)
