const novaTarefa = document.querySelector('.input-nova-tarefa')
const btn = document.querySelector('.btn-add-tarefa')
const listaUl = document.querySelector('.tarefas')

let indice = 0

btn.addEventListener('click', () => {
    newTarefa = document.createElement('li')
    newTarefaText = document.createTextNode(novaTarefa.value)
    newTarefa.appendChild(newTarefaText)


    newTarefaButton = document.createElement("button")
    newTarefaButton.addEventListener('click', apagaElemento(indice))

    newTarefaButtonText = document.createTextNode('apagar')
    newTarefaButton.appendChild(newTarefaButtonText)

    newTarefa.appendChild(newTarefaButton)


    listaUl.appendChild(newTarefa)
    indice++

})

function apagaElemento(indic) {
    alert(indic)
}