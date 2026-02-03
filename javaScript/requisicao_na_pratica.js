
function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json[0].title); // exibindo no console o titulo do array na pocição zero
        alert(`Titulo do primeiro post: ${json[0].title}`); // exxibindo no alert o titulo do array na pocição zero 

    })
}

document.querySelector('#botao').addEventListener('click', clicou);