// fetch é uma função do JV para fazer requisições.
// toda função fetch retornar uma promise (algo que vai acontecer no futuro)
// then é como se fosse um E ENTÂO faco alguma coisa - resposta da promessa.
// Promise = Promessa (objeto)
// callback esta depois dos thens

// https://jsonplaceholder.typicode.com/posts URL correta, erre alguma coisa na requisição do fetch para fazer os testes da aula 
// catch é para ser execultado quando algo der errado
// usar o ERRO como parametro do catch informa qual o erro 
// finally é quando deu certo 

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
        return response.json();
        })
        .then((json) => {
            console.log(`Titulo do primeiro post no console: ${json[0].title}`);
            alert(`Titulo do primeiro post no alert: ${json[0].title}`);
            // exibindo no console e no alert o titulo do array na posição zero
        })
        .catch((error) =>{
            console.log("Deu problmea!");
            console.log(error);
            alert(`Deu prooblema na requisição.
                Segue o erro. ${error}.`);
        })
        .finally(() => {
            alert("Opa, acacou tudo");
        });
}

document.querySelector('#botao').addEventListener('click', clicou);