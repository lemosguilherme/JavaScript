// NOTA: constantes podem ser declaradas em caixa alta ou baixa,
// mas uma convenção comum é usar apenas caixa alta

// define MY_FAV como uma constante e lhe atribui o valor 7
const MY_FAV = 7;



// a variável MY_FAV possui o valor 7
console.log("my favorite number is: " + MY_FAV);


// É importante notar a natureza de escopo por bloco
if (MY_FAV === 7) {
    // não tem problema fazer isso, pois cria uma variável de bloco MY_FAV
    // com escopo local (o nome MY_FAV poderia ser usado com let também)
    let MY_FAV = 20;

    // MY_FAV agora é 20
    console.log("meu número favorito é " + MY_FAV);

    // isso retorna um erro, pois tenta registrar a variável no contexto global
}

//MY_FAV ainda é 7
console.log('meu número favorito é ' + MY_FAV);



// const também funciona com objetos
let dado = {nome: "ghdf"}
dado.peso = 6
const dadoInicial = {nome: "João", idade: 15};
Object.freeze(dadoInicial);
dadoInicial.peso = 5;
console.log(Object.isFrozen(dadoInicial));
console.log(dadoInicial);
console.log(dado);