var amigo = {nome: "joão", sexo: "m", peso: 84.5, engordar(p = 0){
    console.log("engordou");
    //amigo.peso---eu quero usar a variavel peso do objeto amigo
    this.peso = this.peso + p;
}};
amigo.engordar(2);
console.log(amigo.peso);