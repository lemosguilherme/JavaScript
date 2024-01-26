let obj1 = {nome: "Gui", dado1: function(){
    console.log(this)
}}
obj1.dado1()

let obj2 = {nome1: "Gui2"}

obj1.dado1.call(obj2)