doSomething()
  .then(result =>{
      console.log(result);
  })
  .catch(error => {
      console.log(error)
  })

  const doSomething = new Promise(
      (resolv, reject) => {
          const sucess = /*...*/ 
          if (sucess){
              resolv('ok')
          }else{
              reject('this error')
          }
    }
  )