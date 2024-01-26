// clonagem
/*const obj = {a: 1};
const copia = Object.assign({}, obj);
console.log(obj, copia)*/


// mesclagem
/*const obj1 = {a: 1};
const obj2 = {b: 2};
const obj3 = {c: 3};
const objfinal = Object.assign({}, obj1, obj2, obj3);
console.log(objfinal)*/

// transformar de array para objeto
/*const entrada = [["abc", 4], ["nome", "Gui"]];
const obj4 = Object.fromEntries(entrada);
console.log(obj4)*/

// transformar de objeto para array
/*const obj5 = {nome: "gui", sexo: "masculino"};
const obj6 = Object.entries(obj5);
console.log(obj6);*/

// pegar a chave e o valor da lista
const lista = {nome:"Gui", sexo:"masculino"}
const chave = Object.keys(lista)
const valor = Object.values(lista)
console.log(chave,valor)

