let amigo = {nome: 'João', 
sexo: 'M', 
peso: 81.0, 
emagrecer(p=0){
    console.log('Emagreceu')
    this.peso -= p
}}
console.log(`${amigo.nome} pesa ${amigo.peso}Kgs.`)

amigo.emagrecer(3)
console.log(`${amigo.nome} pesa ${amigo.peso}Kgs.`)