function apertou(){
    var inicio = document.querySelector("#inicio")
    var fim = document.querySelector("#fim")
    var passo= document.querySelector("#passo")
    var resposta = document.querySelector(".resposta")
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("Erro. Digite um valor")
    }

    else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        //contagem crescente
        if (p <= 0){
            alert("Campo 'PASSO' deve ser maior que '0' ")
        }
        else if (i <=f){
            resposta.innerHTML = ""
            for(var c = i; c <= f; c = c + p){
                resposta.innerHTML = `${resposta.innerHTML} &#x1F449 ${c} `
            }
        }
        //contagem regressiva
        else if (i >=f){
            resposta.innerHTML = ""
            for(var c = i; c >= f; c = c- p){
                resposta.innerHTML = `${resposta.innerHTML} &#x1F449 ${c} `
            }
        }   
    }
    
}