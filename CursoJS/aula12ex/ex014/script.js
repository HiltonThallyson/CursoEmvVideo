function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var body = document.body
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        //Bom dia
        img.src = './img/manha.png'
        body.style.backgroundColor = "#c3c9c9"
    }else if (hora <= 18){
        //Boa tarde
        img.src = './img/tarde.png'
        body.style.backgroundColor = "#984b1f"
    }else{
        //Boa noite
        img.src = './img/noite.png'
        body.style.backgroundColor = "#031227" 
    }
}