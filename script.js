function gerarValor(){
    let numero = Math.floor(Math.random()*100)+1;
    document.getElementById("resultado").innerText= "Número Sorteado: " + numero;
}

function Tema(){

    let f = window.getComputedStyle(document.body).backgroundColor;

    if (f.includes("255, 255, 255")) {
        document.body.style.backgroundColor = "#141415";
    }
    else{
        document.body.style.backgroundColor = "white"
    }

}

