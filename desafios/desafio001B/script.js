function carregar(){
    var g = document.getElementsByTagName("h1")
    var bomdia = "bom-dia.jpg"
    var boatarde = "boa-tarde.jpg"
    var boanoite = "boa-noite.jpg"
    var agora = new Date()
    var hora = agora.getHours()
    var resposta = document.querySelector("div.hora > h2")
    var img = document.querySelector("div.imagem")
    resposta.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora <= 12){
        document.body.style.backgroundColor = "orange"
        img.style.backgroundImage = "url('bom-dia.jpg')"
    }
    else if (hora<=18){
        document.body.style.backgroundColor = "rgb(238, 122, 122)"
        img.style.backgroundImage = "url('boa-tarde.jpg')"
        g.style.backgroundColor = "#EBEBEB"
    }
    else {
        document.body.style.backgroundColor = "gray"
        img.style.backgroundImage = "url('boa-noite.jpg')"
    }
}