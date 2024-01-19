function verificarArray(valor, callback){
    return callback(valor)
}
function verificar(num){
    var maiorDez = 0
    for(cont=0;cont<num.length;cont++){
        if (num[cont]>10){
            maiorDez = maiorDez + 1
        }
    }
    if (num.length - maiorDez == 0){
        return true
    }
    else {
        return false
    }
}
var lista = [21, 12,20]
var resultado = verificarArray(lista, verificar)
console.log(resultado)