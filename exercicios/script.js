function verifica(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementsByName('txtano');
    var res = document.getElementById('res');

    if(ano.length == 0 || Number(ano.value) > ano){
        alert('[ERRO] Verifique se os dados estão preenchidos correctamente');
    }else{
        var sex = document.getElementById('radsex');
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        var idade = ano - fano;
        res.innerHTML = 'Idade calculada '+idade; 
        var genero = '';
        if(sex[0].checked){
            genero = 'homem';
            if(idade <= 10){
                img.setAttribute('src', '03.jpg')
            }else if(idade <= 21){
                img.setAttribute('src', '03.jpg')
            }else if(idade <= 50){
                img.setAttribute('src', '03.jpg')
            }else{
                img.setAttribute('src', '03.jpg')
            }
        }else if(sex[1].checked){
            genero = 'mulher';
            if(idade <= 10){
                img.setAttribute('src', '02.jpg')
            }else if(idade <= 21){
                img.setAttribute('src', '01.jpg')
            }else if(idade <= 50){
                img.setAttribute('src', '02.jpg')
            }else{
                img.setAttribute('src', '01.jpg')
            }
        }
        res.appendChild('img');
    }
    
}
function contar(){
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var resultado = document.getElementById('resultado');

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        resultado.innerHTML = ('[Erro] campos vázio');
    }else{
       var i = Number(inicio.value);
       var f = Number(fim.value); 
       var p = Number(passo_value);

       for(var c = i; c <= f; c += p){
           resultado.innerHTML +=  +c;
       }
    }
}