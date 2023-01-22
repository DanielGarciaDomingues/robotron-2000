const controles = document.querySelectorAll('.controle-ajuste')
const contador = document.querySelectorAll('input.controle-contador')
//falta generalizar seletores de value
function manipulaDados(operacao) {
    if (operacao === "+"){
        braco.value = parseInt(braco.value)+ 1
    } else {
        braco.value = parseInt(braco.value)- 1
    }
}

controles.forEach((elemento) => { 
    elemento.addEventListener("click" , (evento) => {
        manipulaDados(evento.target.textContent)
    })}
)


