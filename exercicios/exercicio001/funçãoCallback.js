function realizaroperacao(n1, n2, callback){
    callback(n1, n2)
}
function adicao(a, b){
    console.log(`A soma é ${a  + b}` )
}
function subtracao(a, b){
    console.log(`A subtração é ${a - b}`)
}
function multiplicacao(a, b){
    console.log(`A multiplicação é ${a * b}`)
}
realizaroperacao(5, 5, adicao)
realizaroperacao(5, 5, subtracao)
realizaroperacao(5, 5, multiplicacao)