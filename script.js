function gerarValor(){
    let numero = Math.floor(Math.random()*100)+1;
    document.getElementById("resultado").innerText= "Número Sorteado: " + numero;
}

let botaotema = document.getElementsByClassName("botao");
let fundo = document.getElementsByTagName("body");

botaotema.addEventListener("click", function(){
    fundo.style.backgroundColor = "white";
})

