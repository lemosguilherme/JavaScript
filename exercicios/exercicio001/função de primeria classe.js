const dado = function teste(){
    console.log("Testando!")
}
dado()
//----------------------------

function dizOla(){
    return "Olá, "
}
function mostrar(funçãoola, nome){
    //funçãoola chama a função "dizOla" executando e retornado o "Ola" concatenando com o nome "Mundo"
    return funçãoola() + nome
}
let resultado = mostrar(dizOla, "Mundo")
console.log(resultado)

//----------------------------

function dado2(){
    return function(){
        console.log("Olá, Mundo2")
    }
}
let teste = dado2()
teste()

//----------------------------
function dado3(){
    return function(){
        console.log("Olá, Mundo3");
    };
};
dado3()();

