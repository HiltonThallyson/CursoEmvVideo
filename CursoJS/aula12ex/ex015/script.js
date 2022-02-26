function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fAno.value.length == 0 || Number(fAno.value > ano)){
        alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        //criando imagem com js
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fSex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', './img/menino.png')
            }else if(idade < 21) {
                //Jovem
                img.setAttribute('src', './img/jovem-h.png')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src', './img/adulto-h.png')
            }else {
                //idoso
                img.setAttribute('src', './img/idoso-h.png')
            }
        }else if(fSex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src', './img/menina.png')
            }else if(idade < 21) {
                //Jovem
                img.setAttribute('src', './img/jovem-m.png')
            }else if(idade < 50) {
                //Adulto
                img.setAttribute('src', './img/adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', './img/idosa-m.png')
            }
        }
        
        res.style.textAlign = 'center' //alinhando texto  no js
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}