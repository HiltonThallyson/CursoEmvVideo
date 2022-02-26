var agora = new Date()
var hora = agora.getHours() // pega a hora atual

if (hora == 1){
    console.log(`Agora são exatamente ${hora} hora.`)
}else{
    console.log(`Agora são exatamente ${hora} horas.`)
}

if (hora < 5){
    console.log('Boa madrugada!')
}else if (hora < 12) {
    console.log('Bom dia!')
}else if (hora <=18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}