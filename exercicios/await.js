const doSomething = () => {
    return new Promise((resolv, reject) => {
        setTimeout(() => 
            resolv('working'), 2000)
    })
}
