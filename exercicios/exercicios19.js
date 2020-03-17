//function with param
function parImpar(n){
    if(n % 2 == 0){
        return 'Par';
    }else{
        return 'Impar';
    }
}
console.log(parImpar(10));

function soma(n1 = 0, n2 = 0){
    return n1 + n2;
}
console.log(soma(2, 90));

//Function into the variable
 var v = function(x){
     return x**2
 }

 console.log(v(4));
 //Array function
 var getNumber =  (n) => {
      return (n);
  }
console.log(getNumber('Luis'));
  //Factorial
  var fat = 1;
   function fatorial(n){
       for(var c = n; c > 1; c-- ){
           fat *= c;
       }
       return fat;
   }
   console.log(fatorial(7));

   //Recursity
   function factorial(n){
       if(n == 1){
           return 1;
       }else{
           return n * factorial(n - 1);
       }
   }
   console.log(factorial(7));

//Functions
   const getIdade = () => console.log(22);

   getIdade();

   const getPessoa = (nome = 'Mario',
                        idade='21') =>{
        return  getPessoa();
   }