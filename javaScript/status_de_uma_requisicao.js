/*
    Abaixo segue site com lista de status
    https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status
    Status 200 = Tudo certo

    Abaixo segue o link correto da requisição, para poder testar um erro, erre o link.
    https://jsonplaceholder.typicode.com/posts
    Status 404 = URL não existe/ não encontrada
    Status 500 = problema no servidor


*/ 

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts2')
        .then((response) => {
            console.log(`Status: ${response.status}`); //exibindo o número do Status
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
        });
}

document.querySelector('#botao').addEventListener('click', clicou);