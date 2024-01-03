function parimpa(n){
    if (n%2==0){
        return "par"
    }
    else {
        return "impar"
    }
}
var res = parimpa(10)
console.log(res)
//------------------------
function soma(n1=0, n2=0){
    s = n1 + n2
    return s
}
console.log(soma(2, 2))
//------------------------
var valor =  function(n1){
    return n1*2
}
console.log(valor(5))
//------------------------
function fatorial(valor){
    mult2 = valor - 1
    total = valor
    for (var c = mult2; c != 1; c = c - 1){
        total = total*c
    }
    return total
}
var v = fatorial(5)
console.log(v)
//RECURSIVIDADE 
function fatorial(n){
    //chegando em 1 o N recebe 1 
    if(n==1){
        return 1
    }
    else {
        //factorial diminui n - 1 e guarda temporariamente o resultado = 5, 4, 3, 2, 1. 
        /*e aqui comeca o calculo final retornado os valores guardados
        24*5 = 120
        6*4 = 24
        2*3 = 6 
        1*2 = 2
        1*1 = 1    */
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))