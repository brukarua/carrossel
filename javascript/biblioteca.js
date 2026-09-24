let titulo = document.getElementById("titulo");
let autor = document.getElementById("autor");
let genero = document.getElementById("genero");
let ano = document.getElementById("ano");

let btnCadastrar = document.getElementById("btnCadastrar");
let estante = document.getElementById("estante");

let livros = [];
btnCadastrar.addEventListener("click", Cadastrar);

function Cadastrar(){

    let livro ={
        titulo: titulo.value,
        autor: autor.value,
        genero: genero.value,
        ano: ano.value
    };

    livros.push(livro);
}

