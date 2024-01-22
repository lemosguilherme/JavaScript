/*console.log(this===window)
console.log(this.document === document)
this.dado = 37
console.log(window.dado)*/
//----------------------------------
/*function teste(num){
    console.log(this)
}
teste(3)*/
//----------------------------------
/*var dado = {nome: "Gui", função: function teste(num){
    this.nome = "joao"
    d = dado.nome
    return `${num} ${d}`
}}
var resultado = dado.função("Olá") // OU dado["função"]("Olá")
console.log(resultado)*/
// CRIAÇÃO DE OBJETO GLOBAL

//var dado = () => {console.log(this)}

// CRIAÇÃO DE OBJETO ARROW > ERRADO
/*var dado = {
    nome: "gui",
    função: (num) => {console.log(this)}
}
dado.função(3)*/

// CRIAÇÃO DE OBJETO ARROW > CORRETO
var dado = {
    nome: "gui",
    função: function(n1){
        console.log((() => this)()) 
    }
}
dado.função(3)
