// Quando não se informa o metodo de requisição para o fetch, automaticamente ele é GET
// Alguns metodos: GET, POST, PUT, DELETE, existe outros mas os principais são esses.
// GET: Pegar as informações
// POST: Postar (mandando - inserido - enviar) as informações
// PUT: Colocar (botar) ele se usa quando ALTERAR alguma informação que já existe
// DELETE: deletar a informação
// fetch é assincrono

/* Caso for usar como arrow function:
    let clicou = async () => {
        }
*/

// Com o async AWAIT o codigo fico menor, mais limpo e facíl
async function clicou(){
    
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    console.log(`Titulo do primeiro post no console: ${json[0].title}`);
    alert(`Titulo do primeiro post no alert: ${json[0].title}`);
        
    alert("Clicou!");    
}

async function inserir() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: "Titulo de teste",
                body: 'Corpo de teste',
                userId: 2
            })
        });
    let json = await response.json();
    console.log(json);    
}


document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);