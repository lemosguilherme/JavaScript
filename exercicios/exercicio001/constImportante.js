// NOTA: constantes podem ser declaradas em caixa alta ou baixa,
// mas uma convenção comum é usar apenas caixa alta

// define MY_FAV como uma constante e lhe atribui o valor 7
const MY_FAV = 7;

// a variável MY_FAV possui o valor 7
console.log("my favorite number is: " + MY_FAV);

// tentar redeclarar a constante emite um erro - Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
//const MY_FAV = 20;

// o nome MY_FAV está reservado para a constante acima, logo também irá falhar
//var MY_FAV = 20;

// isso também vai falhar
//let MY_FAV = 20;

// É importante notar a natureza de escopo por bloco
if (MY_FAV === 7) {
    // não tem problema fazer isso, pois cria uma variável de bloco MY_FAV
    // com escopo local (o nome MY_FAV poderia ser usado com let também)
    let MY_FAV = 20;

    // MY_FAV agora é 20
    console.log("meu número favorito é " + MY_FAV);

    // isso retorna um erro, pois tenta registrar a variável no contexto global
    //var MY_FAV = 20;
}

//MY_FAV ainda é 7
console.log('meu número favorito é ' + MY_FAV);



// CONGELAR UM OBJETO PARA NÃO SER ALTERADO POR TERCEIROS
// LET DADO PODE SER ALTERADO
let dado = {nome: "ghdf"}
dado.peso = 6
// CONST DADOINICIAL NÃO PODE SER ALTERADO POIS ESTA CONGELADO
const dadoInicial = {nome: "João", idade: 15, a: {peso: ""}};
Object.freeze(dadoInicial);
dadoInicial.peso = 5;
console.log(Object.isFrozen(dadoInicial));
// TERIA QUE CONGELAR CADA OBJETO DENTRO DO OBJETO
Object.freeze(dadoInicial.a)
console.log(dadoInicial);
//OBJETO DENTRO DE OBJETO POR SER ALTERADO
dadoInicial.a.peso = 5
console.log(dadoInicial.a)
console.log(dado);
// ARRAY CONGELADO
const valores = [0, 1];
Object.freeze(valores);
valores[0]= 10
console.log(valores)


