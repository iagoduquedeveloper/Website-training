// carne - 2000gr por pessoa + de 6 hr - 4000gr
// cerveja - 12000 ml por pessoa + de 6 hr - 24000ml
// refri - 3000ml por pessoa + 6 hr 50000ml 
// Crianças valem por 0,5



let a = document.getElementById("adultos")
let c = document.getElementById("criancas")
let d = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {

    let adultos = a.value
    let criancas = c.value
    let duracao = d.value

 
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas) ;
    let qtdTotalCerveja = cervejaPP(duracao) * adultos ;
    let qdtTotalBebidas = bebidaPP(duracao) * criancas ;

   resultado.innerHTML = `<p>${qtdTotalCarne / 1000} K de Carne</p>`
   resultado.innerHTML += `<p>${qtdTotalCerveja / 1000} L de Cerveja</p>`
   resultado.innerHTML += `<p>${qdtTotalBebidas / 1000} L de Refrigerante</p>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 4000;
    } 
    else {
        return 2000
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 24000;
    } 
    else {
        return 12000
    }
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 6000;
    } 
    else {
        return 3000
    }
}