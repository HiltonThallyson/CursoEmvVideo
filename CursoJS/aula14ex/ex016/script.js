var inicioInput = document.getElementById('inicio')
var fimInput = document.querySelector('input#fim')
var passoInput = document.getElementById('passo')
var res = document.querySelector('div#res')

var inicio = Number(inicioInput.value)
var fim = Number(fimInput.value)
var passo = 0


function verificar(){

    if(inicioInput.value.length == 0 || Number(inicioInput.value) > Number(fimInput.value)){
        res.innerHTML = '<p>Impossível contar!</p>'
    }
    if(Number(passoInput.value) == 0 || passoInput.value.length == 0){
        alert('Passo inválido! Considerando passo 1')
        passo = 1
    }else{
        passo = Number(passoInput.value)      
    }
    inicio = Number(inicioInput.value)
    fim = Number(fimInput.value)
}

function contar(){
    verificar()
    res.innerText = 'Contando:'
    var p = document.createElement('p')
    res.innerHTML += '<br>'
    res.appendChild(p)
    while(inicio <= fim){
        p.innerHTML += inicio + '<p>&#x1F449</p>'
        inicio += passo
        console.log(inicio)
    }
    p.innerHTML += '<p>&#x26AB</p>'
}