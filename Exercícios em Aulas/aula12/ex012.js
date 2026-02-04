// Bom dia, Boa tarde e Boa noite
let relogioPc = new Date()
let hora = relogioPc.getHours()
console.log(`Agora são exatamente ${hora} horas`)

// if (hora > 12) {
//     console.log(`Bom Dia!`)
// } else if (hora <= 18) {
//     console.log(`Boa Tarde!`)
// } else if (hora >= 0 || hora <= 5) {
//     console.log(`Boa Noite!`)
// } else {
//     console.log(`Boa Madrugada!`)
// }

if (hora >= 0 && hora < 5){
    console.log(`Boa Madrugada!`)
} else if(hora < 12){
    console.log(`Bom dia!`)
} else if (hora <=18){
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}