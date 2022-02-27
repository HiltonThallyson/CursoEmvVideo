let vetor = []
let inputDisplay = document.querySelector('input#txtnum')
let resultDisplay = document.querySelector('textArea#display')
let resultado = document.getElementById('res')

function adicionar(n){
    let numero = Number(n.value)
    let pronto = verificar(numero, n)
    var elements = document.getElementsByTagName('p')
    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0])
    }
    if (pronto){
        vetor.push(numero)
        inputDisplay.value = ''
        resultDisplay.innerHTML += `Valor ${numero} adicionado.\n`
    }

}

function verificar(valor, inputDisplay){
    if (valor.length == 0 || (valor > 100 || valor < 1) || (vetor.indexOf(valor) != -1)){
        alert('Valor inválido ou já encontrado na linha.')
        inputDisplay.value = ''
        return false
    }else{
        return true
    }
}

function finalizar(){
    let p1 = document.createElement('p')
    p1.innerHTML = `Ao todo, temos ${vetor.length} cadastrados.\n`
    let p2 = document.createElement('p')
    p2.innerHTML = `O maior valor informado foi ${Math.max(...vetor)}.`
    let p3 = document.createElement('p')
    p3.innerHTML = `O menor valor informado foi ${Math.min(...vetor)}.`
    let p4 = document.createElement('p')
    p4.innerHTML = `Somando todos os valores, temos ${vetor.reduce((a, b) => a + b)}.`
    let p5 = document.createElement('p')
    p5.innerHTML = `A média dos valores digitados é ${vetor.reduce((a, b) => a + b)/vetor.length}.`
    
    let resVector = [p1, p2, p3 , p4, p5]

    for (let c = 0; c < 5 ; c++){
        resultado.appendChild(resVector[c])
    }  
}