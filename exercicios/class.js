class Person{
    name
    age
      construtor(name){
        this.name = name
      }
      hello(){
        return 'hello world ' + this.name + '';
      }
  }
  const Mario = new Person('Mario');
  console.log(Mario.hello());
 