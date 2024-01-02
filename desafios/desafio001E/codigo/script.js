function apertou(){
    var num = document.querySelector("#numero")
    resposta = document.querySelector("#tabuada")
    resposta2 = document.querySelector("#tabuada2")
    if (num.value.length == 0){
        alert("Digite um valor numérico")
        resposta.innerHTML = ""
        resposta2.innerHTML = ""
    }
    else {
        n = Number(num.value)
        resposta.innerHTML = ""
        resposta2.innerHTML = ""
        for(var c = 0; c<=10;c++){
            mult = n * c 
            //usando caixa de texto
            resposta.innerHTML += `${n} x ${c} = ${mult} \n`
            //usando select
            var item = document.createElement("option")
            item.innerHTML = `${n} x ${c} = ${mult}`
            resposta2.appendChild(item)
        }
    }
}