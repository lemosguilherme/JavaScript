function dado(){
    console.log(this)
}

let objeto = {nome: "Gui"}

dado = dado.bind(objeto)
// bind liga o THIS ao OBJETO

dado()

// É como se fosse assim:
let objeto2 = {nome: "Gui", dado2 : function(){console.log(this)}}
objeto2.dado2()