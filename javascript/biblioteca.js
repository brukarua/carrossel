let titulo = document.getElementById("titulo");
let autor = document.getElementById("autor");
let genero = document.getElementById("genero");
let ano = document.getElementById("ano");

let btnCadastrar = document.getElementById("btnCadastrar");
let estante = document.getElementById("estante");

let buscando = document.getElementById("busca");

let livros = [];
btnCadastrar.addEventListener("click", Cadastrar);
buscando.addEventListener("keyup", pesquisar)


function Cadastrar(){

    let livro ={
        titulo: titulo.value,
        autor: autor.value,
        genero: genero.value,
        ano: ano.value
    };

    livros.push(livro);
    MostrarLivros();

    titulo.value = "";
    autor.value = "";
    genero.value = "";
    ano.value = "";

}

function MostrarLivros(){
    let saida = "";
    for(let i = 0; i < livros.length; i++){
        saida = saida + `
        <div class = "livro">
        <h3> ${livros[i].titulo} </h3>
        <p> autor: ${livros[i].autor} </p>
        <p> gênero: ${livros[i].genero} </p>
        <p> ano: ${livros[i].ano} </p>
        </div> <br>`
    }

    estante.innerHTML = saida;
}

function pesquisar(){
    let termo = buscando.value.toLowerCase();
    let saida = "";
    for(let i = 0; i < livros.length; i++){
        if(livros[i].titulo.toLowerCase().includes(termo)){
            saida = saida + `
        <div class = "livro">
        <h3> ${livros[i].titulo} </h3>
        <p> autor: ${livros[i].autor} </p>
        <p> gênero: ${livros[i].genero} </p>
        <p> ano: ${livros[i].ano} </p>
        </div> <br>`
        }

        else{

        }
    }

    estante.innerHTML = saida;
}
