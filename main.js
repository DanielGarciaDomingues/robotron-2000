const controles = document.querySelectorAll("[data-ajuste]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const peca = document.querySelectorAll("[data-pecas]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const cores = ["Amarelo", "Azul", "Branco", "Preto", "Rosa", "Vermelho"]
const controlaCor = document.querySelectorAll("[data-reserva]")
const corAtual = document.querySelector("[data-cor]").dataset.cor 
let textsrc = document.querySelector("[data-cor]")["src"]

let indice = cores.findIndex((nome) => nome == corAtual)
function manipulaDados(operacao, controle) {
    const contador = controle.querySelector("[data-contador]")
    contador.value = parseInt(contador.value) + verificaSinal(operacao, 1)
    
}
function atualizaEstatisticas (operador, peca) {
    
    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent ) + verificaSinal(operador, pecas[peca][elemento.dataset.estatistica])
    })         
}
function verificaSinal(sinal, elemento){
    if(sinal === "+"){
        return elemento
    }else{return -1*elemento}
}
function mudaCor (sinal) {
    
   if (sinal === "+" && indice < 5){ 
    document.querySelector("[data-cor]")["src"] = textsrc.replace(corAtual, cores[indice +1])
    document.querySelector("[data-image]")["src"] = textsrc.replace(corAtual, cores[indice +1])
    indice++
   }else if(sinal === "+" && indice == 5){
    document.querySelector("[data-cor]")["src"] = textsrc.replace(corAtual, cores[0])
    document.querySelector("[data-image]")["src"] = textsrc.replace(corAtual, cores[0])
    indice = 0
   }else if(sinal === "-" && indice > 0){
    document.querySelector("[data-cor]")["src"] = textsrc.replace(corAtual, cores[indice -1])
    document.querySelector("[data-image]")["src"] = textsrc.replace(corAtual, cores[indice -1])
    indice--                
   }else if(sinal === "-" && indice == 0){
    document.querySelector("[data-cor]")["src"] = textsrc.replace(corAtual, cores[5])
    document.querySelector("[data-image]")["src"] =  textsrc.replace(corAtual, cores[5])
    indice = 5
   }
}

controles.forEach((elemento) => { 
    elemento.addEventListener("click" , (evento) => {
        manipulaDados(evento.target.dataset.ajuste, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.ajuste, evento.target.dataset.pecas)
    })}
)
controlaCor.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        mudaCor(evento.target.dataset.reserva)
    })
})


    