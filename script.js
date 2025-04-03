function gerarValor(){
    let numero = Math.floor(Math.random()*100)+1;
    document.getElementById("resultado").innerText= "Número Sorteado: " + numero;
}