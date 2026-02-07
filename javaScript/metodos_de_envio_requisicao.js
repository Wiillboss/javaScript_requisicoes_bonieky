// Quando não se informa o metodo de requisição para o fetch, automaticamente ele é GET
// Alguns metodos: GET, POST, PUT, DELETE, existe outros mas os principais são esses.
// GET: Pegar as informações
// POST: Postar (mandando - inserido - enviar) as informações
// PUT: Colocar (botar) ele se usa quando ALTERAR alguma informação que já existe
// DELETE: deletar a informação

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

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: "Titulo de teste",
                body: 'Corpo de teste',
                userId: 2
            })
        }
    )
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });
}


document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);