function filtrarPares(valores, callback){
    return callback(valores);
}
function par(valor){
    var lista2 = []
    for(var cont=0; cont < lista.length; cont++){
        if (valor[cont] % 2 == 0){
            lista2.push(valor[cont])
        }
    }
    return lista2
}
var lista = [1, 2,6,7,10]
var pares = filtrarPares(lista, par)
console.log(pares)



