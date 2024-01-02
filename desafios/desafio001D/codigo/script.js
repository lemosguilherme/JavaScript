function apertou(){
    var inicio = Number(document.querySelector("#inicio").value)
    var fim = Number(document.querySelector("#fim").value)
    var passo= Number(document.querySelector("#passo").value)
    var resposta = document.querySelector(".resposta")
    if (inicio == "" || fim == "" || passo == ""){
        alert("Erro. Digite um valor")
    }
    //contagem crescente
    else if (inicio <=fim){
        resposta.innerHTML = ""
        for(var c = inicio; c <= fim; c = c + passo){
            resposta.innerHTML = `${resposta.innerHTML} &#x1F449 ${c} `
        }
    }
    //contagem regressiva
    else if (inicio >=fim){
        resposta.innerHTML = ""
        for(var c = inicio; c >= fim; c = c- passo){
            resposta.innerHTML = `${resposta.innerHTML} &#x1F449 ${c} `
        }
    }   
}