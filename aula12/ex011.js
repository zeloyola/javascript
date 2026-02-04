// Voto obrigatório ou não

let idade = 71
console.log(`Você possui ${idade} anos de idade.`)

if (idade < 16) {
    console.log(`Você não vota!`)
} else if (idade < 18 || idade > 70){
    console.log(`Seu voto é opcional!`)
} else {
    console.log(`Seu voto é obrigatório!`)
}