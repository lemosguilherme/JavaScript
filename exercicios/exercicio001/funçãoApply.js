let obj1 = {nome:"Gui", dado: function(a, b, c){console.log(this)}};
obj1.dado();

let obj2 = {nome:"Gui2"};

obj1.dado.apply([1, 5 ,9]);