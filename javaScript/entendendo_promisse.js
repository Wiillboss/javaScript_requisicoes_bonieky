// Promise = Promessa
function clicou(){
    let req = fetch('https://jsonplaceholder.typicode.com/posts');
    
    req.then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(`Titulo do primeiro post no console: ${json[0].title}`); // exibindo no console o titulo do array na posição zero
        alert(`Titulo do primeiro post no alert: ${json[0].title}`); // exxibindo no alert o titulo do array na posição zero 

    })

}

function somar(x,y){
        return x + y;
}

document.querySelector('#botao').addEventListener('click', clicou);