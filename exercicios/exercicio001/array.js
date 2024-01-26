/*let dado = ["gui", "gui2"]
console.log(dado[1])*/

/*const valor = new Array(5);
valor.fill(7, 0, 5)
console.log(valor)*/

/*const num = [5, 2, 1, 3, 4, 7, 8, 10, 6, 9, 11, 13, 15, 20, 30]
num.sort((a, b) => a-b)
console.log(num)*/

const lista = [
    {a: 5, b:5},
    {a: 1, b:7},
    {a: 3, b:9}
]
const filtro = lista.filter((Element) => Element.a > 2)
console.log(filtro)

const encontrar = lista.find((Element) => Element.a == 3)
console.log(encontrar)

const mostrar = lista.forEach((Element) => console.log(`a: ${Element.a} b: ${Element.b}`))