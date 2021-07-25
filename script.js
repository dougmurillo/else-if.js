let nota = 80
if (nota >= 90) {
    console.log (`Parabéns! Você está aprovado, sua nota é A `)
} else if ( nota >= 80 && nota <= 89){
    console.log(`Muito bom! Você está aprovado, sua nota é B `)
} else if ( nota >= 70 && nota <= 79){
    console.log (`Bom! Você está aprovado, sua nota é C `)
} else if ( nota >= 60 && nota <= 69){
    console.log (`Que pena! Não foi dessa vez, você está reprovado. Sua nota é D `)
} else if ( nota < 60){
    console.log (`Estude mais! Infelizmente você não conseguiu atingir a média. Sua nota é F `)
}