
// fetch é uma função do JV para fazer requisições.
//then é como se fosse um E ENTÂO.
// Promise = Promessa
function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json();
    })
        .then((json) => {
            console.log(`Titulo do primeiro post no console: ${json[0].title}`); // exibindo no console o titulo do array na posição zero
            alert(`Titulo do primeiro post no alert: ${json[0].title}`); // exxibindo no alert o titulo do array na posição zero 

        });
    alert("Opa, clicou");
}

//função abaixo feito para apenas explicar um detalhe da aula.
function somar(x,y){
        return x + y;
}

document.querySelector('#botao').addEventListener('click', clicou);