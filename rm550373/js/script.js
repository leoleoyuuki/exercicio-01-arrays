
let tarefas = [];


let adicionaFim = document.querySelector('#btnAdicionaFim');
let adicionaInicio = document.querySelector('#btnAdicionaInicio');

let remove = document.querySelector('#btnRemove');
let limpar = document.querySelector('#btnClear');
let apaga = document.querySelector("#idRemovePrimeiro")

//botao adiciona tarefa ao final
adicionaFim.addEventListener("click", ()=>{
    let novaTarefa = document.querySelector('#idTarefa').value;
    tarefas.push(novaTarefa);

    for (let i = 0 ; i < tarefas.length ; i++){
        tarefas[i] = '-' + tarefas[i];
        let lista = document.querySelector('.lista').innerHTML = tarefas.join("<br/>");

    }

    let clearTarefa = document.querySelector("#idTarefa").value = "";
  
});



//botao adiciona tarefa ao comeco
adicionaInicio.addEventListener("click", ()=>{
    let novaTarefa = document.querySelector('#idTarefa').value;
    tarefas.unshift(novaTarefa);

    for (let i = 0 ; i < tarefas.length ; i++){
        let lista = document.querySelector('.lista').innerHTML = tarefas.join("<br/>");

    }

    let clearTarefa = document.querySelector("#idTarefa").value = "";
  
});



//botao remove primeira tarefa
apaga.addEventListener("click", ()=>{
    tarefas.shift()
    let lista = document.querySelector('.lista').innerHTML = tarefas.join("<br/>"); 
});



//botao remove ultima tarefa
remove.addEventListener("click", ()=>{
    tarefas.pop()
    let lista = document.querySelector('.lista').innerHTML = tarefas.join("<br/>"); 
});


//botao limpar
limpar.addEventListener("click", ()=>{
    tarefas.splice(0,tarefas.length);
    let lista = document.querySelector('.lista').innerHTML = tarefas.join("<br/>"); 
});



