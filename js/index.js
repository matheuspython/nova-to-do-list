const inputTarefa = document.querySelector('.input-nova-tarefa') //texto
const btnTarefa = document.querySelector('.btn-add-tarefa') //botao pra enviar
const tarefas = document.querySelector('.tarefas') //lista ul

function criaLi() {
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

function limpaInput() {
    inputTarefa.value = ''
    inputTarefa.focus()
}

function criaBotaoApagar(li) {
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'excluir'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

function criaTarefa(textoInput) {
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    criaBotaoApagar(li)
    limpaInput()
    salvarTarefa()
}


btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e) {
    const el = e.target
    if (el.classList.contains("apagar")) {
        el.parentElement.remove()
        salvarTarefa()
    }

})

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll("li")
    const listaDeTarefas = []

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace("excluir", '').trim()
        listaDeTarefas.push(tarefaTexto)
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)

}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()