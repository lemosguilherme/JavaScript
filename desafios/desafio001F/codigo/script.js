var lista = []
var soma = 0 
var resultado = document.querySelector("#resultado")
var final = document.querySelector("#final")
var caixa = document.querySelector("#valor")
function Badicionar(){
    valor(Number(document.querySelector("#valor").value))
    function valor(n1){
        if (n1 < 1 || n1 > 100){
            alert("Valor inválido")
        }
        else if (lista.indexOf(n1) != -1){
            alert("Valor já digitado")
        }
        else {
            var item = document.createElement("option")
            item.innerHTML = `Valor ${n1} adicionado`
            resultado.appendChild(item)
            lista.push(n1)
            soma = soma + n1
        }
    }
    final.innerHTML = ""
    caixa.value = ""
    caixa.focus()
}
function Bfinalizar(){
    if (lista.length == 0){
        alert("Adicione números para finalizar")
    }
    else if (final.innerText.length == 0) {
        var item2 = document.createElement("p")
        var maior = Math.max.apply(null, lista)
        var menor = Math.min.apply(null, lista)
        item2.innerHTML = `<p>Ao total temos ${lista.length} números cadastrados</p> 
        <p>O maior valor foi ${maior}</p> 
        <p>O menor valor foi ${menor}</p> 
        <p>A soma de todos os elementos é ${soma}</p> 
        <p>A média dos elementos é ${soma/lista.length}</p>`
        final.appendChild(item2)
    }
}

