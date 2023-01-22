const controles = document.querySelectorAll(".controle-ajuste")
// const contador = document.querySelectorAll('.controle-contador')

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector(".controle-contador")
    if (operacao === "+"){
        peca.value = parseInt(peca.value)+ 1
    } else {
        peca.value = parseInt(peca.value)- 1
    }
}

controles.forEach((elemento) => { 
    elemento.addEventListener("click" , (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
        // console.log(evento.target.parentNode)
    })}
)


