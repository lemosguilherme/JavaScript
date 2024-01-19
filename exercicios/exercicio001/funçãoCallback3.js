function calculadoraAvancada(n1, n2, callback){
    return callback(n1, n2);
}
function adicao(a, b){
    return a + b;
}
function multiplicacao(a, b){
    return a * b;
}
var soma = calculadoraAvancada(5, 5, adicao)
var multiplicacao = calculadoraAvancada(5, 5, multiplicacao )
console.log(`A soma é ${soma}`)
console.log(`A multiplicação é ${multiplicacao}`)