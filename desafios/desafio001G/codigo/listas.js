const envio = document.querySelector("#enviado");
let valor = document.querySelector("#lista")
let lista = document.querySelector(".base2 > ul");
let cont = 1
let cont2 = 1



function limparCaixa(){
    valor.value = ""
}
function criarLista(){
    let liitem = document.createElement("li");
    liitem.id = `nome${cont}`
    cont = cont + 1

    let texto = document.createElement("p");
    let botao = document.createElement("button")
    botao.id = `nome${cont2}`
    cont2 = cont2 + 1
    texto.innerHTML = `${valor.value} `
    botao.innerHTML = "X"

    botao.addEventListener("click", function(){
        if(botao.id == liitem.id){
            let novo = document.querySelector(`.base2 > ul > li#${liitem.id}`)
            novo.parentNode.removeChild(novo)
        }
    })
    liitem.appendChild(texto);
    texto.appendChild(botao);
    lista.appendChild(liitem);
    limparCaixa(valor)
   
};
envio.addEventListener("click", function(){
    if (valor.value.length > 0){
        criarLista();
    } 
    else{
        alert("Digite um valor")

    }
    
});

