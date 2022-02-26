function gerarTabuada(){
    let valorInput = document.querySelector('input#txtvalor')
    let display = document.querySelector('textArea#txttabuada')
    
    if (valorInput.value.length == 0){
        alert('Por favor, digite um número.')
    }else{
        let valor = Number(valorInput.value)
        let res = 0
        display.innerHTML = ''
        display.style.width = '100px'
        for(var i = 1; i <= 10; i++){
            res = valor * i
            display.innerHTML += `${valor}x${i}=${res}` + '\n'
        }
    }
}