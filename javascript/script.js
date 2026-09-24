// captura o botão "proximo"
let btnProximo = document.getElementById("proximo");

// captura o botão "anterior"
let btnAnterior = document.getElementById("anterior");

// captura o quadro onde a fotografia é exibida
let QuadroImagem = document.getElementById("imagem");

// cria o álbum(matriz) e guarda as fotos
let album = [
    "https://i.pinimg.com/1200x/b9/ed/37/b9ed37c6977f5ed8209d4571805ac4f4.jpg",
    "https://i.pinimg.com/736x/70/17/67/701767209677728923a809f807fc85da.jpg",
    "https://i.pinimg.com/736x/ad/b3/36/adb336a4e5a91f6067cbd1e97e2ec82e.jpg",
]

// quando o botão "proximo" for clicado, executará a função MostrarProximo
btnProximo.addEventListener("click", MostrarProximo);

// define a posição inicial da fotografia do álbum
let foto = 0;



function atualizarImagem() {
    // 1. Remove a classe para limpar a animação anterior
    QuadroImagem.classList.remove("fade");
    
    // 2. Lê a largura da imagem (é um truque obrigatório no JavaScript para forçar a animação a reiniciar)
    QuadroImagem.offsetWidth; 
    
    // 3. Adiciona a classe novamente para iniciar o fade
    QuadroImagem.classList.add("fade");
    
    // 4. Troca o link da imagem
    QuadroImagem.src = album[foto];
}



// função responsável por mostrar a próxima fotografia
function MostrarProximo(){
    //avança uma posição no álbum
    foto = foto + 1;
    if (foto >= album.length) {
        foto = 0;
    }
    QuadroImagem.src = album[foto];
    atualizarImagem();
}


// quando o botão "proximo" for clicado, executará a função MostrarProximo
btnAnterior.addEventListener("click", MostrarAnterior);

function MostrarAnterior(){
    //avança uma posição no álbum
    foto = foto - 1;
    if (foto < 0) {
        foto = album.length - 1;
    }
    QuadroImagem.src = album[foto];
    atualizarImagem();
}


document.addEventListener("keydown", function(evento) {
    // Se a tecla pressionada for a seta para a direita
    if (evento.key === "ArrowRight") {
        MostrarProximo();
    }
    // Se a tecla pressionada for a seta para a esquerda
    else if (evento.key === "ArrowLeft") {
        MostrarAnterior();
    }
});

